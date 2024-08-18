import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Home", path: "/" },
    { name: "Payscale", path: "/payscale" },
    { name: "About", path: "/about" },
  ];

  const handleNav = () => {
    setNav(!nav);
  };

  const handleNavLink = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    // Clear session storage
    sessionStorage.removeItem("payscales");

    // Redirect to the login page
    navigate("/login");
  };
  return (
    <div className="shadow-md w-full top-0 left-0 bg-[#121212] text-[#D3D3D3]">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 mx-auto max-w-[1240px] h-24 ">
        <div>
          <Link
            to="/"
            className="font-bold duration-300 text-3xl uppercase text-transparent bg-clip-text bg-gradient-to-l from-customPurple-purple to-customPurple-light"
          >
            Nex Quant
          </Link>
        </div>

        <div
          onClick={handleNav}
          className="absolute  right-8 top-6 md:hidden duration-300"
        >
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#121212] md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            nav ? "top-20 " : "top-[-490px]"
          }`}
        >
          {links.map((link) => (
            <li key={link.name} className="md:ml-8 md:my-0 my-7">
              <NavLink
                to={link.path}
                className="text-[#D3D3D3] hover:text-customPurple-light duration-500 uppercase"
                onClick={handleNavLink}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <button
            className="text-red-700 text-2xl ml-20"
            onClick={handleLogout}
          >
            <FiLogOut />
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
