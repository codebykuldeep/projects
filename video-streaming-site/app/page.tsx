import { redirect } from "next/navigation";

export default function Home() {
  redirect('/home');
  return (
    <>
    Redirecting to Homepage.....
    </>
  );
}
