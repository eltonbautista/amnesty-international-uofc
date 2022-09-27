import * as React from "react";

export interface IAboutTeamMemberProps {
  name: string;
  position: string;
  generalInformation?: string;
  reasonForJoining?: string;
  hobbies?: string;
  imgSrc: string;
  imgAlt: string;
  index?: number | string;
}

export default function AboutTeamMember(props: IAboutTeamMemberProps) {
  const {
    name,
    position,
    generalInformation,
    reasonForJoining,
    hobbies,
    imgSrc,
    imgAlt,
    index,
  } = props;
  return (
    <div className="grid my-5 md:my-0">
      <div className="bg-[linear-gradient(90deg,#FFC0CB_50%,#00FFFF_50%)]">
        <label
          htmlFor={`my-modal-${index}`}
          className="modal-button hover:cursor-pointer "
        >
          <span className="">
            <img src={imgSrc} alt={imgAlt} width="350px" height="400px" />
          </span>
        </label>
      </div>
      <div>
        <h3 className="text-lg md:text-xl mb-1 md:mb-2">{name}</h3>
        <h4 className="text-xs md:text-sm">{position}</h4>
      </div>
    </div>
  );
}
