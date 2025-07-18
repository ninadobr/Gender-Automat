document.getElementById("genderBtn").addEventListener("click", () => {
  const replacements = {
    "Benutzer": "Benutzer:innen",
    "Administratoren": "Administrator:innen",
    "Anwender": "Anwender:innen",
    "Techniker": "Techniker:innen",
    "Monteure": "Monteure:innen",
    "Prüfer": "Prüfer:innen",
    "Redakteure": "Redakteur:innen",
    "Dokumentationsspezialisten": "Dokumentationsspezialist:innen",
    "Projektleiter": "Projektleiter:innen"
  };

  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`text${i}`);
    let txt = el.textContent;

    Object.keys(replacements).forEach(key => {
      txt = txt.replaceAll(key, replacements[key]);
    });

    el.textContent = txt;
  }

  // Feedback-Meldung auf der Seite statt alert()
  const feedback = document.getElementById("feedback");
  if (feedback) {
    feedback.textContent = "Texte wurden erfolgreich gegendert.";
    feedback.style.color = "green";
    feedback.style.fontWeight = "bold";
  }
});

