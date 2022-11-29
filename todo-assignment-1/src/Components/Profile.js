import React from "react";
import { Input } from "./Input";
import { v4 as uuid } from "uuid";
import List from "./List";

const Profile = () => {
  const [count, setCount] = React.useState(20);
  const [details, setDetails] = React.useState("Show more details");
  const [data, setData] = React.useState([]);

  const handleAdd = (name, img, location, org) => {
    const payload = {
      name,
      img,
      location,
      org,
      status: false,
      id: uuid()
    };
    setData([...data, payload]);
  };

  const handleChange = (val) => {
    setCount(count + val);
  };

  const Details = () => {
    if (details === "Show more details") {
      setDetails("Hide more details");
    } else if (details === "Hide more details") {
      setDetails("Show more details");
    }
  };

  return (
    <div className="Profile">
      <Input handleAdd={handleAdd} />

      <div className="display">
        {data.map((el) => (
          <div className="prof">
            <div>
              <img alt="" src={el.img} />
            </div>

            <div>
              <h3>Name: {el.name}</h3>
              <h3>Age: {count} </h3>

              <div className="agebutton">
                <button onClick={() => handleChange(1)}>increase age</button>
                <button onClick={() => handleChange(-1)}>increase age</button>
              </div>

              <button onClick={() => Details()}>{details}</button>
              {details === "Show more details" ? (
                <div>
                  <h3>Location: {el.location}</h3>
                  <h3>Organization: {el.org}</h3>
                </div>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        ))}

        <List />
      </div>
    </div>
  );
};

export default Profile;
