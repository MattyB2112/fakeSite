import Marquee from "react-fast-marquee";
import "./banner.css";

const text = "Hello there!";
const text2 = "I am a banner!";
export default function Banner() {
  return (
    <div className="marquee-container">
      <Marquee loop={0} speed={100}>
        {text}
        {text2}
      </Marquee>
    </div>
  );
}
