import Image from "next/image";
import Logo from "../../../public/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar border border-stone-200 bg-stone-50/80 backdrop-blur-md sticky top-0 z-50">
      <nav className="px-6 py-4 flex justify-between items-center">
        <a href="#hero">
          <Image loading="eager" src={Logo} alt="logo" className="size-15 cursor-pointer" />
        </a>
        <ul className="underline-indicator flex gap-5">
          <li> <a href="#about">About</a></li>
          <li> <a href="#skills">Skills</a></li>
          <li> <a href="#projects">Projects</a></li>
          <li> <a href="#experience">Experience</a></li>
          <li> <a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
