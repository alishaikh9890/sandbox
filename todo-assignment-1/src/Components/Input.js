import React from "react";

const Input = ({ handleAdd }) => {
  const [name, setName] = React.useState("");
  const [img, setImg] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [org, setOrg] = React.useState("");

  return (
    <div className="Input">
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="text"
        placeholder="Img url"
        onChange={(e) => setImg(e.target.value)}
      />

      <input
        type="text"
        placeholder="location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="text"
        placeholder="org"
        onChange={(e) => setOrg(e.target.value)}
      />

      <button onClick={() => handleAdd(name, img, location, org)}>Add</button>
      {/* <h1>{name}</h1> */}
    </div>
  );
};

export { Input };
