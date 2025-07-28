import { Achievement } from "@/types/types";

type AchievementCardProps = {
  achievement: Achievement;
};

export default function AchievementCard({ achievement }: AchievementCardProps) {
  return (
    <div className="border-l-4 border-blue-500 pl-4 py-2 hover:border-blue-700 transition-colors">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-bold">{achievement.title}</h3>
          <p className="text-gray-600 text-sm mt-1">
            {achievement.description}
          </p>

          {/* Additional fields based on achievement type */}
          {achievement.patentNumber && (
            <p className="text-gray-500 text-xs mt-2">
              Patent: {achievement.patentNumber}
            </p>
          )}
          {achievement.citations && (
            <p className="text-gray-500 text-xs mt-2">
              Citations: {achievement.citations}
            </p>
          )}
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full whitespace-nowrap ml-4">
          {achievement.year}
        </span>
      </div>
    </div>
  );
}
