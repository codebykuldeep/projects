import { serverSession } from "@/auth";
import { addComment } from "@/lib/comment";

export async function POST(req:Request,res:Response){
    const data =await req.json();
    const session =await serverSession();
    if(!session){
        return Response.json({ sucess:'failed',message:'Unauthenticated to add comment' })
    }
    let user = session.user;
    
    
   
    const {comment,video_id} =data
    
    const user_id = (user as { id: string }).id;
    addComment(comment,video_id,user_id);
    
    
    return Response.json({ sucess:'uploaded' })
    
}