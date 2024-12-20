import Image from "next/image";
import Link from "next/link";

interface BlogPostProps {
  title: string;
  image: string;
  handle: string;
  shortContent: string;
}

export function BlogPost(post: BlogPostProps) {
  return (
    <Link href={`blog/${post.handle}`}>
      <div className="flex flex-col gap-2">
        <div className="relative aspect-video rounded-md overflow-hidden">
          <Image src={post.image} alt={post.title} fill />
        </div>

        <h2 className="text-xl font-bold text-left text-gray-800">{post.title}</h2>

        <p className="line-clamp-2 text-sm text-neutral-500 font-semibold text-left">
          {post.shortContent}
        </p>
      </div>
    </Link>
  );
}