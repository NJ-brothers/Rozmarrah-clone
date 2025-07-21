import "./Body-service.css";
export function Service_func() {
    return(<>
    <div className="Main-service-div">
        <div className="header-service">
            <h1>How it works for Service Seekers</h1>
            <p>Recruitment made easy in seconds</p>
        </div>
        <div className="Main-card-div">
            <div className="cardmaindiv">
                <img src="public/logo.png"/>
                <h1>Pay safely</h1>
                <p>It's free and easy to post a job. Simply fill in a title, a description and a few short details.</p>
            </div>


            <div className="cardmaindiv">
                <img src="public/logo.png"/>
                <h1>Review Application</h1>
                <p>Get pinged by hundreds of freelancers within seconds. Chat with them and review applications.</p>
            </div>

            <div className="cardmaindiv">
                <img src="public/logo.png"/>
                <h1>Choose Freelancer</h1>
                <p>Choose one you love and you're good to go!</p>
            </div>
        </div>
    </div>
    </>);
}