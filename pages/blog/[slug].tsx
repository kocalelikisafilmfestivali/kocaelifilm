import { gql } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import Image from "next/image";
import { client } from "../../apollo-client";

const Blog = ({ post }: { post: any }) => {
  return (
    <div className="gap-8 py-10 bg-white md:grid md:grid-cols-2 sm:py-20 box">
      <div className="relative w-full mx-auto mb-8 overflow-hidden rounded-lg shadow-lg aspect-square">
        <Image
          src={`${process.env.NEXT_APP_API_IMAGE_URL}${post.image.url}`}
          alt={post.title}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="w-full">
        <div className="mx-auto mb-5 text-lg max-w-prose">
          <h1>
            <span className="block mt-2 text-3xl font-bold text-left text-gray-900 sm:text-4xl">
              {post.title}
            </span>
            <span className="block text-base font-semibold text-left text-indigo-600">
              {post.tags.name}
            </span>
          </h1>
        </div>
        <div className="mx-auto prose text-left max-w-none">
          <DocumentRenderer document={post.content.document} />
        </div>
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const {
    data: { posts },
  } = await client.query({
    query: gql`
      query Posts {
        posts {
          id
        }
      }
    `,
  });

  const paths = posts.map((post: any) => ({
    params: { slug: post.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const {
    data: { post },
  } = await client.query({
    query: gql`
      query Post($where: PostWhereUniqueInput!) {
        post(where: $where) {
          id
          title
          description
          image {
            url
          }
          type
          tags {
            name
          }
          content {
            document
          }
        }
      }
    `,
    variables: {
      where: {
        id: params.slug,
      },
    },
  });

  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: { post: post },
    revalidate: 90,
  };
};
