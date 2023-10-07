/**
 * @framerSupportedLayoutWidth any
 * @framerSupportedLayoutHeight any
 */

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { addPropertyControls, ControlType } from "framer";

type CounterProps = {
  from: number;
  to: number;
  duration: number;
  fontFamily: string;
  fontSize: number;
  color: string;
};

function AnimatedCounter({
  from,
  to,
  duration,
  fontFamily,
  fontSize,
  color,
}: CounterProps) {
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => {
    return Math.round(latest);
  });
  const ref = useRef(null);
  const inView = useInView(ref);

  // while in view animate the count
  useEffect(() => {
    if (inView) {
      animate(count, to, { duration });
    }
  }, [count, inView, to, duration]);

  return (
    <motion.span ref={ref} style={{ fontFamily, fontSize, color }}>
      {rounded}
    </motion.span>
  );
}

AnimatedCounter.defaultProps = {
  from: 0,
  to: 15,
  duration: 2.5,
  fontFamily: "Arial",
  fontSize: 60,
  color: "#ffffff",
};

addPropertyControls(AnimatedCounter, {
  from: {
    type: ControlType.Number,
    title: "From",
    defaultValue: 0,
    min: 0,
    step: 1,
  },
  to: {
    type: ControlType.Number,
    title: "To",
    defaultValue: 15,
    min: 0,
    step: 1,
  },
  duration: {
    type: ControlType.Number,
    title: "Duration",
    defaultValue: 2.5,
    min: 0,
    step: 0.1,
    displayStepper: true,
  },
  fontFamily: {
    type: ControlType.String,
    title: "Font Family",
    defaultValue: "Arial",
  },
  fontSize: {
    type: ControlType.Number,
    title: "Font Size",
    defaultValue: 60,
    min: 30,
    max: 60,
    step: 1,
  },
  color: {
    type: ControlType.Color,
    title: "Color",
    defaultValue: "#ffffff",
  },
});

export default AnimatedCounter;
