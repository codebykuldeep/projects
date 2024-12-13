import React from 'react'
import VideoPlayer from './VideoContent/VideoPlayer'
import VideoDetail from './VideoContent/VideoDetail'
import VideoComment from './VideoContent/VideoComment'
import { getVideoWithCreatorById } from '@/lib/video';
import { CommentUserType, VideoCreatorType } from '@/helper/commonTypes';
import { getCommentsById } from '@/lib/comment';


export default async function VideoContent({ params,}: {params: Promise<{ id: string }>;}) {
  const {id} =await params;
  const data = getVideoWithCreatorById(id);
  const comments = getCommentsById(id);
  
  return (
    <>
    <VideoPlayer video={data as VideoCreatorType}/>
    <VideoDetail video={data as VideoCreatorType}/>
    <VideoComment video={data as VideoCreatorType} comments={comments as CommentUserType[]}/>
    </>
  )
}
