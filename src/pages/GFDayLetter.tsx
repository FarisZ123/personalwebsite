import { useEffect, useRef, useState } from "react";
import "../App.css"; // or wherever your CSS is
import myImage from "../assets/So Pretty.png";
import { useNavigate } from "react-router-dom";

function Scrapbook() {
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
    <div className="main-container">
      <img src={myImage} alt="Us💕" className="scrapbook-image" />

      <div
        ref={letterRef}
        className={`letter-fade-in ${visible ? "visible" : ""}`}
      >
        <h2>Hi Sayang,</h2>
        <p>
          Let me start off by saying that these past few days with you have
          completely changed how I view life. You gave me hope at a time when
          everything just seems to drain the life out of me. From school to
          finding a job, nothing has kept me going quite like you. It's crazy
          because if you asked me even a couple of months ago, I would've never
          thought I'd see the day I could call you mine :) It still feels
          extraordinary to me right now BAHAHAHA. It seems really selfish but I
          want you to know that I will do whatever it takes to keep you here
          with me. I get really jealous easily (if you couldn't already tell) so
          whenever you have a problem, or you wanna rant or just talk to
          someone, I wanna be the first one that comes to your mind. Idc how
          long it takes me to get to that point, but I will leave my mark on you
          MUAHAHAHA.
        </p>
        <p>
          Anyways I don't wanna leave too long of a message especially
          considering this letter itself isn't my best work imma be so honest
          😭😭. I promise I'll make up for it in the next project! But I really
          wanted to make you something for National GF's day because in my eyes,
          you deserve the world Melissa. And I wanna give you all that I have
          for you.
        </p>
        <p>
          Happy National Girlfriend Day. 💕
          <br />
          The Love of Your Life,
          <br />
          Faris Wheel
        </p>
        <p>P.S I really hope you like the little collage i made!!! :)</p>
      </div>
      <button onClick={() => navigate("/")} className="resetButton">
        Back to Home
      </button>
    </div>
  );
}

export default Scrapbook;
