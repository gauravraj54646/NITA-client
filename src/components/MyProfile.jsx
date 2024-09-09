import React from "react";
import { useSelector } from "react-redux";

const MyProfile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <div className="account_components">
      <h3>My Profile</h3>
      <div>
        <label>Full Name</label>
        <input
          type="text"
          disabled
          value={user && user.name}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Email Address</label>
        <input
          type="email"
          disabled
          value={user && user.email}
          onChange={(e) => e.target.value}
        />
      </div>
      {user && user.role === "Student" && (
        <div>
          <label>My Preferred Job Field</label>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "15px" }}
          >
            <input
              type="text"
              disabled
              value={user && user.skills.firstSkills}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={user && user.skills.secondSkills}
              onChange={(e) => e.target.value}
            />
            <input
              type="text"
              disabled
              value={user && user.skills.thirdSkills}
              onChange={(e) => e.target.value}
            />
          </div>
        </div>
      )}
    
      {/* //================================================================== */}
        <div>
        <label>Enrollment Number</label>
        <input
          type="text"
          disabled
          value={user && user.enrollment}
          onChange={(e) => e.target.value}
        />
      </div>
       <div>
        <label>Branch</label>
        <input
          type="text"
          disabled
          value={user && user.branch}
          onChange={(e) => e.target.value}
        />
      </div>
     


        
    {/* //================================================================================ */}

        <div>
        <label>Phone Number</label>
        <input
          type="number"
          disabled
          value={user && user.phone}
          onChange={(e) => e.target.value}
        />
      </div>
      
      <div>
        <label>Address</label>
        <input
          type="text"
          disabled
          value={user && user.address}
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Role</label>
        <input
          type="text"
          disabled
          value={user && user.role === "Employer" ? "Traning and Placement Cell" : "Student" }
          onChange={(e) => e.target.value}
        />
      </div>
      <div>
        <label>Joined On</label>
        <input
          type="text"
          disabled
          value={user && user.createdAt}
          onChange={(e) => e.target.value}
        />
      </div>
    </div>
  );
};

export default MyProfile;
