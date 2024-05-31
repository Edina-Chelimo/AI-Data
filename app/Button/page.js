'use client'
import React from 'react';
import Link from 'next/link';

function Button() {
  return (
    <Link href="/Coordinates">
        <button className="w-full rounded-md bg-btg-maroon px-2 py-2 text-md font-semibold text-white">
          Lawnmower Coordinates
        </button>
    </Link>
  );
}

export default Button;
