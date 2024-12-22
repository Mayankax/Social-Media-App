import "./closefriends.css"

export default function Closefriends({user}){
    return (
        <li className="sidebarfriend">
            <img src={user.profilePicture} alt="" className="sidebarfriendimg" />
            <span className="sidebarfriendname">{user.username}</span>
        </li>
    )
}