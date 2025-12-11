import { useState, useEffect } from "react";

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          // Reset for loop effect
          return { hours: 2, minutes: 45, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-2 text-white font-bold text-xl md:text-2xl justify-center items-center">
      <div className="bg-red-800/80 p-2 rounded min-w-[3rem] text-center">
        {String(timeLeft.hours).padStart(2, '0')}
      </div>
      <span>:</span>
      <div className="bg-red-800/80 p-2 rounded min-w-[3rem] text-center">
        {String(timeLeft.minutes).padStart(2, '0')}
      </div>
      <span>:</span>
      <div className="bg-red-800/80 p-2 rounded min-w-[3rem] text-center">
        {String(timeLeft.seconds).padStart(2, '0')}
      </div>
    </div>
  );
}