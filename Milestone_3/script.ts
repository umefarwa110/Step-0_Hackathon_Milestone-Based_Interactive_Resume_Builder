import {jsPDF} from "jspdf"

const educationInput = document.getElementById("education");
const skillsInput = document.getElementById("skills");
const workInput = document.getElementById("work-experience");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");

const addEducationButton = document.getElementById("add-education");
const educationList = document.getElementById("education-list");

const addSkillButton = document.getElementById("add-skill");
const skillsList = document.getElementById("skills-list");

const addWorkButton = document.getElementById("add-work");
const workList = document.getElementById("work-experience-list");

const generateResumeButton = document.getElementById("generate-resume");
const resumeContent = document.getElementById("resume-content");

const educationArray = [];
const skillsArray = [];
const workArray = [];

// Add Education to List
addEducationButton.addEventListener("click", () => {
    const educationValue = educationInput.value.trim();
    if (educationValue) {
        educationArray.push(educationValue);
        updateEducationList();
        educationInput.value = "";  // Clear input field after adding
    }
});

// Add Skill to List
addSkillButton.addEventListener("click", () => {
    const skillValue = skillsInput.value.trim();
    if (skillValue) {
        skillsArray.push(skillValue);
        updateSkillsList();
        skillsInput.value = "";  // Clear input field after adding
    }
});

// Add Work Experience to List
addWorkButton.addEventListener("click", () => {
    const workValue = workInput.value.trim();
    if (workValue) {
        workArray.push(workValue);
        updateWorkList();
        workInput.value = "";  // Clear input field after adding
    }
});

// Update Education List in the DOM
function updateEducationList() {
    educationList.innerHTML = ""; // Clear the current list
    educationArray.forEach(education => {
        const li = document.createElement("li");
        li.textContent = education;
        educationList.appendChild(li);
    });
}

// Update Skills List in the DOM
function updateSkillsList() {
    skillsList.innerHTML = ""; // Clear the current list
    skillsArray.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}

// Update Work List in the DOM
function updateWorkList() {
    workList.innerHTML = ""; // Clear the current list
    workArray.forEach(work => {
        const li = document.createElement("li");
        li.textContent = work;
        workList.appendChild(li);
    });
}

// Generate Resume and Display Content
generateResumeButton.addEventListener("click", () => {
  // Check if inputs are not empty before generating the resume
  if (nameInput.value.trim() === "" || emailInput.value.trim() === "" || phoneInput.value.trim() === "") {
      alert("Please fill out all the personal information fields.");
      return;
  }

  const resumeHTML = `
      <h3>Personal Information</h3>
      <p>Name: ${nameInput.value}</p>
      <p>Email: ${emailInput.value}</p>
      <p>Phone: ${phoneInput.value}</p>

      <h3>Education</h3>
      <ul>${educationArray.length > 0 ? educationArray.map(education => `<li>${education}</li>`).join("") : "<li>No education added</li>"}</ul>

      <h3>Skills</h3>
      <ul>${skillsArray.length > 0 ? skillsArray.map(skill => `<li>${skill}</li>`).join("") : "<li>No skills added</li>"}</ul>

      <h3>Work Experience</h3>
      <ul>${workArray.length > 0 ? workArray.map(work => `<li>${work}</li>`).join("") : "<li>No work experience added</li>"}</ul>
  `;
  resumeContent.innerHTML = resumeHTML;  // Display resume content on the page

  // Generate PDF using jsPDF
  const doc = new jsPDF();
  doc.html(resumeContent, {
      callback: function (doc) {
          doc.save("resume.pdf");  // Save the PDF when ready
      },
      margin: [10, 10, 10, 10],
      autoPaging: true
  });
});
  // Generate PDF using jsPDF
    const doc = new jsPDF();
    doc.html(resumeHTML, {
        callback: function (doc) {
            doc.save("resume.pdf");  // Save the PDF when ready
        }
    });
});
