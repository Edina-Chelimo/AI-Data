'use client'
import React from 'react';

const Home = () => {
  const lawnmowers = [
    { id: 1, name: 'Lawnmower 1', status: 'green', color: '#00FF00' },
    { id: 2, name: 'Lawnmower 2', status: 'yellow', color: '#FFFF00' },
    { id: 3, name: 'Lawnmower 3', status: 'red', color: '#FF0000' },
    { id: 4, name: 'Lawnmower 4', status: 'green', color: '#00FF00' },
    { id: 5, name: 'Lawnmower 5', status: 'yellow', color: '#FFFF00' },
    { id: 6, name: 'Lawnmower 6', status: 'red', color: '#FF0000' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'green':
        return '#00FF00';
      case 'yellow':
        return '#FFFF00';
      case 'red':
        return '#FF0000';
      default:
        return '#000000'; // Default color if status is unknown
    }
  };

  return (
    <div>
      <div className="content-container">
        <div className="h-24 mt-6 mb-4 ml-3 mr-3 p-2 rounded-md bg-gray-100 items-center grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {lawnmowers.map((lawnmower) => {
            const color = getStatusColor(lawnmower.status);
            console.log(`${lawnmower.name} color: ${color}`);
            return (
              <div key={lawnmower.id}>
                {lawnmower.name}{' '}
                <span className="status-indicator" style={{ color }}>
                  &#9899;
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
