import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const Navbar = () => {
  return (
    <header className="w-full py-5 max-sm:px-10 px-5 flex justitfy-between itmes-center">
      <nav className="flex w-full screen-max-width">
        <img
          src={appleImg}
          alt="logo"
          height={18}
          width={14}
          className="cursor-pointer"
          href="/"
        />
        <ul className="flex flex-1 justify-center max-sm:hidden gap-10">
          {navLists.map((item) => (
            <li key={item} className="text-sm cursor-pointer text-gray hover:text-white transition-all">
              {item}
            </li>
          ))}
        </ul>
        <div className="flex gap-7 items-baseline max-sm:justify-end max-sm:flex-1">
          <img
            src={searchImg}
            alt="search"
            height={18}
            width={18}
            className="cursor-pointer"
          />
          <img
            src={bagImg}
            alt="bag"
            height={18}
            width={18}
            className="cursor-pointer"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
