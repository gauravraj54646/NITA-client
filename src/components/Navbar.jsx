
// import React, { useState } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// const Navbar = () => {
//   const [show, setShow] = useState(false);
//   const { isAuthenticated } = useSelector((state) => state.user);
//   return (
//     <>
//       <nav className={show ? "navbar show_navbar" : "navbar"}>
//         <div className="logo">
//           <img src="/logo.png" alt="logo" />
//         </div>  
//         <div className="links">
//           <ul>

//           <li>
//               <Link to={"/"} onClick={() => setShow(!show)}>
//         Training/Internship & Placement Cell, NIT Agartala 
//               </Link>
            
//             </li> 
//             <li>
//               <Link to={"/"} onClick={() => setShow(!show)}>
//                 HOME 
//               </Link>
            
//             </li>
//               <li>|</li>
//             <li>
//               <Link to={"/jobs"} onClick={() => setShow(!show)}>
//                 JOBS/INTERNSHIP
//               </Link>
            
//             </li>
//               <li>|</li>
//             {isAuthenticated ? (
//               <li>
//                 <Link to={"/dashboard"} onClick={() => setShow(!show)}>
//                   DASHBOARD
//                 </Link>
//               </li>
//             ) : (
//               <li>
//                 <Link to={"/login"} onClick={() => setShow(!show)}>
//                   LOGIN
//                 </Link>
//               </li>
//             )}
//           </ul>
//         </div>
//         <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
//       </nav>
//     </>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthenticated } = useSelector((state) => state.user);

  return (
    <>
      <nav className={show ? "navbar show_navbar" : "navbar"}>
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>

        {/* New h4 heading with black color */}
        <h6 style={{ color: "red" , fontWeight: "bold" , fontSize:"1.4em"}}>Training/Internship & Placement Cell, NIT Agartala</h6>

        <div className="links">
          <ul>
            <li>
              <Link to={"/"} onClick={() => setShow(!show)}>
                
              </Link>
            </li>
            <li>
              <Link to={"/"} onClick={() => setShow(!show)}>
                HOME
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link to={"/jobs"} onClick={() => setShow(!show)}>
                JOBS/INTERNSHIP
              </Link>
            </li>
            <li>|</li>
            {isAuthenticated ? (
              <li>
                <Link to={"/dashboard"} onClick={() => setShow(!show)}>
                  DASHBOARD
                </Link>
              </li>
            ) : (
              <li>
                <Link to={"/login"} onClick={() => setShow(!show)}>
                  LOGIN
                </Link>
              </li>
            )}
          </ul>
        </div>
        <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
      </nav>
    </>
  );
};

export default Navbar;
