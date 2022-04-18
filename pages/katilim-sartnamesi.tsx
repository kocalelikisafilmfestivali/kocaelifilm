import { gql } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { client } from "../apollo-client";
export default function Terms({ terms }: { terms: any }) {
  return (
    <div className="py-10 bg-white sm:py-20 box min-h-[calc(100vh-152px)]">
      <div className="text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Kocaeli Kısa Film Festivali Katılım Esasları
        </h2>
      </div>
      <div className="mt-10">
        <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
          {terms.map((term: any) => (
            <div key={term.id}>
              <h3 className="font-semibold text-left text-black">
                {term.title}
              </h3>
              <div className="mt-3 prose-sm text-left max-w-none">
                <DocumentRenderer document={term.content.document} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const {
    data: { terms },
  } = await client.query({
    query: gql`
      query Terms {
        terms {
          id
          title
          content {
            document
          }
        }
      }
    `,
  });

  if (!terms) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      terms: terms,
    },
  };
}
