import type * as React from "react";
import type { memberFields } from "../../lib/contentful";

export interface IAboutTeamMemberProps {
  name: string;
  position: string;
  generalInformation?: string;
  reasonForJoining?: string;
  hobbies?: string;
  imgSrc: string;
  imgAlt: string;
  index?: number | string;
  colorOne?: string;
}

export default function AboutTeamMember(props: memberFields) {
  const {
    name,
    position,
    generalInformation,
    reasonForJoining,
    hobbies,
    profilePicture,
    imgAlt,
    index,
    colorOne,
    colorTwo,
  } = props;

  console.log(colorTwo);

  const imgSrc = profilePicture?.fields.file.url;
  return (
    <div className="grid my-5 md:my-0">
      <div
        style={
          {
            "--my-text-color": `linear-gradient(90deg, ${colorOne} 50%,${colorTwo} 50%)`,
          } as React.CSSProperties
        }
        className="bg-[image:var(--my-text-color)]"
      >
        <label
          htmlFor={`my-modal-${index}`}
          className="modal-button hover:cursor-pointer "
        >
          <span className="">
            <img src={imgSrc} alt={imgAlt} width="350px" height="400px" />
          </span>
        </label>
      </div>
      <div className="mt-6">
        <h3 className="text-lg md:text-xl mb-1 md:mb-2 font-semibold">
          {name}
        </h3>
        <h4 className="text-xs uppercase">{position}</h4>
      </div>
    </div>
  );
}
