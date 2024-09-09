import React from "react";
import { LuUserPlus } from "react-icons/lu";
import { VscTasklist } from "react-icons/vsc";
import { BiSolidLike } from "react-icons/bi";

const HowItWorks = () => {
  return (
    <section className="howItWorks">
      <h3>How does it work?</h3>
      <div className="container">
        <div className="card">
          <div className="icon">
            <LuUserPlus />
          </div>
          <h4>Create an Account as a Student</h4>
          <p>
            Sign up for a free account as a Student or if you a member of T&P cell. Set up your
            profile in minutes to start posting jobs/Internship or applying for jobs/Internship in our Campus .
            Customize your profile to highlight your skills or requirements.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <VscTasklist />
          </div>
          <h4>Let's Post (T&Ps) or Browse Jobs/Internship</h4>
          <p>
            Training/Internship & Placement Cell of NIT Agartala can post detailed job descriptions, and Students can
            browse a comprehensive list of available positions/Internships. Utilize filters
            to find Internships that match your skills and preferences.
          </p>
        </div>
        <div className="card">
          <div className="icon">
            <BiSolidLike />
          </div>
          <h4>Opportunities On-Campus or Off-Campus</h4>
          <p>
           Training/Internship & Placement Cell of NIT Agartala can shortlist candidates and extend job/Internship offers. Student
             can review job offers that align with
            their career goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
