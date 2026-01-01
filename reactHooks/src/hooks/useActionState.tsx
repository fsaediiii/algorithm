import { useActionState } from "react";

type State = null | { error: string } | { id: number };

const FormHandler = () => {
  const [state, formAction, isPending] = useActionState(createPost, null);

  async function createPost(prevState: State, formData: FormData): Promise<State> {
    const title = formData.get("title");

    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        body: "test body",
        userId: 1,
      }),
    });

    if (!res.ok) {
      return { error: "Request failed" };
    }

    return await res.json();
  }

  return (
    <form action={formAction}>
      <input name="title" placeholder="Post title" />

      <button disabled={isPending}>{isPending ? "Sending..." : "Submit"}</button>
    </form>
  );
};

export default FormHandler;
