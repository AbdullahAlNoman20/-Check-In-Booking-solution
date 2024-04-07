import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="m-5">

<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <NavLink to="/">
            <li>
              <a><i className="fa-solid fa-house"></i>Home</a>
            </li>
            </NavLink>
            <NavLink to="/about">
            <li>
              <a><i className="fa-solid fa-address-card"></i>About</a>
            </li>
            </NavLink>
            <NavLink to="/updateProfile">
            <li>
              <a> <i className="fa-solid fa-file-pen"></i>Update Profile</a>
            </li>
            </NavLink>
            <NavLink to="/userprofile">
            <li>
              <a> <i className="fa-solid fa-user-tie"></i>User Profile</a>
            </li>
            </NavLink>
      </ul>
    </div>
    <a className="text-xl lg:text-5xl font-bold" ><i className="fa-solid fa-building-circle-check"></i> Check-In</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    <NavLink to="/">
            <li>
              <a><i className="fa-solid fa-house"></i>Home</a>
            </li>
            </NavLink>
            <NavLink to="/about">
            <li>
              <a><i className="fa-solid fa-address-card"></i>About</a>
            </li>
            </NavLink>
            <NavLink to="/updateProfile">
            <li>
              <a> <i className="fa-solid fa-file-pen"></i>Update Profile</a>
            </li>
            </NavLink>
            <NavLink to="/userprofile">
            <li>
              <a> <i className="fa-solid fa-user-tie"></i>User Profile</a>
            </li>
            </NavLink>
      
    </ul>
  </div>
  <div className="navbar-end hidden lg:block">
  <div className="avatar flex items-center justify-end gap-2">
            <div className="w-16 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>

            <NavLink to="/login">
            <button className="btn">
            <i className="fa-solid fa-right-to-bracket"></i>Login
            </button>
            </NavLink>
            

                <NavLink to="/">
                <button className="btn">
                <i className="fa-solid fa-right-from-bracket"></i>Logout
                     </button>
                </NavLink>
            
            </div>
  </div>
</div>
    </div>
  );
};

export default Nav;
