import React from "react";
import Range from "./Range";

const Image = () => <img src="https://loremflickr.com/320/240" />;

const ImageCounter = counter => {
  return (
    <div>
      <button onClick={counter.increment}>Add image</button>
      <button onClick={counter.decrement}>Remove image</button>
      <div>{Range(0, counter.value).map(i => <Image key={i} />)}</div>
    </div>
  );
};

export default ImageCounter;
