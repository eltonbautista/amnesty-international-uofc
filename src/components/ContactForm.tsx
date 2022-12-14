import React, { Component } from "react";
import Button from "./Button";

interface IAboutCTA {
  headingOne: string;
  descriptionOne: string;
  linkOne: string;
  imgSrcOne: string;
  imgAltOne: string;
  headingTwo: string;
  descriptionTwo: string;
  linkTwo: string;
  imgSrcTwo: string;
  imgAltTwo: string;
}

export default function ContactForm(props: IAboutCTA) {
  const {
    headingOne,
    descriptionOne,
    linkOne,
    imgSrcOne,
    imgAltOne,
    headingTwo,
    descriptionTwo,
    linkTwo,
    imgSrcTwo,
    imgAltTwo,
  } = props;
  return (
    <section
      className="grid justify-items-center py-8 lg:pt-12 bg-base-200 px-4 md:px-6 lg:px-8"
      id="contact"
    >
      {/* CTA */}
      <div className="max-w-screen-xl px-4 md:px-6 lg:px-8 justify-self-center lg:grid-cols-2 lg:grid justify-items-center mb-8 md:mb-10">
        <div className="m-10 mx-4 max-w-screen-md overflow-hidden rounded-xl border shadow-lg md:pl-8">
          <div className="flex flex-col overflow-hidden bg-white md:flex-row md:h-80">
            <div className="flex w-full flex-col p-4 md:w-1/2 md:p-8 lg:w-3/5">
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
                {headingOne}
              </h2>
              <p className="my-3 max-w-md text-gray-500">{descriptionOne}</p>
              <div className="mt-auto">
                <div className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-2 py-1 text-white transition">
                  <a
                    href={linkOne}
                    className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"
                  >
                    Learn More
                  </a>
                  <svg
                    className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div className="order-first ml-auto h-48 w-full md:order-none md:h-auto md:w-1/2 lg:w-2/5">
              <img
                className="h-full w-full object-cover"
                src={imgSrcOne}
                width="200px"
                height="300px"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="m-10 mx-4 max-w-screen-md overflow-hidden rounded-xl border shadow-lg md:pr-8">
          <div className="flex flex-col overflow-hidden bg-white md:flex-row md:h-80">
            <div className="order-first ml-auto h-48 w-full md:order-none md:h-auto md:w-1/2 lg:w-2/5">
              <img
                className="h-full w-full object-cover"
                src={imgSrcTwo}
                width="200px"
                height="300px"
                loading="lazy"
              />
            </div>
            <div className="flex w-full flex-col p-4 md:w-1/2 md:p-8 lg:w-3/5">
              <h2 className="text-xl font-bold text-gray-900 md:text-2xl lg:text-4xl">
                {headingTwo}
              </h2>
              <p className="my-3 max-w-md text-gray-500">{descriptionTwo}</p>
              <div className="mt-auto">
                <div className="group flex w-44 cursor-pointer select-none items-center justify-center rounded-md bg-black px-2 py-1 text-white transition">
                  <a
                    href={linkTwo}
                    className="group flex w-full items-center justify-center rounded py-1 text-center font-bold"
                  >
                    Learn More
                  </a>
                  <svg
                    className="flex-0 group-hover:w-6 ml-4 h-6 w-0 transition-all"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FORM */}
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-center mb-3 lg:mb-12 max-w-screen-md">
        Stay connected with updates to our latest news, blog posts, and events.
      </h2>
      <div className="grid w-full justify-items-center max-w-screen-xl ">
        {/* <div className=" lg:max-w-md SEO mb-4 lg:mb-0 lg:justify-self-end">
          <h3 className="text-base lg:text-lg xl:text-xl lg:text-end">
            Let's talk about how can generate value for your business - a
            conversation never hurt{" "}
            <span className="border-b-2 border-accent">anyone</span>.
          </h3>
        </div> */}
        <div className="  lg:p-12 lg:pt-0 max-w-screen-md w-full">
          <form
            action="https://bfginteractive.us10.list-manage.com/subscribe/post"
            method="POST"
            className="space-y-4 text-neutral"
          >
            <input type="hidden" name="u" value="80aba07a99b3202fcbaa8eb66" />
            <input type="hidden" name="id" value="47a1d2ea8d" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="first-name">
                First Name
              </label>
              <input
                className="w-full p-3 text-sm border-accent  "
                placeholder="First Name"
                type="text"
                name="MERGE1"
                id="MERGE1"
                required
              />
              <label className="sr-only" htmlFor="last-name">
                Last Name
              </label>
              <input
                className="w-full p-3 text-sm border-accent  "
                placeholder="Last Name"
                type="text"
                name="MERGE1"
                id="MERGE1"
                required
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="sr-only" htmlFor="email">
                  UCalgary Email
                </label>
                <input
                  className="w-full p-3 text-sm border-accent  "
                  placeholder="Student Email"
                  type="email"
                  autoCapitalize="off"
                  autoCorrect="off"
                  required
                />
              </div>
              <div>
                <label className="sr-only" htmlFor="phone">
                  UCID
                </label>
                <input
                  className="w-full p-3 text-sm border-accent "
                  placeholder="UCID"
                  type="tel"
                  name="MERGE6"
                  id="MERGE6"
                  required
                />
              </div>
            </div>
            {/* <div>
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full p-3 text-sm border-accent "
                placeholder="Message"
                rows={8}
                name="MERGE2"
                id="MERGE2"
                required
              ></textarea>
            </div> */}
            <div className="mt-4 text-primary-content">
              <Button type="submit">Join Newsletter</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
