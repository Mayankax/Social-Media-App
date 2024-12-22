import './login.css'

export default function Login(){
    return(
        <div className="login">
            <div className="loginwrapper">
                <div className="loginleft">
                    <h3 className="loginlogo">Lamasocial</h3>
                    <span className="logindesc">
                        Connect with friends and the world around you on Lamasocial.
                    </span>
                </div>
                <div className="loginright">
                    <div className="loginbox">
                        <input placeholder='Email' className="logininput" />
                        <input placeholder='Password' className="logininput" />
                        <button className="loginbutton">Log In</button>
                        <span className="loginforgot">Forgot Password</span>
                        <button className="loginregisterbutton">Create a New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}