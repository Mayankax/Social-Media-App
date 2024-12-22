import "./post.css"
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"
import {useState} from 'react';

export default function Post({post}){
    const [like,setlike]=useState(post.like);
    const [isliked,setisliked]=useState(false);

    const likeHandler=()=>{
        setlike(isliked ? like-1 : like+1)
        setisliked(!isliked)
    }
    return (
        <div className="post">
            <div className="postwrapper">
                <div className="posttop">
                    <div className="posttopleft">
                        <img src={Users.filter((u)=>u.id===post.userId)[0].profilePicture} alt="" className="postprofileimg" />
                        <span className="postusername">{Users.filter((u)=>u.id===post.userId)[0].username}</span>
                        <span className="postdate">{post.date}</span>
                    </div>
                    <div className="posttopright">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postcenter">
                    <span className="posttext">{post?.desc}</span>
                    <img src={post.photo} alt="" className="postimg" />
                </div>
                <div className="postbottom">
                    <div className="postbottomleft">
                        <img src="/assets/like.png" onClick={likeHandler} alt="" className="likeicon" />
                        <img src="/assets/heart.png" onClick={likeHandler} alt="" className="likeicon" />
                        <span className="postlikecounter">{like} people liked it</span>
                    </div>
                    <div className="postbottomright">
                        <span className="postcommenttext">{post.comment} comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}