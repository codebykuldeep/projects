import CreatorLayout from "@/components/CreatorPage/CreatorLayout";

export default async function page({ params}: {params: Promise<{ id: string }>;}) {
    const {id} = await params;
    console.log(id);
    
    return (
      <CreatorLayout userId={id}/>
    )
  }
  