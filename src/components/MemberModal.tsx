import * as React from "react";
import AboutTeamMember from "./AboutComponents/AboutTeamMember";
import type { memberFields } from "../lib/contentful";

// export interface ITestProps {
//   members: any;
//   name: string;
//   position: string;
//   generalInformation: string;
//   reasonForJoining: string;
//   hobbies: string;
//   imgSrc: string;
//   imgAlt: string;
//   index?: number;
//   colorOne: string;
//   colorTwo: string;
// }

export default function Test(props: memberFields) {
  const { members } = props;
  const [bas, setBas] = React.useState(0);

  React.useEffect(() => {
    const body = document.querySelector("body");
    const modalLabel = [...document.querySelectorAll(".modal-labeller")];
    const teamMemberContainers = [
      ...document.querySelector(
        "body > astro-island > div > astro-slot > main > section.w-full.min-h-screen.my-10.grid > div > div"
      )!.children,
    ];

    teamMemberContainers.forEach((member, index) => {
      member.children[0].addEventListener("click", function () {
        body!.style.height = "100%";
        body!.style.overflowY = "hidden";
        setBas(index);
      });
    });
    modalLabel.forEach((label) => {
      label.addEventListener("click", function (e: any) {
        if (e!.target!.classList.contains("modal-labeller")) {
          body!.style.overflowY = "auto";
        }
      });
    });
  }, []);

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
  } = members[bas];

  return (
    <>
      <input
        type="checkbox"
        id={`my-modal-${bas}`}
        className="modal-toggle test-input"
      />
      <label htmlFor={`my-modal-${bas}`} className="modal modal-labeller">
        <label className="modal-box w-11/12 max-w-4xl h-3/4 rounded-md px-8">
          <div className="modal-action mt-0 mb-6 md:mb-12">
            <label
              htmlFor={`my-modal-${bas}`}
              className="modal-labeller hover:cursor-pointer"
            >
              X
            </label>
          </div>
          <div className="grid md:grid-cols-3 gap-2">
            <AboutTeamMember
              generalInformation={generalInformation}
              hobbies={hobbies}
              reasonForJoining={reasonForJoining}
              imgAlt={imgAlt}
              profilePicture={profilePicture}
              name={name}
              position={position}
              colorOne={colorOne}
              colorTwo={colorTwo}
            />
            <div className="grid gap-4 md:gap-0 mt-6 md:mt-0 md:col-span-2 max-w-md justify-self-center">
              <p>{generalInformation}</p>
              <p>{reasonForJoining}</p>
              <p>{hobbies}</p>
            </div>
          </div>
        </label>
      </label>
    </>
  );
}
