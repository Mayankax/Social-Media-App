import "./rightbar.css";
import Online from "../../components/online/Online"
import {Users} from "../../dummyData"

export default function Rightbar({profile}){

    const Homerightbar =()=>{
        return (
            <>
                <div className="birthdaycontainer">
                    <img src="/assets/gift.png" alt="" className="birthdayimg" />
                    <span className="birthdaytext">
                        <b>Pola Foster </b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/ad.png" alt="" className="rightbarad" />
                <h4 className="rightbartitle">Online Friends</h4>
                <ul className="rightbarfriendlist">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        );
    };

    const Profilerightbar = ()=>{
        return (
            <>
                <h4 className="rightbartitle">User Information</h4>
                <div className="rightbarinfo">
                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">City:</span>
                        <span className="rightbarinfovalue">New York</span>
                    </div>

                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">From:</span>
                        <span className="rightbarinfovalue">Madrid</span>
                    </div>

                    <div className="rightbarinfoitem">
                        <span className="rightbarinfokey">Relationship:</span>
                        <span className="rightbarinfovalue">Single</span>
                    </div>
                </div>
                <h4 className="rightbartitle">User Friend</h4>
                <div className="rightbarfollowings">
                    <div className="rightbarfollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">John Carter</span>
                    </div>
                    <div className="rightbarfollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarfollowingimg" />
                        <span className="rightbarfollowingname">John Carter</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarwrapper">
                {profile ? <Profilerightbar/>:<Homerightbar/>}
            </div>
        </div>
    )
}