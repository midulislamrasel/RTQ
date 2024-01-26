// import PostsCard from "./components/PostsCard";

import { FormEvent, useState } from "react";
import PostsCard from "./components/PostsCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

function App() {
  const { isLoading, data } = useGetPostsQuery("");
  // console.log(isLoading, isError, isSuccess, data, error);
  const [newPost] = useNewPostMutation();

  const [title, setTitel] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const post: Post = {
      title,
      body,
      userId: Math.random() * 1000,
      id: Math.random() * 1000,
    };
    newPost(post);
    setTitel("");
    setBody("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="userId"
          value={title}
          onChange={(e) => setTitel(e.target.value)}
        />
        <input
          type="text"
          placeholder="userId"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h1>My App</h1>
      {isLoading ? (
        <div>Loging...</div>
      ) : (
        data?.map((i) => <PostsCard key={i.id} post={i} />)
      )}
    </div>
  );
}

export default App;
