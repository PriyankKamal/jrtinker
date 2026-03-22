import { useEffect } from "react";
import { GrLanguage } from "react-icons/gr"; 
import { Link } from "react-router-dom";
import { useAuth } from "../Context/Auth";
import { RxCross1 } from "react-icons/rx";

const NavbarTop = () => {
  const { isAuthenticated, logoutWithGoogle, navbarName,logout,user } = useAuth();

  // console.log("navbar top user is: ",user)

  const hadleGoogleLogout =  () => {
    logoutWithGoogle();
  };

 
  const handleNormalLogout= ()=>{
 logout()
  }
  return (
    <div className="w-full hidden md:flex lg:flex flex-col md:flex-row sm:flex-col items-center justify-between px-40 md:px-44 pt-4 pb-1 gap-4 md:gap-0">
      <div>
        <Link to="/">
          <img
            src="/images/nav-logo.png"
            alt="logo"
            className="w-[120px] md:w-[138px] mix-blend-darken"
          />
        </Link>
      </div>
      <div className="flex flex-col md:flex-row sm:flex-col items-center gap-4 md:gap-12">
        <div className="flex items-center gap-4 md:gap-6">
          {isAuthenticated ? (
            <>
            
           { user.googleID && <>
            <button 
            onClick={hadleGoogleLogout}
            className="px-4 md:px-6 py-2 bg-black  whitespace-nowrap text-white rounded-md text-base md:text-xl cursor-pointer hover:bg-gray-700 transition duration-300"
          >
            Logout google
          </button>
            </>}

            {!user.googleID && (
              <button 
            onClick={handleNormalLogout}
            className="px-4 md:px-6 py-2 bg-black  whitespace-nowrap text-white rounded-md text-base md:text-xl cursor-pointer hover:bg-gray-700 transition duration-300"
          >
            Logout normal
          </button>
            )}
            
            </>
            
           
          ) : (
            <>
              <Link
                to="/login"
                className="px-4 md:px-6 py-2 bg-[#344b85]  whitespace-nowrap rounded-md text-base md:text-xl text-white hover:bg-[#2C4073] transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 md:px-6 py-2 whitespace-nowrap bg-[#344b85] rounded-md text-base md:text-xl text-white hover:bg-[#2C4073] transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
        <div className="flex items-center gap-4">
          <GrLanguage className="text-2xl md:text-4xl cursor-pointer text-[#2C4073] hover:text-[#2C4073] transition duration-300" />
         







<div className="drawer drawer-end hidden md:block lg:block">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />


  <div className="drawer-content">
    {/* Image button to open drawer */}
    <label htmlFor="my-drawer" className="cursor-pointer">
      <img src="/images/asset 41.svg" alt="svg" className="w-14 h-14" />
    </label>
  </div>

  <div className="drawer-side ">
    <label htmlFor="my-drawer" className="drawer-overlay"></label>

    <div className="menu bg-[#f9f6f2] w-[27rem] text-base-content min-h-screen p-6 space-y-8 relative flex flex-col items-center">

      {/* Close Button */}
      <label htmlFor="my-drawer" className="absolute top-0 right-4 cursor-pointer text-2xl font-bold text-gray-500 hover:text-black">
      <div className="w-14 h-14 bg-purple-500 flex items-center justify-center ">

      <RxCross1 className="text-white text-2xl" />
      </div>
      </label>

      {/* Profile Section */}
      <div className="flex flex-col items-center text-center mt-8">
        {/* <div className="relative">
          {
            isAuthenticated?<div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-24 rounded-full">
              <span className="text-3xl"> {navbarName}</span>
            </div>
          </div>:<div className="avatar avatar-placeholder">
  <div className="bg-neutral text-neutral-content w-24 rounded-full">
    <span className="text-3xl"> DK</span>
  </div>
</div>
          }
        
        </div> */}

        {
          isAuthenticated?<>
          <div className="avatar avatar-placeholder">
            <div className="bg-neutral text-neutral-content w-24 rounded-full">
              {/* <span className="text-3xl"> {navbarName || googleProgilePic}</span> */}
              {
                !user.googleID && <span className="text-3xl"> {navbarName}</span>
              }
              {user.googleID && user.profilepic && (
  <img src={user.profilepic} alt="username" className="w-full object-cover" />
)}
            </div>
          </div>
          
           <h2 className="mt-4 text-lg font-bold text-[#222057]">{user.username}</h2>
        <p className="mt-2 text-gray-500 text-xl px-4">
        Welcome to <span className="text-3xl font-bold text-red-400 ml-1">jrTinker!</span>
        </p>
        <p className="mt-2 text-gray-500 text-[0.9rem] px-4">
        You’re now logged in and ready to explore. Start creating, sharing, and tinkering with amazing ideas. 
        </p>
        <p className="mt-2 text-gray-500 text-[0.9rem] px-4">
        We're excited to have you as part of our community. Let's build something awesome together!
        </p>
          </>:<>
          <p className="mt-2 text-gray-500 salsa text-[1.2rem] px-4">Login to get the information</p>
          </>
        }


       
      </div>

        <Link to="/" className="text-lg text-left">My Courses</Link>
    </div>
  </div>
</div>







          {/* <div className="cursor-pointer">          

          <img src="/images/asset 41.svg" alt="svg"  />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;