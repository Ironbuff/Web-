'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { ReactNode, useState } from 'react';
import { Bounce, ToastContainer } from "react-toastify";


export default function ReactQueryProvider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
       <ToastContainer
        position="top-right"
        autoClose={1000}
        transition={Bounce}
      />
      {children}
    </QueryClientProvider>
  );
}
