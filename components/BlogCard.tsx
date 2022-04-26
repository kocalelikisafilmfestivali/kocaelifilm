/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC } from "react";

interface BlogCardProps {
  post: any;
}

const BlogCard: FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-selectShadow">
      <div className="relative flex-shrink-0 w-full h-48">
        <img
          className="object-cover w-full h-full"
          src={`${process.env.NEXT_APP_API_IMAGE_URL}${post.image.url}`}
          alt={post.title}
        />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6 bg-white">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            {post.tags.name}
          </p>
          <Link href={`/blog/${post.id}`}>
            <a className="block mt-2">
              <p className="text-xl font-semibold text-gray-900">
                {post.title}
              </p>
              <p className="mt-3 text-base text-gray-500 line-clamp-3">
                {post.description}
              </p>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
