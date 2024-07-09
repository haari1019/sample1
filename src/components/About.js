import React from "react";

function About() {
  function calculateAge(birthDate) {
    const today = new Date();
    const dob = new Date(birthDate);

    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    return age;
  }

  const birthDate = "Sept 29"; // Replace with your actual birthdate

  const age = calculateAge(birthDate);

  return (
    <div>
      <h2 className="heading" style={{ color: "#002057" }}>
        <i className="fas fa-user-alt"></i> About <span>Me</span>
      </h2>

      <div className="row">
        <div className="image">
          <img
            draggable="false"
            className="tilt"
            src="../assets/images/profile.jpeg"
            alt="Shivasaiprasad Akula"
          />

          <div className="resumebtn">
            <a
              href="https://www.linkedin.com/in/akulashivsaiprasad/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <span>LinkedIn</span>
              <i className="fas fa-chevron-right"></i>
            </a>
          </div>
        </div>

        <div className="content">
          <h3 style={{ color: "#002057" }}>
            Shivasaiprasad <span style={{ color: "#ed2129" }}> Akula</span>
          </h3>
          <span className="tag">Software Developer</span>

          <p>
            An overall experience of 14+ years in various IT disciplines with
            significant expertise in AWS & AZURE Cloud Architecture and
            developing automation solutions using DevOps tools.
          </p>
          <p>
            Creating CI/CD Pipelines on AWS & AZURE using various Cloud & Other
            DevOps tools designing Architectures on AWS & Azure, and creating
            CI/CD Pipelines using Git, GitHub, GitLab, Jenkins, SonarQube,
            JFrog/Nexus, Ansible, Docker, K8s, Shell Scripting, Python, Packer,
            Terraform, & NewRelic.
          </p>
          <p>
            Leading migrations of applications from On-prem to AWS & AZURE Cloud
            and running complete cycle of migration adhering to best practices
            in each phase like cost optimization, operational excellence,
            reliability & security Design & Developing platforms for complex
            applications on Public Cloud.
          </p>
          <p>
            Resourceful in building the buildings and expanding the railway platform deployment automation
            and standardization using Infrastructure as code (IaC) and other
            configuration technologies such as Ansible, CloudFormation, Jenkins
            & GIT. Used most of AWS & Azure services to set up platform for
            complex applications on AWS & Azure and providing solutions for
            Hybrid architecture.
          </p>

          <div className="box-container">
            <div className="box">
              <p>
                <span> Age: </span> {age} years
              </p>
              <p>
                <span> Phone : </span> +91 9502493266
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
