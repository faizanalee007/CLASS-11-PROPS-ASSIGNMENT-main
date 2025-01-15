// ParentComponent.tsx
import React from "react";
import ChildComponent from "./childcomponent";




const ParentComponent = () => {
  const Name = "Faizan Ahmed";
  const favoriteDish = "Pasta";
  const favoriteColor = "Black";

  return (
    <ChildComponent
      name={Name}
      dish={favoriteDish}
      color={favoriteColor}
    />
  );
};

export default ParentComponent;
