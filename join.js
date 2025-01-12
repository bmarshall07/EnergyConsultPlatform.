import { db } from "./firebaseConfig.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

document.getElementById("join-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const expertise = document.getElementById("expertise").value;
  const portfolio = document.getElementById("portfolio").value;
  const certifications = document.getElementById("certifications").value;

  const profilesRef = ref(db, "consultant_profiles");
  const newProfile = { name, expertise, portfolio, certifications };

  push(profilesRef, newProfile)
    .then(() => {
      alert("Profile successfully submitted!");
      window.location.href = "consultants.html";
    })
    .catch((error) => console.error("Error saving profile:", error));
});
