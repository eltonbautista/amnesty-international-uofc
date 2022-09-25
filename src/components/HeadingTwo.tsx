import type * as React from "react";

export interface IHeadingTwoProps {
  children: React.ReactNode;
  textColor?: string;
}

export default function HeadingTwo(props: IHeadingTwoProps) {
  const { children, textColor } = props;
  return (
    <h2 className={`text-3xl md:text-4xl lg:text-5xl ${textColor}`}>
      {children}
    </h2>
  );
}
