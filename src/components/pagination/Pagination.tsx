'use client'



import React from 'react'
import { Button } from '../ui/button'


interface Paginationprop {
    currentpage:number,
    totalpages:number,
    setCurrentpage(page:number):void
}

const Pagination:React.FC<Paginationprop> = ({currentpage,totalpages,setCurrentpage}) => {

  
    return (
    <div className='flex flex-row gap-x-2 items-center '>
      {Array.from({length:totalpages},(_,index)=>(
        <Button variant={'secondary'} key={index} onClick={()=>setCurrentpage(index+1)} className={`${currentpage===index+1?"shadow-md rounded-lg":"bg-transparent shadow-transparent"}`}>
                {index+1}
        </Button>
      ))}
    </div>
  )
}

export default Pagination