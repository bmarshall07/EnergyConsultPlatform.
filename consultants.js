import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Get the container where profiles will be displayed
const container = document.getElementById("consultants-container");

if (!container) {
  console.error("Consultants container not found. Check your HTML file.");
} else {import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Get the container where profiles will be displayed
const container = document.getElementById("consultants-container");

if (!container) {
  console.error("Consultants container not found. Check your HTML file.");
} else {
  // Reference to the consultant_profiles in Firebase
  const profilesRef = ref(db, "consultant_profiles");

  // Fetch and display consultant profiles
  onValue(profilesRef, (snapshot) => {
    container.innerHTML = ""; // Clear the container

    if (snapshot.exists()) {
      snapshot.forEach((childSnapshot) => {
        const profile = childSnapshot.val();

        // Create a profile card
        const profileDiv = document.createElement("div");
        profileDiv.classList.add("profile-card");
        profileDiv.innerHTML = `
          <img src="${profile.photoURL}" alt="${profile.name}" class="profile-photo">
          <h3>${profile.name}</h3>
          <p><strong>Expertise:</strong> ${profile.expertise}</p>
          <p><strong>Certifications:</strong> ${profile.certifications}</p>
          <p><strong>Reviews:</strong> ${profile.reviews || "No reviews available."}</p>
        `;
        container.appendChild(profileDiv);
      });
    } else {
      container.innerHTML = "<p>No consultants found. Be the first to join!</p>";
    }
  }, (error) => {
    console.error("Error fetching profiles:", error);
  });
}
