'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { searchIndex } from './data/searchIndex';

interface SearchItem {
  title: string;
  content: string;
  url: string;
}

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchItem[]>([]);
  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase();
    setQuery(input);

    if (input.trim()) {
      const filtered = searchIndex.filter((item) =>
        item.title.toLowerCase().includes(input) ||
        item.content.toLowerCase().includes(input)
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && results.length > 0) {
      router.push(results[0].url);
      clearSearch();
    }
  };

  const handleSelect = (url: string) => {
    router.push(url);
    clearSearch();
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
  };

  const highlightText = (text: string) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === query.toLowerCase() ? (
        <span key={i} className="bg-violet-200 text-violet-800 font-semibold">{part}</span>
      ) : (
        part
      )
    );
  };

  const getSnippet = (text: string) => {
    if (!query) return text.slice(0, 80);
    const lower = text.toLowerCase();
    const index = lower.indexOf(query);
    if (index === -1) return text.slice(0, 80);
    const start = Math.max(0, index - 40);
    const end = Math.min(text.length, index + 40);
    return text.slice(start, end) + (end < text.length ? '...' : '');
  };

  return (
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full px-4 py-2 rounded-full border border-gray-300 shadow-sm text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 transition"
      />

      {results.length > 0 && (
        <ul className="absolute z-30 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg max-h-64 overflow-y-auto">
          {results.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item.url)}
              className="group px-4 py-3 cursor-pointer hover:bg-violet-50 transition-all duration-150 rounded-lg"
            >
              <div className="text-sm font-medium text-gray-800 group-hover:text-violet-700">
                {highlightText(item.title)}
              </div>
              <p className="text-xs text-gray-500 mt-1 group-hover:text-gray-700">
                {highlightText(getSnippet(item.content))}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
