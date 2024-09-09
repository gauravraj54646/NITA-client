// import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toast } from "react-toastify";
// import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
// import Spinner from "../components/Spinner";
// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const Jobs = () => {
//   const [sem, setSem] = useState("");
//   const [selectedCity, setSelectedCity] = useState("");
//   const [field, setField] = useState("");
//   const [selectedNiche, setSelectedNiche] = useState("");
//   const [searchKeyword, setSearchKeyword] = useState("");

//   const { jobs, loading, error } = useSelector((state) => state.jobs);

//   const handleCityChange = (sem) => {
//     setSem(sem);
//     setSelectedCity(sem);
//   };
//   const handleNicheChange = (field) => {
//     setField(field);
//     setSelectedNiche(field);
//   };

//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (error) {
//       toast.error(error);
//       dispatch(clearAllJobErrors());
//     }
//     dispatch(fetchJobs(sem, field, searchKeyword));
//   }, [dispatch, error, sem, field]);

//   const handleSearch = () => {
//     dispatch(fetchJobs(sem, field, searchKeyword));
//   };

//   const semester = [
//     "first semester",
//     "second semester",
//     "third semester",
//     "fourth semester",
//     "fifth semester",
//     "sixth semester",
//     "seventh semester",
//     "eight semester"
//   ];

//   const fieldArray = [
//     "Software Development",
//     "Web Development",
//     "Cybersecurity",
//     "Data Science",
//     "Artificial Intelligence",
//     "Cloud Computing",
//     "VLSI",
//     "Analog Electronics",
//     "Digital Control",
//     "Automation",
//     "Industrial Automation",
//     "Industrial Instrumentation",
//     "Petrochemical",
//     "DevOps",
//     "Mobile App Development",
//     "Blockchain",
//     "Database Administration",
//     "Network Administration",
//     "UI/UX Design",
//     "Game Development",
//     "IoT (Internet of Things)",
//     "Big Data",
//     "Machine Learning",
//     "IT Project Management",
//     "IT Support and Helpdesk",
//     "Systems Administration",
//     "IT Consulting",
//   ];

//   return (
//     <>
//       {loading ? (
//         <Spinner />
//       ) : (
//         <section className="jobs">
//           <div className="search-tab-wrapper">
//             <input
//               type="text"
//               value={searchKeyword}
//               onChange={(e) => setSearchKeyword(e.target.value)}
//             />
//             <button onClick={handleSearch}>Find Job</button>
//             <FaSearch />
//           </div>
//           <div className="wrapper">
//             <div className="filter-bar">
//               <div className="cities">
//                 <h2>Filter Job By City</h2>
//                 {semester.map((sem, index) => (
//                   <div key={index}>
//                     <input
//                       type="radio"
//                       id={sem}  //city
//                       name="semester"
//                       value={sem}    //city
//                       checked={selectedCity === sem}  //    checked={selectedSem === city}                                         
//                       onChange={() => handleCityChange(sem)}
//                     />
//                     <label htmlFor={sem}>{sem}</label>
//                   </div>
//                 ))}
//               </div>
//               <div className="cities">
//                 <h2>Filter Job/Intern of your interest</h2>
//                 {fieldArray.map((field, index) => (
//                   <div key={index}>
//                     <input
//                       type="radio"
//                       id={field}
//                       name="field"
//                       value={field}
//                       checked={selectedNiche === field}
//                       onChange={() => handleNicheChange(field)}
//                     />
//                     <label htmlFor={field}>{field}</label>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="container">
//               <div className="mobile-filter">
//                 <select value={city} onChange={(e) => setCity(e.target.value)}>
//                   <option value="">Filter By City</option>
//                   {semester.map((city, index) => (
//                     <option value={city} key={index}>
//                       {city}
//                     </option>
//                   ))}
//                 </select>
//                 <select
//                   value={field}
//                   onChange={(e) => setNiche(e.target.value)}
//                 >
//                   <option value="">Filter By Interest</option>
//                   {fieldArray.map((field, index) => (
//                     <option value={field} key={index}>
//                       {field}
//                     </option>
//                   ))}
//                 </select>
//               </div>
//               <div className="jobs_container">
//                 {jobs &&
//                   jobs.map((element) => {
//                     return (
//                       <div className="card" key={element._id}>
//                         {element.Opportunities === "On-Campus" ? (      //element.hiringMultipleCandidates === "Yes"
//                           <p className="hiring-multiple">
//                            On-Campus
//                           </p>
//                         ) :
//                         element.Opportunities === "Of-Campus" ? (      //element.hiringMultipleCandidates === "Yes"
//                           <p className="hiring-multiple">
//                            Off-Campus
//                           </p>
//                         )
//                         : (
//                           <p className="hiring">Hiring by our Clubs</p>
//                         )}
//                         <p className="title">{element.title}</p>
//                         <p className="company">{element.companyName}</p>
//                         <p className="location">{element.Year}</p>      
//                         <p className="salary">
//                           <span>Salary:</span> Rs. {element.salary}
//                         </p>
//                         <p className="posted">
//                           <span>Posted On:</span>{" "}
//                           {element.jobPostedOn.substring(0, 10)}
//                         </p>
//                         <div className="btn-wrapper">
//                           <Link
//                             className="btn"
//                             to={`/post/application/${element._id}`}
//                           >
//                             Apply Now
//                           </Link>
//                         </div>
//                       </div>
//                     );
//                   })}
//               </div>
//             </div>
//           </div>
//         </section>
//       )}
//     </>
//   );
// };

