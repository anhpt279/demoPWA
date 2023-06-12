import { useState, useEffect, FC, HTMLAttributes } from "react";

export const Countdown: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  const [saleTime, setSaleTime] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date("9/28/2022 23:59:59");

    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();
      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (h <= 0 && m <= 0 && s <= 0) {
        setSaleTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div {...props} className={props.className}>
      {saleTime ? (
        <p>Sale off time ends</p>
      ) : (
        <p
          style={{
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "24px",
            color: "#EF4444",
          }}
        >
          (End in: {hours}: {minutes} : {seconds})
        </p>
      )}
    </div>
  );
};

export default Countdown;
