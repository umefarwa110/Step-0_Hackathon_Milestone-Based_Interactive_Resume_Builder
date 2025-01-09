// DOM Elements
var educationInput = document.getElementById("education");
var skillsInput = document.getElementById("skills");
var workInput = document.getElementById("work-experience");
var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var phoneInput = document.getElementById("phone");
var addEducationButton = document.getElementById("add-education");
var educationList = document.getElementById("education-list");
var addSkillButton = document.getElementById("add-skill");
var skillsList = document.getElementById("skills-list");
var addWorkButton = document.getElementById("add-work");
var workList = document.getElementById("work-experience-list");
var generateResumeButton = document.getElementById("generate-resume");
var resumeContent = document.getElementById("resume-content");
var educationArray = [];
var skillsArray = [];
var workArray = [];
// Add Education to List
addEducationButton.addEventListener("click", function () {
    var educationValue = educationInput.value.trim();
    if (educationValue) {
        educationArray.push(educationValue);
        updateEducationList();
        educationInput.value = ""; // Clear input field after adding
    }
});
// Add Skill to List
addSkillButton.addEventListener("click", function () {
    var skillValue = skillsInput.value.trim();
    if (skillValue) {
        skillsArray.push(skillValue);
        updateSkillsList();
        skillsInput.value = ""; // Clear input field after adding
    }
});
// Add Work Experience to List
addWorkButton.addEventListener("click", function () {
    var workValue = workInput.value.trim();
    if (workValue) {
        workArray.push(workValue);
        updateWorkList();
        workInput.value = ""; // Clear input field after adding
    }
});
// Update Education List in the DOM
function updateEducationList() {
    educationList.innerHTML = ""; // Clear the current list
    educationArray.forEach(function (education) {
        var li = document.createElement("li");
        li.textContent = education;
        educationList.appendChild(li);
    });
}
// Update Skills List in the DOM
function updateSkillsList() {
    skillsList.innerHTML = ""; // Clear the current list
    skillsArray.forEach(function (skill) {
        var li = document.createElement("li");
        li.textContent = skill;
        skillsList.appendChild(li);
    });
}
// Update Work List in the DOM
function updateWorkList() {
    workList.innerHTML = ""; // Clear the current list
    workArray.forEach(function (work) {
        var li = document.createElement("li");
        li.textContent = work;
        workList.appendChild(li);
    });
}
// Generate Resume and Display Content
generateResumeButton.addEventListener("click", function () {
    var resumeHTML = "\n        <h3>Personal Information</h3>\n        <p>Name: ".concat(nameInput.value, "</p>\n        <p>Email: ").concat(emailInput.value, "</p>\n        <p>Phone: ").concat(phoneInput.value, "</p>\n\n        <h3>Education</h3>\n        <ul>").concat(educationArray.map(function (education) { return "<li>".concat(education, "</li>"); }).join(""), "</ul>\n\n        <h3>Skills</h3>\n        <ul>").concat(skillsArray.map(function (skill) { return "<li>".concat(skill, "</li>"); }).join(""), "</ul>\n\n        <h3>Work Experience</h3>\n        <ul>").concat(workArray.map(function (work) { return "<li>".concat(work, "</li>"); }).join(""), "</ul>\n    ");
    resumeContent.innerHTML = resumeHTML; // Display resume content on the page
    // Generate PDF using jsPDF
    var doc = new jsPDF();
    doc.html(resumeHTML, {
        callback: function (doc) {
            doc.save("resume.pdf"); // Save the PDF when ready
        }
    });
});
