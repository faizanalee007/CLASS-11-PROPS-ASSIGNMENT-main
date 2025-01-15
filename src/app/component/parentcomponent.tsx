// ParentComponent.tsx
import React from "react";
import ChildComponent from "./childcomponent";




const ParentComponent = () => {
  const favoriteName = "Faizan Ahmed";
  const favoriteDish = "Pasta";
  const favoriteColor = "Black";

  return (
    <ChildComponent
      name={favoriteName}
      dish={favoriteDish}
      color={favoriteColor}
    />
  );
};

export default ParentComponent;
