import { useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const phrases = [
  "No",
  "Are you sure?",
  "Really sure?",
  "Pleaseeeeee sayangggggg",
  "Don't do this rn...",
  "Please stop playing around...",
  "You're gonna make me wanna 💀",
];

const nogifs = [
  "https://i.pinimg.com/originals/41/37/b2/4137b249747d50fcf2a3ab5e1dc05cdb.gif",
  "https://media.tenor.com/44VuqjK9umsAAAAj/peach-goma-okay-sad.gif",
  "https://i.imgur.com/Iy82iFW.gif",
  "https://media.tenor.com/ti6jDf8qC5IAAAAi/peach-and-goma-goma.gif",
  "https://media.tenor.com/Uac8Y5yud28AAAAi/peach-and-goma-goma.gif",
  "https://i.pinimg.com/originals/8f/b3/d2/8fb3d2e609cef016071439ee1b13e71b.gif",
  "https://media.tenor.com/gvrNb7dNKFQAAAAj/peach-goma-peach-and-goma.gif",
];

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 13;
  const navigate = useNavigate();

  function handleNoClick() {
    setNoCount(noCount + 1);
  }

  function getNoButtonText() {
    return phrases[Math.min(noCount, phrases.length - 1)];
  }

  return (
    <div className="container">
      {yesPressed ? (
        <>
          <img
            alt="cats kissing"
            src="https://media.tenor.com/gRHMuWwgl7AAAAAi/peach-goma-love.gif"
          />
          <div style={{ color: "black" }}>Yay!!!!</div>
          <button onClick={() => navigate("/")} className="resetButton">
            Back to Home
          </button>
        </>
      ) : (
        <>
          <img
            alt="cat with hearts"
            src={nogifs[Math.min(noCount, nogifs.length - 1)]}
            style={{
              ...([2, 3, 5].includes(noCount) && {
                width: "300px",
                height: "300px",
                objectFit: "cover",
              }),
            }}
          />

          <div style={{ color: "black" }}>Can I be your boyfriend?</div>
          <div style={{ marginTop: "5px" }}>
            <button
              className="yesButton"
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button onClick={handleNoClick} className="noButton">
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
