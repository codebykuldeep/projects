const waitPeriod  =new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(true);
    },5000);
})

export async function POST(req:Request,res:Response){
    const data =await req.json();
    console.log('body',data);
    
    await waitPeriod;

    return Response.json({ sucess:'uploaded' })
    
}