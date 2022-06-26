export default function ActivityListSkeleton() {
  return (
    <div className="w-full h-7 lg:h-8 flex text-xs md:text-sm lg:text-lg text-white">
      <div className="w-3/5 h-full flex items-center pl-2">
        <span className="h-5 lg:h-7 w-5/6 md:w-4/5 bg-gray-600 bg-opacity-60 rounded-md animate-pulse"></span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center">
        <span className="h-5 lg:h-7 w-full md:w-4/5 bg-gray-600 bg-opacity-60 rounded-md animate-pulse"></span>
      </div>
      <div className="w-1/5 h-full flex items-center justify-center">
        <span className="h-5 lg:h-7 w-5 md:w-7 bg-gray-600 bg-opacity-60 rounded-md animate-pulse"></span>
      </div>
    </div>
  );
}
