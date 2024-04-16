import connectMongo from "../dbConnect/connectMongo";
import User from "../models/User";

export default function NewUserForm() {
  const addUser = async (formData) => {
    "use server";
    const name = formData.get("name");
    const email = formData.get("email");
    //console.log(formData);
    const userData = { name, email };

    await connectMongo();
    await new User(userData).save();
  };
  return (
    <form action={addUser} className="flex flex-col gap-3">
      <input
        type="text"
        name="name"
        id=""
        placeholder="Name"
        className="h-8 rounded-md pl-3 text-slate-700"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="h-8 rounded-md pl-3 text-slate-600"
      />
      <button type="submit" className="bg-indigo-500 rounded-md h-8">
        Submit
      </button>
    </form>
  );
}
