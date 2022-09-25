import * as React from "react";
import HeadingTwo from "../HeadingTwo";
import HomeCTAChild from "./HomeCTAChild";

export interface IHomeCTAProps {}

export default function HomeCTA(props: IHomeCTAProps) {
  return (
    <section className="mx-auto max-w-screen-xl py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm lg:text-base font-medium">
            WHO WE ARE | WHAT WE DO | WHAT YOU CAN DO
          </p>
          <HeadingTwo> GET INVOLVED</HeadingTwo>
          <hr className="mx-auto mt-4 h-2 w-32 border-none bg-accent" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-20 text-center sm:mx-auto sm:max-w-lg md:mt-20 md:max-w-full md:text-left">
          <HomeCTAChild
            heading="Who we are"
            imgAlt="freedom"
            imgSrc="https://images.pexels.com/photos/2369217/pexels-photo-2369217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            position="md:order-2"
            redirectLink="about"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ipsa delectus quod?"
          />

          <HomeCTAChild
            heading="Who we are"
            imgAlt="freedom"
            imgSrc="https://images.pexels.com/photos/2990644/pexels-photo-2990644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            position="md:ml-0"
            redirectLink="about"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ipsa delectus quod?"
          />

          <HomeCTAChild
            heading="Who we are"
            imgAlt="freedom"
            imgSrc="https://images.pexels.com/photos/2990647/pexels-photo-2990647.jpeg?cs=srgb&dl=pexels-markus-spiske-2990647.jpg&fm=jpg"
            position="md:order-2"
            redirectLink="about"
            text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            ipsa delectus quod?"
          />
        </div>
      </div>
    </section>
  );
}
