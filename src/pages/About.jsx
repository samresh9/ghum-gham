import "./About.css";
function About(){
    return(
        <div className="about-container">
        <div className="left">
            <div className="image">
                <img src="https://i.imgur.com/WbQnbas.png" alt="Company Image" />
            </div>
        </div>
        <div className="right">
            <div className="text">
                <span className="subtitle">About us</span>
                <h2 className="title">About <span className="highlight">Our Company</span></h2>
                <p className="description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                    doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                    doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, commodi
                    doloremque, fugiat illum magni minus nisi nulla numquam obcaecati placeat quia, repellat tempore
                    voluptatum.
                </p>
            </div>
        </div>
    </div>      
    )
}

export default About;
