function PostsCard({ post }: { post: Post }) {
  return (
    <div>
      <h2>{post.userId}</h2>
      <p>{post.body}</p>
    </div>
  );
}

export default PostsCard;
