import { CircularProgress } from "@mui/material";
import React, { useState } from "react";

function Image(props) {
  const url = props.url;
  const altName = props.destination;

  const [imageLoaded, setImageLoaded] = useState(false);
  const handelImageLoad = () => {
    setImageLoaded(true);
  };
  return (
    <div>
      {!imageLoaded && <CircularProgress />}
      <img
        src={url}
        alt={altName}
        className="d-block w-100"
        onLoad={handelImageLoad}
      />
    </div>
  );
}

export default Image;
