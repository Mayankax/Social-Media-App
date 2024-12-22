import './profile.css'
import Topbar from "../../components/topbar/Topbar"
import Sidebar from "../../components/sidebar/Sidebar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"

export default function Profile(){
    return (
        <div>
            <>
            <Topbar/>
            <div className="profile">
                <Sidebar/>
                <div className="profileright">
                    <div className="profilerighttop">
                        <div className="profilecover">
                            <img src="assets/post/3.jpeg" alt="" className="profilecoverimg" />
                            <img src="assets/person/7.jpeg" alt="" className="profileuserimg" />
                        </div>
                        <div className="profileinfo">
                            <h4 className="profileinfoname">Safak Desuja</h4>
                            <span className="profileinfodesc">Hello my Friends!</span>
                        </div>
                    </div>
                    <div className="profilerightbottom">
                        <Feed/>
                        <Rightbar profile/>
                    </div>
                </div>
            </div>
        </>
        </div>
    )
}