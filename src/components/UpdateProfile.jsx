import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  clearAllUpdateProfileErrors,
  updateProfile,
} from "../store/slices/updateProfileSlice";
import { toast } from "react-toastify";
import { getUser } from "../store/slices/userSlice";

const UpdateProfile = () => {
  const { user } = useSelector((state) => state.user);
  const { loading, error, isUpdated } = useSelector(
    (state) => state.updateProfile
  );

  const dispatch = useDispatch();
  const navigateTo = useNavigate();

  const [name, setName] = useState(user && user.name);


  const [enrollment, setEnrollment] = useState(user && user.enrollment);
  const [branch, setBranch] = useState(user && user.branch);


  const [email, setEmail] = useState(user && user.email);
  const [phone, setPhone] = useState(user && user.phone);
  const [address, setAddress] = useState(user && user.address);
  const [coverLetter, setCoverLetter] = useState(user && user.coverLetter);
  const [firstSkills, setFirstSkills] = useState(user && user.skills?.firstSkills);
  const [secondSkills, setSecondSkills] = useState(
    user && user.skills?.secondSkills
  );
  const [thirdSkills, setThirdSkills] = useState(user && user.skills?.thirdSkills);
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(user && user.resume?.url);

  const handleUpdateProfile = () => {
    const formData = new FormData();
    formData.append("name", name);

    formData.append("enrollment", enrollment);
    formData.append("branch", branch);
    
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("address", address);

    if (user && user.role === "Student") {  //Job Seeker
      formData.append("firstSkills", firstSkills);
      formData.append("secondSkills", secondSkills);
      formData.append("thirdSkills", thirdSkills);
      formData.append("coverLetter", coverLetter);
    }
    if (resume) {
      formData.append("resume", resume);
    }
    dispatch(updateProfile(formData));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllUpdateProfileErrors());
    }
    if (isUpdated) {
      toast.success("Profile Updated.");
      dispatch(getUser());
      dispatch(clearAllUpdateProfileErrors());
    }
  }, [dispatch, loading, error, isUpdated, user]);

  const resumeHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setResumePreview(reader.result);
      setResume(file);
    };
  };

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

 
   
  
  return (
    <div className="account_components">
      <h3>Update Profile</h3>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

 
      {/* //================================================================== */}
        <div>
        <label>Branch</label>
        <input
          type="text"
          disabled
          value={user && user.branch}
          onChange={(e) => setBranch(e.target.value)}
        />
      </div>
     

        <div>
        <label>Enrollment Number</label>
        <input
          type="text"
          disabled
          value={user && user.enrollment}
          onChange={(e) => setEnrollment(e.target.value)}
        />
      </div>

       
    {/* //================================================================================ */}

      
      
      <div>
        <label>Email Address</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      {user && user.role === "Student" && (
        <>
          <div>
            <label>My Preferred Job Fields </label>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "15px" }}
            >
              <select
                value={firstSkills}
                onChange={(e) => setFirstSkills(e.target.value)}
              >
                {FieldArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
              <select
                value={secondSkills}
                onChange={(e) => setSecondSkills(e.target.value)}
              >
                {FieldArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
              <select
                value={thirdSkills}
                onChange={(e) => setThirdSkills(e.target.value)}
              >
                { FieldArray.map((element, index) => {
                  return (
                    <option value={element} key={index}>
                      {element}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <label>Descriptions</label>
            <textarea
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              rows={5}
            />
          </div>
          <div>
            <label>Upload Resume</label>
            <input type="file" onChange={resumeHandler} />
            {user && user.resume && (
              <div>
                <p>Current Resume:</p>
                <Link
                  to={user.resume && user.resume.url}
                  target="_blank"
                  className="view-resume"
                >
                  View Resume
                </Link>
              </div>
            )}
          </div>
        </>
      )}
      <div className="save_change_btn_wrapper">
        <button
          className="btn"
          onClick={handleUpdateProfile}
          disabled={loading}
        >
          {" "}
          Save Changes
        </button>
      </div>
    </div>
  );
};

export default UpdateProfile;
