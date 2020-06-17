import React from 'react';

export default ({ activeTab, label, onClick }) => (
  <li
    className={`uppercase text-sm font-semibold ${
      activeTab === label ? 'bg-green-500 text-gray-100' : 'bg-green-100 cursor-pointer'
    }`}
  >
    <a className="block px-3 py-2" href={null} onClick={() => onClick(label)}>
      {label}
    </a>
  </li>
);
