import * as React from "react";
import Button from "../Button";

export interface IHomeCTAChildProps {
  text: string;
  heading: string;
  imgSrc: string;
  imgAlt: string;
  position: string;
  redirectLink: "about" | "blog" | "join";
}

export default function HomeCTAChild(props: IHomeCTAChildProps) {
  const { text, heading, imgSrc, imgAlt, position, redirectLink } = props;

  return (
    <div className="justify-center grid lg:grid-cols-2 place-items-center md:flex-row">
      <img
        className={`lg:max-w-lg w-full lg:object-cover object-contain ${position} md:object-left`}
        src={imgSrc}
        alt={imgAlt}
        width="300px"
        height="300px"
      />
      <div className="p-4">
        <h3 className="text-4xl">{heading}</h3>
        <p className="my-4 text-base">{text}</p>
        <Button link={redirectLink}> Learn More</Button>
      </div>
    </div>
  );
}
