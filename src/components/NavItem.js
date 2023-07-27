import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link href={href} legacyBehavior>
      <a
        className={`nav__item ${
          active ? "active" : ""
        } inline-block text-[17px] hover:underline hover:underline-offset-[3px] nav-style-guide dark:text-gray-950 dark:lg:text-white`}
      >
        {text}
      </a>
    </Link>
  );
};

export default NavItem;