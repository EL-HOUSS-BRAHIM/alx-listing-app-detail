import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 border-t mt-10 py-6 text-center text-gray-600 text-sm">
      <p>
        &copy; {new Date().getFullYear()} ALX Listing App. All rights reserved.
      </p>
      <p className="mt-2">
        Built with Next.js, TypeScript, and Tailwind CSS.
      </p>
    </footer>
  );
};
