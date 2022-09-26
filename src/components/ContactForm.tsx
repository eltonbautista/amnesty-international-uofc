import React, { Component } from "react";
import Button from "./Button";

export default function ContactForm() {
  return (
    <section
      className="grid justify-items-center py-8 lg:py-12 bg-base-200 px-4 md:px-6 lg:px-8"
      id="contact"
    >
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
