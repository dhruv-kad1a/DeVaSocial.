import { Feed } from "../feed/Feed";
import { Rightbar } from "../rightbar/Rightbar";
import { Sidebar } from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import "./Profile.css";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">

            <img className="profileCoverImg" src="/assets/post/3.jpeg" alt="" />
            <img className="profileUserImg" src="/assets/person/7.jpeg" alt="" />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName"> Safak Kocaoglu</h4>
                <span className="profileInfoDesc">hello my frnd</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
