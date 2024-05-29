
import { useNavigate } from "react-router-dom";
import Login from "../login/Login";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";

export default function Topbar() {

  const navigate = useNavigate()

  function handleLogin(){
   navigate ('/login')
  }
  function handleSingup(){
    navigate('/register')
  }

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">DeVaSocial.</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input placeholder="Serach for friend, post or video" className="searchInput"/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <button className="topbarLink" onClick={ handleLogin}>Log in</button>
            <button className="topbarLink" onClick={handleSingup}>Sign Up</button>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarIconBadge">1</span>
            </div>
        </div>
        <img src="/assets/person/1.jpeg" alt="" className="topbarImg"/>
      </div>
    </div>
  );
}
