import Link from "next/link";
import React, { useState } from "react";
import NavItem from "./NavItem";
import "../styles/navbar.module.css";
const MENU_LIST = [
  { text: "Home", href: "/" },
  { text: "Blog", href: "/blog" },
  { text: "Contact", href: "/contact" },
];
const Navbar = () => {
  const [navActive, setNavActive] = useState("hidden");
  const [activeIdx, setActiveIdx] = useState(-1);

  return (
    <header
      className="header py-8 bg-bg-accent-color dark"
      style={{
        backgroundColor: "black",
        color: "white",
        zIndex: 999,
        position: "fixed",
        width:'100%'
      }}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="logo is-header" style={{height:'30px',width:'200px'}} >
          <img
            src="/logo-no-background.svg"
            alt="karan bhati logo"
            className="w-auto h-logo"
          />
        </Link>
        <nav className="relative flex items-center justify-end">
          <ul className="order-2 block lg:hidden">
            <li>
              <a
                href="#"
                className={`toggle-nav text-gray-950 dark:text-white `}
                onClick={() => {
                  if (navActive === "") {
                    setNavActive("hidden");
                  } else {
                    setNavActive("");
                  }
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <line x1="3" y1="12" x2="21" y2="12"></line>
                  <line x1="3" y1="6" x2="21" y2="6"></line>
                  <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
              </a>
            </li>
          </ul>
          <ul
            style={{ zIndex: 999 }}
            className={`nav shadow-md lg:shadow-none text-right lg:text-left absolute top-10 right-0 min-w-[150px] lg:min-w-none bg-gray-950 dark:bg-white lg:bg-transparent lg:dark:bg-transparent rounded-theme text-white lg:text-gray-950 dark:text-white p-4 leading-8 lg:leading-none lg:p-0 lg:static lg:flex items-center ${navActive}`}
          >
            {MENU_LIST.map((menu, idx) => (
              <li
                className="lg:mr-7"
                onClick={() => {
                  setActiveIdx(idx);
                  setNavActive(false);
                }}
                key={menu.text}
              >
                <NavItem active={activeIdx === idx} {...menu} />
              </li>
            ))}
          </ul>
          <ul className="order-1 mr-5 lg:mr-0">
            <li>
              <a
                href="#"
                className="flex items-center gap-2 px-2 lg:px-4 py-2 lg:py-1.5 bg-gray-200 dark:bg-white/[0.06] dark:text-white rounded-full text-gray-950"
                data-ghost-search
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
                <span className="hidden lg:block">Search</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
