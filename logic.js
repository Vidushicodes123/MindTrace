function processAssessment(values) {
  let cognitive = 0, emotional = 0, recovery = 0;

  values.forEach((v, i) => {
    let score = Number(v);

    // Reverse scoring for recovery
    if (i >= 5) score = 6 - score;

    if (i <= 2) cognitive += score * 2;
    else if (i <= 4) emotional += score * 2;
    else recovery += score;
  });

  const total = cognitive + emotional + recovery;

  let archetype = "Balanced Operator";
  let risk = "None";

  if (emotional > cognitive && recovery < 8)
    archetype = "Emotionally Pressured Achiever";
  else if (cognitive > emotional)
    archetype = "Overloaded Multitasker";
  else if (recovery < 7)
    archetype = "Under-Recovered Performer";

  if (emotional > 10 && recovery < 7)
    risk = "Sustained Mental Strain";

  return { total, cognitive, emotional, recovery, archetype, risk };
}
