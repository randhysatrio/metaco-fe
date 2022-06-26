export default function ActivityList({ result }) {
  return (
    <div className="w-full h-6 lg:h-8 flex text-xs md:text-sm lg:text-lg text-white">
      <div className="w-3/5 pl-2 h-full flex items-center">
        <span className="truncate">{result.tournament?.title}</span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center">
        <span>{result.tournament?.end_date}</span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center">
        <span className="font-bold">{result.position}</span>
      </div>
    </div>
  );
}
