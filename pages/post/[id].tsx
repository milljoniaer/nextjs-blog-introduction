import Head from "next/head";
import { Navbar } from "../../src/components/navbar/navbar";
import { Post } from "../../src/types";

export default function BlogPost({ post }: { post: Post }) {
  return (
    <>
      <Head>
        <title>{post.title} | Next Blog</title>
      </Head>
      <Navbar />
      <img {...post.image} style={{ width: "100%" }} />
      <div className="container">
        <h1>{post.title}</h1>
        <p>{post.body.repeat(10)}</p>
      </div>
    </>
  );
}

export const getServerSideProps = async ({ params: { id } }: any) => {
  const response = await fetch(`http://localhost:3000/api/items/${id}`);
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
