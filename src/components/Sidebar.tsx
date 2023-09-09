import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" w-1/4 md:w-1/5 lg:w-1/6 bg-gray-200 p-4 hidden md:block">
      <div className="h-screen z-10 bg-gray-300 fixed top-24 left-0 w-26 ">
        <ul className="py-4">
          <li>
            <NavLink to={"/"}
               className="text-black mt-8 hover:bg-gray-800 font-semibold hover:text-white px-4 py-2 block">
                Contacts
              
            </NavLink>
          </li>
          <li>
            <NavLink to={"/addcontact"}
               className="text-black hover:bg-gray-800 font-semibold hover:text-white px-4 py-2 block">
                Add Contact
              
            </NavLink>
          </li>
          <li>
            <NavLink to={"/mapsandcharts"}
               className="text-black hover:bg-gray-800 font-semibold hover:text-white px-4 py-2 block">
                Maps & Charts
             
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
