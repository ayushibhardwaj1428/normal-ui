import { useState } from "react";
import RectangualarCard from "../rectangular-card";
import "./style.css";

interface props {
  name: { first: string; last: string; title: string };
  email: string;
  picture: { medium: string };
}
export default function InputComponent() {
  const [result, setResult] = useState<props[]>([]);
  const [contactLength, setContactLength] = useState(0);
  const api_url = `https://randomuser.me/api/?results=${contactLength}`;

  const handleChange = (e: any) => {
    setContactLength(e.target.value);
  };

  let elem: JSX.Element[] = [];
  async function getapi(url: any) {
    const response = await fetch(url);

    var data = await response.json();

    if (response) {
      setResult(data.results);
    }
    x(data);
  }
  function handleSubmit() {
    getapi(api_url);
  }
  function x(data: any) {
    setResult(data.results);
  }
  for (let r of result) {
    let fullName = "";
    let profileImgae = "";
    fullName = r.name.title + " " + r.name.first + " " + r.name.last;
    profileImgae = r.picture.medium;

    elem.push(
      <RectangualarCard
        name={fullName}
        email={r.email}
        profileImg={profileImgae}
      />
    );
  }

  return (
    <div className="supermainContainer">
      <div className="inputContainer">
        <label className="contactText">Contact Length</label>
        <input
          className="textValue"
          type="text"
          name="contactLength"
          onChange={handleChange}
        />
        <button className="submitButton" onClick={handleSubmit}>
          Submit
        </button>
      </div>

      <div className="uiarea">
        <div className="headerText">Contacts</div>

        <div className="cardUi">
          <div
            style={{
              height: "1px",
              overflow: "hidden",
              margin: "0px 15px 25px 10px",
            }}
          ></div>
          <div
            style={{
              height: "440px",
              overflow: "scroll",
              margin: "0px 15px 25px 10px",
            }}
          >
            {elem}
          </div>
        </div>
      </div>
    </div>
  );
}
