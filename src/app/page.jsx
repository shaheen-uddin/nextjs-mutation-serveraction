import Image from "next/image";
import NewUserForm from "./components/NewUserForm";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto h-screen p-2 space-y-2">
      <h2 className="text-2xl font-semibold">User Registration</h2>
      <NewUserForm />
      <div>
        <h2 className="text-2xl font-semibold">User List</h2>
      </div>
    </div>
  );
}
