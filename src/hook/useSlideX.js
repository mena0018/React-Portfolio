import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function useSlideX() {

  const slideX = (element, valeurDepart, delay, duration, start, end) => {
    gsap.fromTo(
      element,
      {
        opacity: 0,
        x: valeurDepart || -1500,
      },
      {
        opacity: 1,
        x: 0,
        delay: delay || 0.2,
        duration: duration || 0.4,
        scrollTrigger: {
          trigger: element,
          start: start || "top center",
          end: end || "bottom right",
        },
      }
    );
  };
  return slideX;
}

gsap.config({
   nullTargetWarn: false,
   trialWarn: false,
});