import { auth } from "@/auth";

// Example page for route protection & examining current user
export default async function UserPage() {
  const session = await auth();

  return <div>{JSON.stringify(session)}</div>;
}
