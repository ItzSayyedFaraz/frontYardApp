

const Navbar = () => {
  return (
    <div>
      <div className="fixed top-0 w-full bg-gray-900 text-white z-50">
        <h1 className=" bg-gray-900 text-white h-20 p-6 ">
          <span className="text-4xl  text-center font-bold font-serif ml-8">
            Assessment For
          </span>{" "}
        </h1>
      </div>

    
        <div className="fixed top-16 w-full bg-gray-900 text-white z-50">
        <div className="flex justify-center items-center gap-x-4 gap-y-2 h-10 bg-gray-300">
          <h1 className="text-xl leading-6 text-gray-900">
            <strong className="font-bold justify-center gap-x-14  font-mono">
              Frontyardrealestate.com
            </strong>
          </h1>
        </div>
        </div>
        <div className="flex flex-1 justify-end"></div>
      </div>
    
  );
};

export default Navbar;
