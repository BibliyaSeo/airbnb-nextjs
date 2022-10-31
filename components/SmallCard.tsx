import Image from "next/image";

interface SmallCardProps {
  img: string;
  distance: string;
  location: string;
}

export default function SmallCard({ img, distance, location }: SmallCardProps) {
  return (
    <div
      className="flex items-center m-2 mt-5 space-x-4 
        ounded-xl cursor-pointer hover:bg-gray-100
        hover:scale-105 transition transform duration-200 ease-out"
    >
      <div className="relative h-16 w-16">
        <Image src={img} alt="img" fill className="rounded-lg" sizes="fill" />
      </div>
      <div>
        <h2>{location}</h2>
        <h3 className="text-gray-500">{distance}</h3>
      </div>
    </div>
  );
}
