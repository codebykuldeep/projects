import { serverSession } from "@/auth";
import { addComment } from "@/lib/comment";
import { updateLike } from "@/lib/likes";

export async function POST(req:Request,res:Response){
    const data =await req.json();
    const session =await serverSession();
    if(!session){
        return Response.json({ sucess:'failed',message:'Unauthenticated to upldate like' })
    }
    let user = session.user;
    const user_id = (user as { id: string }).id;
    const {video_id,like} =data;
   

    updateLike(user_id,video_id,like);
    
    
    return Response.json({ sucess:'uploaded' })
    
}