"use client";

import lottieJson from "@/public/animations/10749-mushroom-jumping.json";
import React from "react";
import Lottie from "react-lottie-player";

export default function AnimationLottie() {
  return (
    <Lottie
      loop
      animationData={lottieJson}
      play
      goTo={600}
      style={{ width: 500, height: 500 }}
    />
  );
}
