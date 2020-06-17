import React, { useState } from 'react';
import { filterList } from '../utils/functions';

export default ({items}) => {
  const [results, setResults] = useState(items);

  const searchHandler = e => {
    const searchQuery = e.target.value.trim().toLowerCase();
    const results = filterList(searchQuery, items, [
      'id',
      'name',
    ]);
    setResults(results);
  };

  return (
    <>
      <input
        className="md:w-64 sm:w-48 w-40 bg-gray-100 rounded sm:mr-4 mr-2 border border-gray-400 focus:outline-none focus:border-green-500 text-base py-2 px-4 my-2"
        placeholder="Buscar"
        type="text"
        onChange={searchHandler} />
      <span>{results.length === 1 ? `1 resultado` : `${results.length} resultados`}</span>
      <ul className="border p-3">
        {results.length ? results.map((item, idx) => (
          <li className={`flex flex-col sm:flex-row p-2 ${idx % 2 === 0 ? ' bg-gray-200': ''}`} key={item.id}>
            <span className="sm:w-32">{item.id}</span>
            <strong className="sm:flex-1">{item.name}</strong>
          </li>
        )) : (
          <li>Sin resultados</li>
        )}
      </ul>
    </>
  );
}