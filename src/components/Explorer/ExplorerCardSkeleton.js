export default function ExplorerCardSkeleton() {
  return (
    <div className="w-full h-[240px] rounded-2xl bg-metaco_gray ring-[2px] ring-inset ring-metaco_gray_border flex flex-col">
      <div className="w-full h-2/5 flex items-center justify-center">
        <div className="h-14 w-14 rounded-full bg-gray-600 animate-pulse"></div>
      </div>
      <div className="w-full h-3/5 flex flex-col items-center justify-between px-5 pb-4">
        <span className="w-full h-7 rounded-lg bg-gray-600 animate-pulse"></span>
        <span className="w-24 h-7 rounded-lg bg-gray-600 animate-pulse"></span>
        <span className="w-full h-9 rounded-lg bg-gray-600 animate-pulse"></span>
      </div>
    </div>
  );
}
