import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";

// Example page for route protection & auth testing
export default async function UserPage() {
  const session = await auth();

  return (
    <div className="flex flex-col items-start p-5 gap-5">
      {JSON.stringify(session)}
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit">Sign out</Button>
      </form>
    </div>
  );
}
