import type React from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export interface INavbarProps {}

const Navbar: React.FC<INavbarProps> = function Navbar({}) {
  const navRef = useRef(null);

  const [nav, setNav] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollPosition(() => {
        return window.scrollY;
      });
    });
  });

  return (
    <header
      ref={navRef}
      className={`grid justify-items-center fixed bg-black z-50 text-white w-full pb-2 ${
        scrollPosition > 0 ? "bg-black" : " md:bg-[rgb(0,0,0,0.6)]"
      }`}
    >
      <details className="group transition-all duration-150 h-10 open:h-72 overflow-hidden w-full md:hidden text-sm">
        <summary className="transition-all duration-500  flex cursor-pointer items-center rounded-lg px-4 py-2 ">
          <span className="sm:max-w-[200px] ">
            <img
              className="max-w-full max-h-full sm:block"
              width="50px"
              height="50px"
              src="/images/logo.png"
              alt="AIUOFC Logo"
              loading="lazy"
            ></img>
          </span>

          <span className="ml-auto grid grid-cols-2 gap-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-5 h-5 stroke-current shrink-0 transition duration-300 group-open:-rotate-180"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
            <label className="swap swap-rotate">
              <input
                className="opacity-0"
                type="checkbox"
                data-toggle-theme="luxury,bumblebee"
                data-act-class="ACTIVECLASS"
              />
              <svg
                className="swap-off fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
              <svg
                className="swap-on fill-current w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>
            </label>
          </span>
        </summary>

        <nav className="mt-1.5 ml-8 flex flex-col transition-all duration-500 z-50">
          <NavbarChild link="/" text="Home" />
          <NavbarChild link="/#about" text="About" />
          <NavbarChild
            link="/calgary-web-design-company/web-development"
            text="Blog"
          />
          {/* <NavbarChild
            link="/calgary-web-design-company/web-development"
            text="Contact"
          /> */}
          <NavbarChild link="/events" text="Events" />
          <NavbarChild link="#contact" text="Contact" />
        </nav>
      </details>
      <nav className="navbar max-w-screen-xl hidden md:flex">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            <span className="ml-3 text-xl font-semibold max-w-[250px]">
              <span className="sr-only">AIUOFC Logo</span>
              <img
                className="max-w-full max-h-full object-cover"
                width="70px"
                height="70px"
                src="/images/logo.png"
                alt="AIUOFC Logo"
                loading="lazy"
              ></img>
            </span>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0 hidden md:flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/blogs">Blog</a>
            </li>
          </ul>
          <div className="dropdown dropdown-end">
            <label
              tabIndex={0}
              className="btn btn-ghost rounded-btn normal-case font-normal text-base"
            >
              Join
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu dropdown-content p-2 shadow rounded-box w-64 mt-4 bg-neutral"
            >
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="/events">Events</a>
              </li>
            </ul>
          </div>
          <label className="swap swap-rotate p-2" htmlFor="theme">
            <span className="sr-only">theme</span>
            <input
              className="opacity-0"
              type="checkbox"
              id="theme"
              data-toggle-theme="luxury,bumblebee"
              data-act-class="ACTIVECLASS"
            />
            <svg
              className="swap-off fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>
            <svg
              className="swap-on fill-current w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>
        </div>
      </nav>
    </header>
  );
};

export interface INavbarChild {
  text: string;
  link: string;
}

const NavbarChild: React.FC<INavbarChild> = function NavbarChild({
  text,
  link,
}) {
  return (
    <a
      href={link}
      className="flex items-center justify-end rounded-lg px-4 py-2 "
    >
      <span className="ml-3 font-medium">{text}</span>
    </a>
  );
};

export default Navbar;
export { NavbarChild };
