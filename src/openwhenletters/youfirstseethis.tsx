import { useEffect, useRef, useState } from "react";
import "../App.css"; // or wherever your CSS is
import { useNavigate } from "react-router-dom";

function firstseethis() {
  const letterRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the element is visible
      }
    );

    if (letterRef.current) {
      observer.observe(letterRef.current);
    }

    return () => {
      if (letterRef.current) {
        observer.unobserve(letterRef.current);
      }
    };
  }, []);

  return (
    <div className="letter1-container">
      <div
        ref={letterRef}
        className={`letter-fade-in ${visible ? "visible" : ""}`}
      >
        <h2>Hi Sayang!!!,</h2>
        <p>
          I’m not sure if you’ve done these before but if you haven’t, here are
          the rules!
        </p>
        <p>
          Rule #1
          <br />
          Absolutely{" "}
          <b>
            <u>NO</u>
          </b>{" "}
          peeking!
          <br />
        </p>
        <p>
          Rule #2 <br />
          Open the letters{" "}
          <b>
            <u>ONLY</u>
          </b>{" "}
          when the topic applies to you!
          <br />
        </p>
        <p>
          Rule #3 <br />
          Tell me when you open one!!!
          <br />
        </p>
        <p>
          And yea, that’s pretty much it! I trust you know what you’re doing,
          after all you’re my future neurosurgeon BAHAHAHA. If you’re wondering
          “what’s the occasion?”, there is none lol. I just really really love
          you and also probably have undiagnosed ADHD or something. I have no
          idea when these will be done cuz i wanna make sure they look really
          really good by the time you get them but I know for a fact all the
          time and effort will be worth it. Anyways, imma go get started on the
          rest of the letters now. I hope you enjoy these!!!
          <p>
            <img
              className="mocha-gif"
              alt="mocha working"
              src="https://media.tenor.com/uXjkduzKlZYAAAAi/ryry-slept-on-me-milk-and-mocha.gif"
            />
            <p className="gif-caption">
              Me working on these letters for you :p
            </p>
            <br />
            The Love of Your Life,
            <br />
            Faris Wheel
          </p>
        </p>
        <button onClick={() => navigate("/openwhen")} className="letterButton">
          Back to Letters →
        </button>
      </div>
    </div>
  );
}

export default firstseethis;
