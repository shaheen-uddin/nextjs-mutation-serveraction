export default function NewUserForm() {
  const addUser = async (formData) => {
    "use server";
    console.log(formData.get("name"));
    console.log(formData.get("email"));
    //console.log(formData);
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
