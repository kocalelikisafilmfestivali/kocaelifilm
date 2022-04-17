import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface JuriCardProps {
  person: any;
}

const JuriCard: FC<JuriCardProps> = ({ person }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative w-full mb-4 overflow-hidden rounded-lg shadow-lg aspect-square">
        <Image layout="fill" objectFit="cover" src={person.imageUrl} alt="" />
      </div>
      <Link href={`/juri/${person.href}`}>
        <a>
          <h3>{person.name}</h3>
          <p className="text-indigo-600">{person.role}</p>
        </a>
      </Link>
    </div>
  );
};

export default JuriCard;
