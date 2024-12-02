// app/s/page.js
"use client";

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import DynamicPage from '@/app/DynamicPage'; // Asegúrate de ajustar la ruta de `DynamicPage`
import LoadingContent from '@/app/components/Loading';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("s");
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (searchTerm) {
      const fetchSearchResults = async () => {
        setLoading(true);
        try {
          const response = await fetch(`https://apird.mantosoft.com/wp-json/wp/v2/search?search=${searchTerm}`);
          const data = await response.json();
          setResults(data);
        } catch (error) {
          console.error("Error fetching search results:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSearchResults();
    }
  }, [searchTerm]);

  if (loading) return <LoadingContent />;
  if (!results || results.length === 0) return <p>No se encontraron resultados para "{searchTerm}".</p>;

  return (
    <div>
      <h1>Resultados de búsqueda para: "{searchTerm}"</h1>
      <ul>
        {results.map((result) => (
          <li key={result.id}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
