export default function MemberListSkeleton() {
  return (
    <div
      className={`w-[90%] md:w-full h-14 md:h-52 lg:h-60 rounded-xl ring-[2px] ring-metaco_gray_border bg-metaco_gray flex justify-center md:flex-col`}
    >
      <div className="h-full md:h-2/4 w-[25%] md:w-full flex items-center justify-center">
        <div className="h-10 w-10 md:h-20 lg:h-24 md:w-20 lg:w-24 rounded-full bg-gray-600 bg-opacity-60 animate-pulse"></div>
      </div>
      <div className="h-full md:h-1/4 w-[50%] md:w-full flex flex-col justify-center md:justify-start px-2 lg:px-4 gap-1">
        <span className="h-4 w-16 md:h-5 md:w-20 lg:w-24 rounded-md bg-gray-600 bg-opacity-60 animate-pulse"></span>
        <span className="h-5 w-28 md:h-6 md:w-32 lg:w-36 rounded-md bg-gray-600 bg-opacity-60 animate-pulse"></span>
      </div>
      <div className="h-full md:h-1/4 w-[25%] md:w-full flex items-center md:items-start justify-center md:pt-2 lg:pt-1">
        <div className="h-6 lg:h-8 w-11 md:w-20 lg:w-24 rounded-md bg-gray-600 bg-opacity-60 animate-pulse"></div>
      </div>
    </div>
  );
}
