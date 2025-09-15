"use client";
import React, { useState, useEffect } from "react";

export const CurrentDateTime = () => {
  const [currentDateTime, setCurrentDateTime] = useState(null);

  useEffect(() => {
    //@ts-expect-error
    setCurrentDateTime(new Date());

    const timerId = setInterval(() => {
      //@ts-expect-error
      setCurrentDateTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const formatDateTime = (date: Date) => {
    if (!date) return null;

    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${formattedDate}, ${formattedTime}`;
  };

  if (currentDateTime === null) {
    return (
      <p className="font-p text-foreground/90 text-[12px] tracking-tight">
        00/00/0000, 00:00:00 PM
      </p>
    );
  }

  return (
    <time
      className="font-p text-foreground/90 text-[12px] tracking-tight"
      // @ts-expect-error
      dateTime={currentDateTime.toISOString()}
    >
      {formatDateTime(currentDateTime)}
    </time>
  );
};
