import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  clearAllJobErrors,
  postJob,
  resetJobSlice,
} from "../store/slices/jobSlice";
import { CiCircleInfo } from "react-icons/ci";

const JobPost = () => {
  const [title, setTitle] = useState("");
  const [jobType, setJobType] = useState("");
  const [Year, setYear] = useState("");
  //    const [location, setLocation] = useState("");//
  const [companyName, setCompanyName] = useState("");
  const [introduction, setIntroduction] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [offers, setOffers] = useState("");
  const [jobFields, setJobFields] = useState("");
  const [salary, setSalary] = useState("");
  // const [hiringMultipleCandidates, setHiringMultipleCandidates] = useState("");
  const [Opportunities, setOpportunities] = useState("");
  const [personalWebsiteTitle, setPersonalWebsiteTitle] = useState("");
  const [personalWebsiteUrl, setPersonalWebsiteUrl] = useState("");

  const FieldArray = [
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

  // const cities = [
  const years = [
    "1st year, 1st Semester",
    "1st year, 2nd Semester",
    "2nd year, 3rd Semester",
    "2nd year, 4th Semester",
    "3rd year, 5th Semester",
    "3rd year, 6th Semester",
    "4th year, 7th Semester",
    "4th year, 8th Semester",
    // "Mumbai",
    // "Delhi",
    // "Bangalore ",
    // "Hyderabad",
    // "Ahmedabad",
    // "Chennai",
    // "Muzaffarpur",
    // "Kolkata",
    // "Pune",
    // "Jaipur",
    // "Surat",
    // "Lucknow",
    // "Kanpur",
    // "Nagpur",
    // "Visakhapatnam",
    // "Indore",
    // "Thane",
    // "Bhopal",
    // "Patna",
    // "Vadodara",
    // "Coimbatore",
  ];

  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, error, message } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();

  const handlePostJob = (e) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("jobType", jobType);
    formData.append("location", location);
    formData.append("companyName", companyName);
    formData.append("introduction", introduction);
    formData.append("responsibilities", responsibilities);
    formData.append("qualifications", qualifications);
    offers && formData.append("offers", offers);
    formData.append("job", jobFields);
    formData.append("salary", salary);
    Opportunities && formData.append("Opportunities", Opportunities);
    personalWebsiteTitle &&
      formData.append("personalWebsiteTitle", personalWebsiteTitle);
    personalWebsiteUrl &&
      formData.append("personalWebsiteUrl", personalWebsiteUrl);

    dispatch(postJob(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllJobErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetJobSlice());
    }
  }, [dispatch, error, loading, message]);

  return (
    <div className="account_components">
      <h3>Post A Job</h3>
      <div>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Core / I.T. / Analytics / Management. "
        />
      </div>
      <div>
        <label>Job Type</label>
        <select value={jobType} onChange={(e) => setJobType(e.target.value)}>
          <option value="">Select Job Type</option>
          <option value="Full-time-employement">Full-time-employement </option>
          <option value="Intern+Full-time-employement">
            Intern + Full-time-employement
          </option>
          <option value="Internship"> InternShip </option>
          <option value="Hackthon"> Hacthons </option>
        </select>
      </div>
      <div>
        <label>Year(1st,2nd,3rd,4th)</label>
        <select
          key={Math.random() * (200000 - 100000) + 100000}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">Select your year</option>
          {years.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Company Name</label>
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          placeholder="Company Name"
        />
      </div>
      <div>
        <label>Company/Job Introduction</label>
        <textarea
          value={introduction}
          onChange={(e) => setIntroduction(e.target.value)}
          placeholder="Company / Job Introduction"
          rows={7}
        />
      </div>
      <div>
        <label>Responsibilities</label>
        <textarea
          value={responsibilities}
          onChange={(e) => setResponsibilities(e.target.value)}
          placeholder="Job Responsibilities"
          rows={7}
        />
      </div>
      <div>
        <label>Qualifications</label>
        <textarea
          value={qualifications}
          onChange={(e) => setQualifications(e.target.value)}
          placeholder="Required Qualifications For Job/internship"
          rows={7}
        />
      </div>
      <div>
        <div className="label-infoTag-wrapper">
          <label>What Company Offer</label>
          <span>
            <CiCircleInfo /> Optional
          </span>
        </div>
        <textarea
          value={offers}
          onChange={(e) => setOffers(e.target.value)}
          placeholder="What are we offering in return!"
          rows={7}
        />
      </div>
      <div>
        <label>Job/Intern</label>
        <select
          value={jobFields}
          onChange={(e) => setJobFields(e.target.value)}
        >
          <option value="">Select Field</option>
          {FieldArray.map((element) => {
            return <option value={element}>{element}</option>;
          })}
        </select>
      </div>
      <div>
        <label>Package/Stipend</label>
        <input
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="600000 - 8000000"
        />
      </div>
      <div>
        <div className="label-infoTag-wrapper">
          <label>Apportunity?</label>
          <span>
            <CiCircleInfo /> Optional
          </span>
        </div>
        <select
          value={Opportunities}
          onChange={(e) => setOpportunities(e.target.value)}
        >
          {/*           <option value="">Apportunity </option> */}
          <option value="On-Campus">On Campus</option>
          <option value="Of-Campus">Off Campus</option>
          <option value="Club">Clubs of NITA</option>
        </select>
      </div>
      <div>
        <div className="label-infoTag-wrapper">
          <label>Personal Website Name</label>
          <span>
            <CiCircleInfo /> Optional
          </span>
        </div>
        <input
          type="text"
          value={personalWebsiteTitle}
          onChange={(e) => setPersonalWebsiteTitle(e.target.value)}
          placeholder="Peronsal Website Name/Title"
        />
      </div>
      <div>
        <div className="label-infoTag-wrapper">
          <label>Personal Website Link (URL)</label>
          <span>
            <CiCircleInfo /> Optional
          </span>
        </div>
        <input
          type="text"
          value={personalWebsiteUrl}
          onChange={(e) => setPersonalWebsiteUrl(e.target.value)}
          placeholder="Peronsal Website Link (URL)"
        />
      </div>
      <div>
        <button
          style={{ margin: "0 auto" }}
          className="btn"
          onClick={handlePostJob}
          disabled={loading}
        >
          Post Job/Intern
        </button>
      </div>
    </div>
  );
};

export default JobPost;
