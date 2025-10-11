import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  desc: string;
}

export default function Card({ image, title, desc }: CardProps) {
  return (
    <div className="group card hover:scale-105 transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-shrink-0 w-full lg:w-80">
          <div className="relative group/image">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl blur-sm group-hover/image:blur-md transition-all duration-300"></div>
            <div className="relative w-full h-48 lg:h-64 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-xl border border-cyan-500/20 overflow-hidden">
              <Image
                src={image}
                alt="Computer Vision Example"
                fill
                className="object-cover group-hover/image:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
        
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors font-orbitron">
            {title}
          </h2>
          <p className="text-gray-300 leading-relaxed">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}
