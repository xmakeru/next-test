import React from 'react';

export default function Filter({ setDone }) {
  return (
    <div>
      <button onClick={() => setDone('All')}>Все</button>
      <button onClick={() => setDone('Active')}>Выполненные</button>
      <button onClick={() => setDone('Complete')}>Активные</button>
    </div>
  );
}