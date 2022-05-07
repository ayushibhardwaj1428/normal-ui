import React, { useState } from "react";
import Handle from "../handle-submit";

export default function Validation() {
  const [formValid, setFormvalid] = useState({
    username: "",
    password: "",
  });
  const [errormsg, seterrormsg] = useState("");

  const handleChange = (e: any) => {
    setFormvalid({ ...formValid, [e.target.name]: e.target.value });
  };

  function handleSubmit(e: any) {
    e.preventDefault();

    let message = Handle({
      name: formValid.username,
      pass: formValid.password,
    });
    seterrormsg(message);
  }

  return (
    <div>
      <h1>Validation assignment</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <br />
        <input
          type="text"
          name="username"
          onChange={handleChange}
          placeholder="enter username"
        />
        <br />
        <label htmlFor="password">Password: </label> <br />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="enter password"
        />
        <br />
        <button name="submit">Submit</button>
      </form>
      <p style={{ fontWeight: "bold", textAlign: "center" }}>
      
        result :{errormsg}
      </p>
    </div>
  );
}
