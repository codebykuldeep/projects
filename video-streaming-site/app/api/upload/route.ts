const waitPeriod  =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(true);
    },5000);
})

export async function POST(req:Request,res:Response){
    console.log(req.body);

    await waitPeriod;

    return Response.json({ sucess:'uploaded' })
    
}