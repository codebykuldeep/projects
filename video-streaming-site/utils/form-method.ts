'use server';

import { serverSession } from "@/auth";
import { UserType } from "@/helper/commonTypes";
import { serverValidation } from "@/helper/validation";
import { insertVideo } from "@/lib/video";
import { writeFile } from "fs/promises";
import path from "path";



const waitPeriod  =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(true);
    },5000);
})

export async function uploadAction(prevSate:string,formData:FormData) {
    const title =formData.get('title');
    const description = formData.get('description');
    const category = formData.get('category');
    const image:any =formData.get('image');
    const video:any =formData.get('video');
    const data = {title,description,category,image,video}
    
    // if(video.size === 0 ){
    //     return 'video error'
    // }

    // const buffer = Buffer.from(await video.arrayBuffer())
    // const filename =  video.name.replaceAll(" ", "_");
    // await writeFile(
    //     path.join(process.cwd(), "public/video/" + filename),
    //     buffer
    //   );
    
    // await waitPeriod;
    // console.log('go');
    const session =await serverSession();
    
    if(!session){
        return 'invalid session .Please login and try again'
    }
    let user =session.user as any;
    const error = serverValidation(data as any);
    if (Object.entries(error).length > 0) {
    
         return ("Please enter valid inputs and ensure you uploaded files !");
    }
    data.image = '/image/default.jpg';
    data.video = '/video/default.mp4';
    try {
        insertVideo(user.id,data)
        return 'upload successfully'
    } catch (error) {
       console.log(error);
        
    }
    
    
    return JSON.stringify(user);
}