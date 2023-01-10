import { useState, useEffect } from "react";
import { formatDuration, intervalToDuration } from "date-fns";
import styles from "./Countdown.module.css";

export default function Countdown() {
  const [timeToYule, setTimeToYule] = useState(
    intervalToDuration({
      start: Date.now(),
      end: Date.parse("2023-12-24"),
    })
  );

  useEffect(() => {
    setInterval(() => {
      setTimeToYule(
        intervalToDuration({
          start: Date.now(),
          end: Date.parse("2023-12-24"),
        })
      );
    }, 1000);
  }, []);

  return (
    <div className={styles.countDiv}>
      <div className={styles.countDeco}></div>

      <h4 className={styles.yuleTitle}>Yule Countdown!</h4>
      <span className={styles.numbers}>
        <div>{formatDuration(timeToYule)}</div>
      </span>
    </div>
  );
}
