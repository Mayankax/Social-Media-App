import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar(){
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">Lamasocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchicon"/>
                    <input placeholder="Search for friends, posts and videos" className="searchinput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span className="topbarlink">Homepage</span>
                    <span className="topbarlink">Timeline</span>
                </div>
                <div className="topbaricons">
                    <div className="topbariconitem">
                        <Person/>
                        <span className="topbariconbadge">1</span>
                    </div>
                    <div className="topbariconitem">
                        <Chat/>
                        <span className="topbariconbadge">2</span>
                    </div>
                    <div className="topbariconitem">
                        <Notifications/>
                        <span className="topbariconbadge">1</span>
                    </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="topbarimg" />
            </div>
        </div>
    )
}