import "bulma/css/bulma.css";
// import "./App.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortonaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div className="App">
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Digital Assistant</p>
        </div>
      </section>

      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@Alexa099"
                image={AlexaImage}
                description="Alexa is Amazon's cloud-based voice service available on hundreds of millions of devices from Amazon and third-party device manufacturers."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortona"
                handle="@cortona68"
                image={CortonaImage}
                description="Cortana is Microsoft's personal productivity assistant that helps you save time and focus attention on what matters most."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Siri"
                handle="@siri091"
                image={SiriImage}
                description="Siri is Apple's virtual assistant for iOS, macOS, tvOS and watchOS devices that uses voice recognition and is powered by artificial intelligence (AI)."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
