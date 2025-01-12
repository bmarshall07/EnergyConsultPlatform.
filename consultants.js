import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const container = document.getElementById("consultants-container");

const profilesRef = ref(db, "consultant_profiles");
onValue(profilesRef, (snapshot) => {
  container.innerHTML = ""; // Clear the container
  snapshot.forEach((childSnapshot) => {
    const profile = childSnapshot.val();
    const profileDiv = document.createElement("div");
    profileDiv.classList.add("profile");
    profileDiv.innerHTML = `
      <h3>${profile.name}</h3>
      <p><strong>Expertise:</strong> ${profile.expertise}</p>
      <p><strong>Portfolio:</strong> <a href="${profile.portfolio}" target="_blank">${profile.portfolio}</a></p>
      <p><strong>Certifications:</strong> ${profile.certifications}</p>
    `;
    container.appendChild(profileDiv);
  });
});
