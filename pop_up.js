document.getElementById("checkBtn").addEventListener("click", () => {
    const pwd = document.getElementById("pwd").value.trim();
    const result = document.getElementById("result");
    const strengthFill = document.getElementById("strengthFill");

    let strength = 0;
  let color = "#ff4d4d"; // default red

    if (commonPasswords.includes(pwd)) {
    strength = 25;
    color = "#ff4d4d";
    result.textContent = "❌ Weak! Found in common list.";
    } else if (pwd.length < 8) {
    strength = 50;
    color = "#ff9933";
    result.textContent = "⚠️ Too short! Minimum 8 characters.";
    } else if (pwd.length < 12) {
    strength = 75;
    color = "#3399ff";
    result.textContent = "ℹ️ Moderate password.";
    } else {
    strength = 100;
    color = "#33cc99";
    result.textContent = "✅ Strong password!";
    }

    strengthFill.style.width = strength + "%";
    strengthFill.style.background = color;
});
