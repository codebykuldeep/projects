'use client';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import { VideoCreatorType } from '@/helper/commonTypes';
import classes from './video-content.module.css'
import { getLikesCount } from '@/lib/likes';
import { useOptimistic, useState, useTransition } from 'react';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


interface LikeSectionProps{
  video:VideoCreatorType;
  like:string;
  dislike:string;
}
type stateType ={
  like:number;
  dislike:number;
}

type LikeStatus = 'LIKE' | 'DISLIKE' | 'NULL';


export default function LikeSection({video,like,dislike}:LikeSectionProps) {
  // const [state, updateFn] = useOptimistic<stateType,boolean>(
  //   {like:Number(like),dislike:Number(dislike)},updateState)

  //   const [isPending, startTransition] = useTransition();

  //   function updateState(currentState:stateType, value:boolean){
  //     console.log(value);
      
  //     return currentState
  //   }
  const [likeState,setLikeState] =useState<LikeStatus>('NULL')
  
  console.log(likeState);
  
    function handleUpdate(current:LikeStatus){
      console.log('run',current);
      
      setLikeState(prev=>{
        
        if(current === 'LIKE' || current === 'DISLIKE'){
          console.log('1');
          return 'NULL';
        }
          
        return current;
      })
      
    }
  return (
    <div className={classes.likes}>
      <span>
        {likeState ==='LIKE' ? <ThumbUpIcon onClick={()=>handleUpdate('LIKE')}/> : <ThumbUpOutlinedIcon onClick={()=>handleUpdate('LIKE')}/> } 
        <span>{like}</span>
      </span> 
      <span>
      {likeState ==='DISLIKE' ? <ThumbDownIcon onClick={()=>handleUpdate('DISLIKE')}/> : <ThumbDownAltOutlinedIcon onClick={()=>handleUpdate('DISLIKE')}/>  } 
      <span>{dislike}</span>
      </span>
      </div>
  )
}
