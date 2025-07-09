document.getElementById("genderBtn").addEventListener("click", () => {
  const replacements = {
    "Programmierer": "Programmierer:innen",
    "Ingenieur": "Ingenieur:innen",
    "Student": "Student:innen"
  };

  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`text${i}`);
    let txt = el.textContent;
    Object.keys(replacements).forEach(key => {
      const regex = new RegExp(`\\b${key}\\b`, "g");
      txt = txt.replace(regex, replacements[key]);
    });
    el.textContent = txt;
  }

  alert("Texte wurden erfolgreich gegendert.");
});
