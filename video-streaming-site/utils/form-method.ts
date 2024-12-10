'use server';

import { writeFile } from "fs/promises";
import path from "path";



const waitPeriod  =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(true);
    },5000);
})

export async function uploadAction(prevSate:string,formData:FormData) {
    // const title =formData.get('title');
    // const description = formData.get('description');
    // const category = formData.get('category');
    // const image:any =formData.get('image');
    // const video:any =formData.get('video');
    
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

    console.log('running');
    
    
    return 'error';
}