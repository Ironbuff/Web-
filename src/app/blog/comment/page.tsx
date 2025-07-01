'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery } from '@tanstack/react-query';
import dayjs from 'dayjs';
import Image from 'next/image';
import { PiArrowFatDownLight, PiArrowFatUpLight } from 'react-icons/pi';

import { AddComment, getComment, reactOnComment } from '@/lib/comment';

const Comment = ({ id }: { id: number | string }) => {
  interface users {
    id: number;
    user: {
      userName: string;
      profilePicture: string;
    };
    createdAt: string;
    commentText: string;
    likeCount: number;
    dislikeCount: number;
  }

  const [CommentText, setCommentText] = useState('');
  const [alerts, setAlerts] = useState('');
  const [UserId, setUserId] = useState<string | null>('');
  const router = useRouter();
  const api = process.env.NEXT_PUBLIC_API;
  const BlogId = parseInt(id);

  useEffect(() => {
    setUserId(localStorage.getItem('UserId'));
  }, []);

  // Get comments
  const {
    data: comment = [],
    refetch
  } = useQuery<users[]>({
    queryKey: ['comment', BlogId],
    queryFn: async () => {
      const result = await getComment(BlogId);
      return result.data;
    }
  });

  // Add comment mutation
  const addCommentMutation = useMutation({
    mutationFn: async (formdata: FormData) => await AddComment(formdata),
    onSuccess: (result) => {
      if (result?.status === 200) {
        setAlerts('Comment Added Successfully');
        setCommentText('');
        refetch();
        setTimeout(() => setAlerts(''), 3000);
      } else if (result?.status === 401) {
        setAlerts('Unauthorized. Please login.');
        router.push('/login');
      }
    }
  });

  // React on comment mutation
  const reactMutation = useMutation({
    mutationFn: async ({
      CommentId,
      Reaction
    }: {
      CommentId: number;
      Reaction: 1 | -1;
    }) => await reactOnComment({ CommentId, Reaction, UserId }),
    onSuccess: (res) => {
      if (res.status === 200) refetch();
    },
    onError: () => {
      alert('Login to share reaction');
      router.push('/login');
    }
  });

  const handleComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!UserId) {
      setAlerts('Please login to comment');
      router.push('/login');
      return;
    }

    const formdata = new FormData();
    formdata.set('CommentText', CommentText);
    formdata.set('UserId', UserId);
    formdata.set('BlogId', String(BlogId));
    formdata.set('CreatedAt', new Date().toISOString());

    addCommentMutation.mutate(formdata);
  };

  const handlereaction = (CommentId: number, Reaction: 1 | -1) => {
    reactMutation.mutate({ CommentId, Reaction });
  };

  return (
    <section className="w-full h-full flex items-start justify-center flex-col gap-y-3 py-10">
      {/* Input */}
      <div className="flex flex-col gap-y-2 w-full items-start justify-center">
        <h1 className="text-xl font-semibold leading-relaxed">
          Share your Comment
        </h1>
        <form
          onSubmit={handleComment}
          className="flex flex-col justify-center w-full"
        >
          <textarea
            placeholder="What do you think of Blog"
            value={CommentText}
            onChange={(e) => setCommentText(e.target.value)}
            className="lg:w-[80%] w-full shadow-md rounded-lg p-3 outline-none bg-gray-100"
          />
          {alerts && (
            <p
              className={`font-semibold text-lg ${
                alerts.includes('Added')
                  ? 'text-green-500'
                  : 'text-red-500'
              }`}
            >
              {alerts}
            </p>
          )}
          <button
            type="submit"
            className="p-2 bg-blue-500 rounded-lg text-neutral-100 hover:bg-blue-600 hover:scale-105 mt-2"
          >
            Add Comment
          </button>
        </form>
      </div>

      {/* List */}
      <div className="grid grid-cols-1 gap-2 lg:w-[70%] w-full">
        {comment?.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start shadow-md p-3 gap-y-4 w-full bg-neutral-700 text-neutral-100 rounded-xl"
          >
            {/* Profile */}
            <div className="flex flex-row gap-x-2 items-center justify-start">
              <Image
                src={`${api}/${item.user.profilePicture}`}
                width={60}
                height={60}
                className="object-cover w-10 h-10 rounded-full"
                alt={item.user.userName}
              />
              <div className="flex flex-col gap-y-1">
                <h1 className="text-base font-bold">
                  {item.user.userName || 'Dummy User'}
                </h1>
                <p className="text-sm font-light">
                  {dayjs(item.createdAt).format('MMM D, YYYY h:mm A')}
                </p>
              </div>
            </div>

            {/* Comment + Like/Dislike */}
            <div className="text-lg flex flex-col gap-y-3">
              <p>{item.commentText}</p>
              <div className="flex flex-row gap-x-3 items-center justify-start">
                <button onClick={() => handlereaction(item.id, 1)}>
                  <span className="flex items-center justify-center">
                    {item.likeCount}
                    <PiArrowFatUpLight className="hover:text-blue-500 transition-all duration-300" />
                  </span>
                </button>

                <button onClick={() => handlereaction(item.id, -1)}>
                  <span className="flex items-center justify-center">
                    {item.dislikeCount}
                    <PiArrowFatDownLight className="hover:text-red-500 transition-all duration-300" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Comment;
