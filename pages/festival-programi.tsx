import { gql } from "@apollo/client";
import { DocumentRenderer } from "@keystone-6/document-renderer";
import { client } from "../apollo-client";
export default function Program({ programs }: { programs: any }) {
  return (
    <div className="py-10 bg-white sm:py-20 box min-h-[calc(100vh-152px)]">
      <div className="text-left">
        <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
          Festival Programı
        </h2>
      </div>
      {programs.length > 0 ? (
        <div className="mt-10">
          <div className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-10">
            {programs.map((program: any) => (
              <div key={program.id}>
                <h3 className="font-semibold text-left text-black">
                  {program.title}
                </h3>
                <div className="mt-3 prose-sm text-left max-w-none">
                  <DocumentRenderer document={program.content.document} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-4 text-left text-slate-700">
          Program çok yakında eklenecektir.
        </p>
      )}
    </div>
  );
}

export async function getStaticProps() {
  const {
    data: { programs },
  } = await client.query({
    query: gql`
      query Programs {
        programs {
          id
          title
          content {
            document
          }
        }
      }
    `,
  });

  if (!programs) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      programs: programs,
    },
    revalidate: 1800,
  };
}
