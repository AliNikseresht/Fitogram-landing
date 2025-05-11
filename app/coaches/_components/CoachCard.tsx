import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Coach } from "@/types/Coach";


const CoachCard: FC<{ coach: Coach }> = ({ coach }) => (
  <div className="bg-white rounded-lg p-3 md:p-5 shadow hover:shadow-lg duration-200">
    <Image
      src={coach.imageUrl}
      alt={coach.name}
      className="w-full h-auto object-cover rounded mb-4"
      width={500}
      height={500}
      priority
    />
    <h3 className="text-xl font-semibold text-gray-800">{coach.name}</h3>
    <p className="text-gray-500 mt-1">{coach.tags.join(", ")}</p>
    <Link
      href={coach.profileLink}
      className="mt-4 inline-block c-blue hover:underline text-sm"
    >
      View Profile
    </Link>
  </div>
);

export default CoachCard;
