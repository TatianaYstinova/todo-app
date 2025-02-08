import React from "react";

import '../../index.css';

interface TypoProps {
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

export const Typo: React.FC<TypoProps> = ({ size, children }) => {
  return <div className={`default font ${size ?? "medium"}`}>{children}</div>;
};
