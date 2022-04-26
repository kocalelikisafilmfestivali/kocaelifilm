/* eslint-disable @next/next/no-img-element */
import { gql } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { client } from "../../apollo-client";

const Blog = ({ jury }: { jury: any }) => {
  return (
    <div className="gap-8 py-10 bg-white md:grid md:grid-cols-2 sm:py-20 box">
      <div className="relative w-full mx-auto mb-8 overflow-hidden rounded-lg shadow-lg aspect-square">
        <img
          src={`${process.env.NEXT_APP_API_IMAGE_URL}${jury.image.url}`}
          alt={jury.name}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="w-full">
        <div className="mx-auto mb-5 text-lg max-w-prose">
          <h1>
            <span className="block mt-2 text-3xl font-bold text-left text-gray-900 sm:text-4xl">
              {jury.name}
            </span>
            <span className="block text-base font-semibold text-left text-indigo-600">
              {jury.juryType}
            </span>
          </h1>
        </div>
        {jury?.content?.document && (
          <div className="mx-auto prose text-left max-w-none">
            <DocumentRenderer document={jury.content.document} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

export async function getStaticPaths() {
  const {
    data: { juries },
  } = await client.query({
    query: gql`
      query Juries {
        juries {
          id
        }
      }
    `,
  });

  const paths = juries.map((post: any) => ({
    params: { slug: post.id },
  }));

  return { paths, fallback: false };
}

export const getStaticProps = async ({ params }: { params: any }) => {
  const {
    data: { jury },
  } = await client.query({
    query: gql`
      query Jury($where: JuryWhereUniqueInput!) {
        jury(where: $where) {
          name
          id
          job
          juryType
          content {
            document
          }
          image {
            url
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

  if (!jury) {
    return {
      notFound: true,
    };
  }

  return {
    props: { jury: jury },
  };
};
