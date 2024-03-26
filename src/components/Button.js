import React from 'react';

export const Button = ({ children }) => {
  return (
    <button className="w-64 text-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 py-2.5 px-5 rounded-lg mr-2 mb-2 font-medium ">{children}</button>
  );
}
