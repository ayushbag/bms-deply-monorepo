import { prisma } from "@repo/db/index"

export default async function Home() {

  const user = await prisma.user.findFirst();

  return (
    <div>
      <div>username: </div>
      {user?.username} <br />
      <div>password: </div>
      {user?.password}
    </div>
  );
}