// export default Jobs;



//===========================================================================



import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { clearAllJobErrors, fetchJobs } from "../store/slices/jobSlice";
import Spinner from "../components/Spinner";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [sem, setSem] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [field, setField] = useState("");
  const [selectedNiche, setSelectedNiche] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { jobs = [], loading, error } = useSelector((state) => state.jobs);

  const handleCityChange = (sem) => {
    setSem(sem);
    setSelectedCity(sem);
  };

  const handleNicheChange = (field) => {
    setField(field);
    setSelectedNiche(field);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    dispatch(fetchJobs(sem, field, searchKeyword));
  }, [dispatch, error, sem, field, searchKeyword]);

  const handleSearch = () => {
    dispatch(fetchJobs(sem, field, searchKeyword));
  };

  const semester = [
    "first semester",
    "second semester",
    "third semester",
    "fourth semester",
    "fifth semester",
    "sixth semester",
    "seventh semester",
    "eighth semester",
  ];

  const fieldArray = [
    "Software Development",
    "Web Development",
    "Cybersecurity",
    "Data Science",
    "Artificial Intelligence",
    "Cloud Computing",
    "VLSI",
    "Analog Electronics",
    "Digital Control",
    "Automation",
    "Industrial Automation",
    "Industrial Instrumentation",
    "Petrochemical",
    "DevOps",
    "Mobile App Development",
    "Blockchain",
    "Database Administration",
    "Network Administration",
    "UI/UX Design",
    "Game Development",
    "IoT (Internet of Things)",
    "Big Data",
    "Machine Learning",
    "IT Project Management",
    "IT Support and Helpdesk",
    "Systems Administration",
    "IT Consulting",
  ];

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <section className="jobs">
          <div className="search-tab-wrapper">
            <input
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
            />
            <button onClick={handleSearch}>Find Job</button>
            <FaSearch />
          </div>
          <div className="wrapper">
            <div className="filter-bar">
              <div className="cities">
                <h2>Filter Job by your Semester</h2>
                {semester.map((sem, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={sem}
                      name="city"
                      value={sem}
                      checked={selectedCity === sem}
                      onChange={() => handleCityChange(sem)}
                    />
                    <label htmlFor={sem}>{sem}</label>
                  </div>
                ))}
              </div>
              <div className="cities">
                <h2>Filter Job/Intern of your interest</h2>
                {fieldArray.map((field, index) => (
                  <div key={index}>
                    <input
                      type="radio"
                      id={field}
                      name="field"
                      value={field}
                      checked={selectedNiche === field}
                      onChange={() => handleNicheChange(field)}
                    />
                    <label htmlFor={field}>{field}</label>
                  </div>
                ))}
              </div>
            </div>
            <div className="container">
              <div className="mobile-filter">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                >
                  <option value="">Filter By City</option>
                  {semester.map((city, index) => (
                    <option value={city} key={index}>
                      {city}
                    </option>
                  ))}
                </select>
                <select
                  value={selectedNiche}
                  onChange={(e) => setSelectedNiche(e.target.value)}
                >
                  <option value="">Filter By Interest</option>
                  {fieldArray.map((field, index) => (
                    <option value={field} key={index}>
                      {field}
                    </option>
                  ))}
                </select>
              </div>
              <div className="jobs_container">
                {jobs.map((element) => (
                  <div className="card" key={element._id}>
                    {element.Opportunities === "On-Campus" ? (
                      <p className="hiring-multiple">On-Campus</p>
                    ) : element.Opportunities === "Off-Campus" ? (
                      <p className="hiring-multiple">Off-Campus</p>
                    ) : (
                      <p className="hiring">Hiring by our Clubs</p>
                    )}
                    <p className="title">{element.title}</p>
                    <p className="company">{element.companyName}</p>
                    <p className="location">{element.Year}</p>
                    <p className="salary">
                      <span>Salary:</span> Rs. {element.salary}
                    </p>
                    <p className="posted">
                      <span>Posted On:</span>{" "}
                      {element.jobPostedOn.substring(0, 10)}
                    </p>
                    <div className="btn-wrapper">
                      <Link
                        className="btn"
                        to={`/post/application/${element._id}`}
                      >
                        Apply Now
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Jobs;





