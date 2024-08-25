import { useState, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Calculator", path: "/" },
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
    setShowLogout(false);

    // Redirect to the login page
    navigate("/login");
  };

  // Check session storage on component mount
  useEffect(() => {
    const sessionData = sessionStorage.getItem("payscales");
    setShowLogout(!!sessionData); // Show logout if session storage has data
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="shadow-md w-full top-0 left-0 bg-[#121212] text-[#D3D3D3]">
      <div className="md:flex items-center justify-between py-4 md:px-10 px-7 mx-auto max-w-[1240px] h-24">
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
          className="absolute right-8 top-6 md:hidden duration-300"
        >
          {!nav ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
        </div>

        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#121212] md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
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
          {showLogout && (
            <button
              className="text-grey-50 ml-20 hover:text-red-700 duration-300"
              onClick={handleLogout}
            >
              LOGOUT
            </button>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
