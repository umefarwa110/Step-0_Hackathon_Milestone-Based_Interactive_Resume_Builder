var toggleSkillsButton = document.getElementById("toggle-skills");
var skillsSection = document.getElementById("skills-section");
toggleSkillsButton === null || toggleSkillsButton === void 0 ? void 0 : toggleSkillsButton.addEventListener("click", function () {
    if (skillsSection) {
        var isHidden = skillsSection.style.display === "none";
        skillsSection.style.display = isHidden ? "block" : "none";
        toggleSkillsButton.textContent = isHidden ? "Hide Skills" : "Show Skills"; // Update button text
    }
});
