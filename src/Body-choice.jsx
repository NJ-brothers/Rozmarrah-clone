import "./Body-choice.css";
export function BodyChoice() {
    return(<>
    <div className="Main-choice-div">
        <div className="imagediv">
            <img src="public/cta_male.png"/>
        </div>

        <div className="infodiv">
            <div className="heading-info">
                <h1>RozMarrah! The best Choice?</h1>
                <p>At RozMarrah, we simplify the process of connecting top talent with clients, ensuring a secure and efficient experience for both.</p>
            </div>

            <div className="points-div">
                <div className="point-control-div">
                    <img src="public/icons8-shield-50.png"/>
                    <p>Get quality work done quickly</p>
                </div>
                <div className="point-control-div">
                    <img src="public/icons8-desktop-50.png"/>
                    <p>User Friendly Platform</p>
                </div>
                <div className="point-control-div">
                    <img src="public/icons8-card-security-50.png"/>
                    <p>Secure Payment</p>
                </div>
            </div>

            <a href="/public/Page2.html"></a>
            <div className="btn-div">
                <button>Join now</button>
            </div>
        </div>
    </div>
    </>);
}