import "../App.css";
import MagicBento from "../components/MagicBento.tsx";

function App() {
  return (
    <div className="App">
      <MagicBento
        cardData={[
          {
            color: "#ffffff",
            title: "Hiiiii",
            description: "Track user behavior",
            label: "Insights",
          },
          {
            color: "#ffffff",
            title: "Hiiiii",
            description: "Track user behavior",
            label: "Insights",
          },
          {
            color: "#ffffff",
            title: "Hi Sayang!!!",
            description:
              "I see you’re not feeling as loved as you hoped :/ I know I can be a little clueless sometimes but I promise I have nothing but love for you!!! And to show it, I attached a few things below to prove my affection for you! \n\n You literally are the one thing I look forward to everyday. When I have a good day, I wanna run to you and tell you all about it. It gets to a point where I end up just blabbing on about everything and later on when we wanna talk some more, I end up having nothing to say bcuz I said it all 😭. And when I have a bad day, you’re the one person I look for comfort in. You bring me up when I feel down, you give confidence in my looks and most importantly, you remind me that love can come from the most unexpected places sometimes, so I should never give up especially when things look grim. ",
            label: "",
            textfont: "Comic Sans MS",
          },
          {
            color: "#ffffff",
            title: "Hiiiii",
            description: "Track user behavior",
            label: "Insights",
          },
          {
            color: "#ffffff",
            title: "Hiiiii",
            description: "Track user behavior",
            label: "Insights",
          },
          {
            color: "#ffffff",
            title: "Hiiiii",
            description: "Track user behavior",
            label: "Insights",
          },
        ]}
        textAutoHide={false}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={false}
        enableMagnetism={true}
        clickEffect={true}
        spotlightRadius={300}
        particleCount={12}
        // glowColor="132, 0, 255"
        glowColor="146, 183, 117"
      />
    </div>
  );
}

export default App;
