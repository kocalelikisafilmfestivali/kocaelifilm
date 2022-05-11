/* eslint-disable @next/next/no-img-element */
import { gql } from "@apollo/client";
import Link from "next/link";
import { FC } from "react";
import { client } from "../apollo-client";

interface FleetProps {
  fleets: any;
}

const Fleet: FC<FleetProps> = ({ fleets }) => {
  return (
    <div className="py-10 bg-white sm:py-16 box min-h-[calc(100vh-152px)]">
      <h2 className="mb-12 text-3xl font-bold tracking-tight text-left text-black sm:text-4xl">
        Basında Biz
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6 lg:gap-y-12">
        {fleets.map((fleet: any, i: number) => (
          <div key={i}>
            <div className="w-full mb-4 overflow-hidden border rounded-lg shadow-lg aspect-square">
              <img
                className="object-contain w-full h-full"
                src={`${process.env.NEXT_APP_API_IMAGE_URL}${fleet.image.url}`}
                alt={fleet.title}
              />
            </div>

            <Link href={fleet.href}>
              <a>
                <h3>{fleet.title}</h3>
                <p className="text-xs text-indigo-600"> {fleet.description}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fleet;

export async function getStaticProps() {
  const {
    data: { fleets },
  } = await client.query({
    query: gql`
      query Fleet {
        fleets {
          description
          title
          image {
            url
          }
          href
        }
      }
    `,
  });

  if (!fleets) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      fleets,
    },
  };
}
