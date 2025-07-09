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
      txt = txt.replaceAll(key, replacements[key]);
    });

    el.textContent = txt;
  }

  // Jetzt mit kleinem Trick etwas warten, damit Browser den DOM aktualisiert:
  setTimeout(() => {
    alert("Texte wurden erfolgreich gegendert.");
  }, 10);
});
