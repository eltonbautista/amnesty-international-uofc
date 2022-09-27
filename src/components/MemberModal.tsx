import * as React from "react";
import * as members from "../pages/about.md";

export interface ITestProps {}

export default function Test(props: ITestProps) {
  const [bas, setBas] = React.useState(0);

  React.useEffect(() => {
    console.log("test");
    const body = document.querySelector("body");
    const modalLabel = document.querySelector(".modal-labeller");
    const teamMemberContainers = [
      ...document.querySelector(
        "body > astro-island > div > astro-slot > main > section.w-full.min-h-screen.my-10.grid > div > div"
      )!.children,
    ];

    teamMemberContainers.forEach((member, index) => {
      member.addEventListener("click", function () {
        body!.style.height = "100%";
        body!.style.overflowY = "hidden";
        setBas(index);
      });
    });
    modalLabel!.addEventListener("click", function () {
      body!.style.overflowY = "auto";
    });
  }, []);

  return (
    <>
      <input
        type="checkbox"
        id={`my-modal-${bas}`}
        className="modal-toggle test-input"
      />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg asd">
            {members.frontmatter.teamMembers[bas].name}
          </h3>
          <p className="py-4">
            {members.frontmatter.teamMembers[bas].position}
          </p>
          <div className="modal-action">
            <label htmlFor={`my-modal-${bas}`} className="btn modal-labeller">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
