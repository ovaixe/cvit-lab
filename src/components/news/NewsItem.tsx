type NewsItemProps = {
  title: string;
  date: string;
  description: string;
  category: string;
};

export default function NewsItem({
  title,
  date,
  description,
  category,
}: NewsItemProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2 hover:border-blue-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full mb-2">
            {category}
          </span>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <span className="text-gray-500 text-sm whitespace-nowrap ml-4">
          {date}
        </span>
      </div>
      <a
        href="#"
        className="inline-block mt-3 text-blue-600 text-sm font-medium hover:underline"
      >
        Read more
      </a>
    </div>
  );
}
