import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  desc: string;
}

export default function Card({ image, title, desc }: CardProps) {
  return (
    <div className="flex items-center flex-col md:flex-row gap-5 bg-gray-100 rounded-md p-3 hover:scale-102 transition-all">
      <Image
        src={image}
        alt="Image"
        width={300}
        height={200}
        className="rounded-md"
      />
      <div className="space-y-5">
        <h2 className="text-primary text-2xl font-semibold">{title}</h2>
        <p className="text-gray-700 text-xl">{desc}</p>
      </div>
    </div>
  );
}
