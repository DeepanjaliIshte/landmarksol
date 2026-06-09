"use client";

import { useEffect, useState, useRef } from "react";


interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export default function AnimatedCounter({ value, duration = 2, suffix = "", className = "" }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  // No longer using intersection observer; always animate when component mounts or value changes
  useEffect(() => {
    let start = 0;
    const end = Number(value) ?? 0;
    if (end <= 0) {
      setCount(end);
      return;
    }
    const totalMilSecDur = (duration ?? 2) * 1000;
    const incrementTime = totalMilSecDur / end;
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) {
        clearInterval(timer);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, duration]);

  return <span ref={ref} className={className}>{count}{suffix}</span>;
}
