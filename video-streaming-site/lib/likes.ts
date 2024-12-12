import db from "./database";

//like - true  || dislike- false
export function updateLike(user_id:string,video_id:string,likeType:boolean){
    const data  = db.prepare('SELECT * FROM likes where user_id =? AND video_id =?').get(user_id,video_id);
    console.log(data);
    
    // if(data){
    //     const stmt =db.prepare(`UPDATE likes SET count = count + 1 WHERE user_id = ? AND video_id= ?`)
    //     stmt.run(id)
    // }
}

export function getLikesCount(video_id:string){
    const like:any  = db.prepare('SELECT * FROM likes where user_id =? AND like = 0').all(video_id);
    const dislike:any  = db.prepare('SELECT * FROM likes where user_id =? AND like = 1').all(video_id);
    let likeCount = like.length || 0;
    let dislikeCount = dislike.length || 0
    return [likeCount,dislikeCount];
}