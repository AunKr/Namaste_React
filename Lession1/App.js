import React from "react";
import { createRoot } from "react-dom/client";

const Title = () => {
  return <div>Title</div>;
};

const HeadingComponent = () => {
  return (
    <>
      <div className="container1">
        {Title()}
        <Title />
        <Title></Title>
        <div>Heading Component</div>
      </div>
      <div className="container2">Heading 2</div>
    </>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
