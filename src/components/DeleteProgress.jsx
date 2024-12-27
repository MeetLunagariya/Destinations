import React, { useEffect, useState } from "react";

function DeleteProgress({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(remainingTime);
      setRemainingTime((prevTime) => prevTime - 500);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainingTime} max={timer} />;
}

export default DeleteProgress;
