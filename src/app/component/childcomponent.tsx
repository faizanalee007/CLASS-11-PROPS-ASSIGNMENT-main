import React from "react";

interface ChildProps {
  name: string;
  dish: string;
  color: string;
}

const ChildComponent: React.FC<ChildProps> = ({ name, dish, color }) => {
  return (
    <div className="bg-violet-600 flex flex-col items-center justify-center min-h-screen text-white">
    <h2 className="text-2xl font-bold mb-4">TEACHER NAME: SIR ALI JAWWAD MISS HINA NASEER</h2>
      <h2 className="text-2xl font-bold mb-4">CLASS 11 ASSIGNMENT PROPS</h2>
      <h2 className="text-2xl font-bold mb-4">Favorite Details:</h2>
      <p className="bg-violet-800 text-center py-4 px-6 rounded-lg shadow-lg mb-4">
        Favorite Name: {name}
      </p>
      <p className="bg-violet-800 text-center py-4 px-6 rounded-lg shadow-lg mb-4">
        Favorite Dish: {dish}
      </p>
      <p className="bg-violet-800 text-center py-4 px-6 rounded-lg shadow-lg mb-4">
        Favorite Color: {color}
      </p>
    </div>
  );
};

export default ChildComponent;
