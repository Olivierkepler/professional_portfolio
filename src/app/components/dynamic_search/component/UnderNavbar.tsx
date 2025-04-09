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
    const value = e.target.value.toLowerCase();
    setQuery(value);

    if (value.trim()) {
      const filtered = searchIndex.filter((item: SearchItem) =>
        item.title.toLowerCase().includes(value) ||
        item.content.toLowerCase().includes(value)
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

  const highlightMatch = (text: string): string => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="bg-yellow-200">$1</mark>');
  };

  const getSnippet = (text: string): string => {
    if (!query) return text.slice(0, 80);
    const lower = text.toLowerCase();
    const index = lower.indexOf(query);
    if (index === -1) return text.slice(0, 80);
    const snippet = text.slice(index, index + 80);
    return highlightMatch(snippet) + (text.length > index + 80 ? '...' : '');
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      {results.length > 0 && (
        <ul className="absolute z-10 w-full bg-white border mt-1 rounded-md shadow-lg max-h-60 overflow-y-auto">
          {results.map((item, idx) => (
            <li
              key={idx}
              onClick={() => handleSelect(item.url)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              <div
                className="font-semibold"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(item.title),
                }}
              />
              <p
                className="text-sm text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: getSnippet(item.content),
                }}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
