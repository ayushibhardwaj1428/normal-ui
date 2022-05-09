import { useEffect, useState } from "react";
import RectangualarCard from "../rectangular-card";
import "./style.css";

interface props {
  name: { first: string; last: string; title: string };
  email: string;
  picture: { medium: string };
}
export default function InputComponent() {
  const url = "https://randomuser.me/api/?results=50";
  const [resultLength, setResultLength] = useState(0); // if we want to show whole data we'll use resultLength
  const [result, setResult] = useState<props[]>([]); // to store the objects in the format which we want
  const [contactLength, setContactLength] = useState(0); // to set the contact at time of input
  const [realContactLength, setRealContactLength] = useState(0); // to show the contact length which we want
  const [cardContainerHeight, setcardContainerHeight] = useState(0);
  const handleChange = (e: any) => {
    setContactLength(e.target.value);
  };

  let elem: JSX.Element[] = [];
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
        setResultLength(data.results.length);
      });
  }, []);

  function handleSubmit() {
    setRealContactLength(resultLength);
    setcardContainerHeight((140 * contactLength)+45);
  }

  for (let i = 0; i < realContactLength; i++) {
    let fullName = "";
    let profileImgae = "";
    fullName =
      result[i].name.title +
      " " +
      result[i].name.first +
      " " +
      result[i].name.last;
    profileImgae = result[i].picture.medium;

    elem.push(
      <RectangualarCard
        name={fullName}
        email={result[i].email}
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
        <div className="cardUi" style={{ height: `${cardContainerHeight}px` }}>
          {elem}
        </div>
      </div>
    </div>
  );
}
