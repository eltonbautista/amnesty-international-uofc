import * as React from "react";
import HeadingTwo from "../HeadingTwo";

export interface IHomeDividerOneProps {}

export default function HomeDividerOne(props: IHomeDividerOneProps) {
  // "transform:rotate(0deg); transition: 0.3s"
  // transform:translate(0, 0px); opacity:1
  return (
    <>
      <svg
        className="fill-current text-secondary"
        id="wave"
        style={{
          transform: "rotate(0deg)",
        }}
        viewBox="0 0 1440 220"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{
            transform: "translate(0, 0px",
            opacity: "1",
          }}
          d="M0,198L1440,44L2880,110L4320,132L5760,198L7200,88L8640,110L10080,44L11520,22L12960,44L14400,44L15840,198L17280,154L18720,44L20160,198L21600,0L23040,176L24480,88L25920,66L27360,154L28800,66L30240,198L31680,44L33120,44L34560,176L34560,220L33120,220L31680,220L30240,220L28800,220L27360,220L25920,220L24480,220L23040,220L21600,220L20160,220L18720,220L17280,220L15840,220L14400,220L12960,220L11520,220L10080,220L8640,220L7200,220L5760,220L4320,220L2880,220L1440,220L0,220Z"
        ></path>
      </svg>
      <div className="w-full p-4 md:p-6 lg:p-8 py-12 lg:py-20 bg-secondary grid">
        <div className="max-w-screen-xl justify-self-center">
          <HeadingTwo>
            <span>
              We campaign for a world where human rights are enjoyed by all.
            </span>
          </HeadingTwo>
          <p className="mt-4 text-center">
            Amnesty International is a global movement of more than 10 million
            people in over 150 countries and territories who campaign to end
            abuses of human rights.
          </p>
        </div>
      </div>
      <svg
        className="text-secondary fill-current"
        id="wave"
        style={{
          transform: "rotate(180deg)",
        }}
        viewBox="0 0 1440 220"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          style={{
            transform: "translate(0, 0px",
            opacity: "1",
          }}
          d="M0,198L1440,44L2880,110L4320,132L5760,198L7200,88L8640,110L10080,44L11520,22L12960,44L14400,44L15840,198L17280,154L18720,44L20160,198L21600,0L23040,176L24480,88L25920,66L27360,154L28800,66L30240,198L31680,44L33120,44L34560,176L34560,220L33120,220L31680,220L30240,220L28800,220L27360,220L25920,220L24480,220L23040,220L21600,220L20160,220L18720,220L17280,220L15840,220L14400,220L12960,220L11520,220L10080,220L8640,220L7200,220L5760,220L4320,220L2880,220L1440,220L0,220Z"
        ></path>
      </svg>
    </>
  );
}
