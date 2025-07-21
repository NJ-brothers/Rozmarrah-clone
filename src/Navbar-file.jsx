import "./Navbar-file.css";
export function Navbar_div() {
    return(<>
        <div className="navbar-main">
            <div className="left-navbar">
                <img src="public/logo.png"/>
                <p>RozMarrah</p>
            </div>
            <div className="login-join-div">
                <a href="public/Page2.html">
                <button className="diff-btn1">Log In</button>
                <button className="diff-btn2">Join</button>
                </a>
            </div>
        </div>
    </>);
}