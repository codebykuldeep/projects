'use server';

import { serverSession } from "@/auth";
import { addComment, deleteALL, getCommentsById } from "@/lib/comment";
import { updateViewCount } from "@/lib/video";

export async function updateViews(id:string){
    console.log('updating views',id);
    updateViewCount(id);
    console.log('updated');
    
    
}

export async function commentAction(video_id:string,formData:FormData) {
    const comment = formData.get('comment');
    const session =await serverSession();
    let user;
    if(!session){
        return;
    }
    user = session.user as any;
    

    addComment(comment as string,video_id,user.id); 

    return  getCommentsById(video_id);
    
}