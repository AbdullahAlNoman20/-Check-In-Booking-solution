import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Check-In</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a><i className="fa-solid fa-house"></i>Home</a>
            </li>
            <li>
              <a>Update Profile</a>
            </li>
            <li>
              <a>User Profile</a>
            </li>
          </ul>

          <div className="avatar">
            <div className="w-16 rounded">
              <img
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>

            <NavLink to="/login">
            <button className="btn">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                Login
            </button>
            </NavLink>
            

                <NavLink to="/">
                <button className="btn">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                     Logout
                     </button>
                </NavLink>
            
            </div>




        </div>
      </div>
    </div>
  );
};

export default Nav;
