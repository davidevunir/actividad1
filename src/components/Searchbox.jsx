import {Search} from 'lucide-react';
import {useSearch} from "../hooks/UseSearch.jsx"

export const SearchBox = () => {
  const {inputValue, setInputValue, executeSearch, handleKeyDown} = useSearch();

  return (
      <div className="relative max-w-md">
        <input className="w-full px-4 py-2 pr-20 rounded-full border border-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:border-transparent text-gray-900 placeholder-gray-500 bg-white"
               type="text"
               placeholder="Buscar..."
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={handleKeyDown}/>
        <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 rounded-full hover:bg-gray-200"
                onClick={executeSearch}>
          <Search size={20}/>
        </button>
      </div>
  );
}
