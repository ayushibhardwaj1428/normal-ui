import "./style.css";
interface cardProps {
  name: string;
  email: string;
  profileImg:string;
}
export default function RectangualarCard({name,email,profileImg}:cardProps) {
    
  return (
      
    <div className="mainContainer">
      <div className="imageContainer">
        <img src={profileImg} />
      </div>
      <div className="detailsContainer">
        <p className="name">{name}</p>
        <p className="email">{email}</p>
      </div>
    </div>
  
  );
}
