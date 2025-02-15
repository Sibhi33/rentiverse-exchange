
import { Search } from "lucide-react";

export const SearchBar = () => {
  return (
    <div className="relative max-w-2xl w-full">
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search for anything to rent..."
        className="w-full pl-12 pr-4 py-4 rounded-full border border-gray-200 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all duration-300"
      />
    </div>
  );
};
