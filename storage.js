document.getElementById("assessmentForm").addEventListener("submit", e => {
  e.preventDefault();

  const values = [];
  for (let i = 1; i <= 12; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    values.push(selected.value);
  }

  const result = processAssessment(values);
  localStorage.setItem("mindtrace", JSON.stringify(result));
  window.location.href = "results.html";
});
