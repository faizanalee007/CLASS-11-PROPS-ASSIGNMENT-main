import React from "react";

const ChildComponent = (props: any) => {
  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center min-h-screen text-white p-8">
      <h2 className="text-4xl font-extrabold mb-12 text-indigo-400 tracking-wide shadow-md text-center">
        Props Assignment
      </h2>
      <div className="space-y-8 w-full max-w-3xl">
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg font-semibold text-indigo-300 mb-2">Favorite Name:</p>
          <p className="text-xl text-gray-200">{props.name}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg font-semibold text-indigo-300 mb-2">Favorite Dish:</p>
          <p className="text-xl text-gray-200">{props.dish}</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className="text-lg font-semibold text-indigo-300 mb-2">Favorite Color:</p>
          <p className="text-xl text-gray-200">{props.color}</p>
        </div>
      </div>
    </div>
  );
};

export default ChildComponent;
