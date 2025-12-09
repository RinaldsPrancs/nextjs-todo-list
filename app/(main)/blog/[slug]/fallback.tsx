export default function Fallback() {
  return (
    <div className="p-4 animate-pulse">
      <div className="h-8 w-1/3 bg-gray-300 rounded mb-4"></div>
      <div className="h-4 w-2/3 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-1/2 bg-gray-300 rounded mb-2"></div>
      <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
    </div>
  );
}