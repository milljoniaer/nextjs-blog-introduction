import Link from "next/link";
import { Post } from "../../types";

export const PostCard = ({ title, image, body, id }: Post) => {
  const previewText = `${body.slice(0, 100)}${body.length > 100 ? "..." : ""}`;

  return (
    <Link href={`/post/${id}`}>
      <div className="card" style={{ width: "200px" }}>
        <img {...image} className="card-img-top" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{previewText}</p>
        </div>
      </div>
    </Link>
  );
};
