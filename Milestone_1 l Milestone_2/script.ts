const toggleSkillsButton = document.getElementById("toggle-skills");
const skillsSection = document.getElementById("skills-section");

toggleSkillsButton?.addEventListener("click", () => {
  skillsSection?.classList.toggle("hidden");
  toggleSkillsButton.textContent = skillsSection?.classList.contains("hidden")
    ? "Show Skills"
    : "Hide Skills";
});
