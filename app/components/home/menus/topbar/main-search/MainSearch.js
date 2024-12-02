// components/home/parts/MainSearch.js
'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const MainSearch = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/s?s=${encodeURIComponent(searchTerm.trim())}`);
    }
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <label className="search-bar-toggle" htmlFor="searchMain">
        <i className="ri-search-line"></i>
      </label>
      <input
        id="searchMain"
        type="search"
        placeholder="¿Qué quieres buscar?"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">
        <i className="ri-search-line"></i><span>Buscar</span>
      </button>
    </form>
  );
};

export default MainSearch;
