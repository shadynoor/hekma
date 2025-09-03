import React, { useState } from "react";
import VimeoBackground from "./VimeoBackground";

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [videoId] = useState(language == "ar" ? "1115529596" : "1115535344");

  return (
    <section id="home" className="relative">
      <VimeoBackground videoId={videoId}></VimeoBackground>
    </section>
  );
};

export default Hero;
