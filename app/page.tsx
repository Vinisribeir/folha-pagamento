import { auth } from "@/auth";
// import { redirect } from "next/navigation"; 

export default async function Home() {
  const session = await auth();

  console.log(session);
  return <div>{session?.user?.name && <h2>Olá {session?.user?.name}</h2>}</div>;
}
