import * as React from "react";
import Button from "../Button";

export interface IHomeHeroProps {}

export default function HomeHero(props: IHomeHeroProps) {
  return (
    <>
      <section className="relative pb-28 lg:pt-0 lg:pb-32">
        <div className="max-h-screen w-full overflow-hidden">
          <video
            className="absolute w-full md:h-screen xxl:h-[65vh] max-h-screen max-w-full object-cover "
            autoPlay
            loop
            muted
          >
            <source src="/videos/amnesty.webm"></source>
          </video>
        </div>

        <div className="mx-auto h-full px-4 py-4 pt-10 md:py-40 sm:max-w-xl md:max-w-full md:px-8 lg:max-w-screen-xl lg:px-8">
          <div className="lg:grid flex flex-col items-center z-10">
            {/* <div className="w-full min-h-full z-20 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 mb-4 lg:mb-0 hidden md:grid">
              <img
                className=" w-fullh-full z-20 object-cover"
                src=""
                alt="BFG Interactive Logo"
                loading="lazy"
                width="766px"
                height="176px"
              ></img>
            </div> */}
            <div className="z-20 lg:max-w-screen-lg justify-self-center ">
              <div className=" text-white  bg-[rgb(0,0,0,0.4)] p-4">
                <p className="flex text-xs md:text-sm uppercase mb-2 md:mb-0">
                  <img
                    width="17px"
                    height="17px"
                    src="/images/amnesty-icon.png"
                  />
                  Amnesty International University of Calgary
                </p>
                <h1 className="mb-3 text-4xl font-semibold leading-tight lg:text-6xl xxl:text-7xl sm:leading-tight">
                  Passionate for Human Rights
                </h1>
                <h2 className="max-w-screen-md">
                  Helping bring awareness to students, faculty, and alumni about
                  human rights violations around the world.
                </h2>
              </div>
              <div className="p-4  flex flex-col items-start justify-items-start md:flex-row text-white bg-[rgb(0,0,0,0.4)]">
                <Button link="/">Join Now</Button>
                <a
                  href="/about"
                  aria-label=""
                  className="group inline-flex md:items-center uppercase px-4 pl-0 md:self-center md:pl-4 mt-6 md:mt-1 hover:underline font-medium text-sm lg:text-base"
                >
                  Learn more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-2 ml-4 h-6 w-6 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
