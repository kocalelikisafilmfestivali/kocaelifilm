/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { FC } from "react";

interface JuriCardProps {
  person: any;
}

const JuriCard: FC<JuriCardProps> = ({ person }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="object-contain w-full mb-4 overflow-hidden rounded-lg shadow-lg aspect-square">
        <img
          className="object-cover w-full h-full"
          src={`${process.env.NEXT_APP_API_IMAGE_URL}${person.image.url}`}
          alt={person.name}
        />
      </div>
      <Link href={`/juri/${person.id}`}>
        <a>
          <h3>{person.name}</h3>
          <p className="text-indigo-600">{person.job}</p>
        </a>
      </Link>
    </div>
  );
};

export default JuriCard;
