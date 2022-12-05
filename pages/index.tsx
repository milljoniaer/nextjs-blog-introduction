import { Navbar } from "../src/components/navbar/navbar";
import Head from "next/head";
import { Post } from "../src/types";
import { PostCard } from "../src/components/post-card/post-card";

export default function Home({ posts }: { posts: Post[] }) {
  return (
    <>
      <Head>
        <title>Blog | Test Next.js</title>
      </Head>
      <div>
        <Navbar />
        <div className="container">
          <h1>Blog</h1>
          <div className="post-grid">
            {posts.map((post) => (
              <PostCard key={post.id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const response = await fetch("http://localhost:3000/api/items");
  const data = await response.json();

  return {
    props: {
      posts: data,
    },
  };
};
