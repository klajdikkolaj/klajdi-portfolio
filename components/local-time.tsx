"use client";

import { useEffect, useState } from "react";

type LocalTimeProps = {
  timeZone?: string;
  label?: string;
};

export function LocalTime({ label = "TIR", timeZone = "Europe/Tirane" }: LocalTimeProps) {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone,
    });

    const updateTime = () => setTime(formatter.format(new Date()).toLowerCase());

    updateTime();
    const intervalId = window.setInterval(updateTime, 1000 * 30);

    return () => window.clearInterval(intervalId);
  }, [timeZone]);

  return (
    <span>
      {label} <span className="text-white">{time || "--:--"}</span>
    </span>
  );
}
