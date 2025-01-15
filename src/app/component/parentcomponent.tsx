// ParentComponent.tsx
import React from "react";
import ChildComponent from "./childcomponent";




const ParentComponent = () => {
  const favoriteName = "Kiran";
  const favoriteDish = "Biryani";
  const favoriteColor = "Blue";

  return (
    <ChildComponent
      name={favoriteName}
      dish={favoriteDish}
      color={favoriteColor}
    />
  );
};

export default ParentComponent;
