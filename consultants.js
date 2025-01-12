import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Get consultants container
const consultantsContainer = document.getElementById("consultantsContainer");

// Fetch consultants data from Firebase
onValue(ref(db, "consultants"), (snapshot) => {
  consultantsContainer.innerHTML = ""; // Clear existing data

  const consultants = snapshot.val();
  if (consultants) {
    Object.values(consultants).forEach((consultant) => {
      // Create a profile card for each consultant
      const card = document.createElement("div");
      card.className = "consultant-card";
      card.innerHTML = `
        <h2>${consultant.name}</h2>
        <p><strong>Expertise:</strong> ${consultant.expertise}</p>
        ${consultant.portfolio ? `<p><strong>Portfolio:</strong> ${consultant.portfolio}</p>` : ""}
        ${consultant.certifications ? `<p><strong>Certifications:</strong> ${consultant.certifications}</p>` : ""}
        ${consultant.clientReviews ? `<p><strong>Client Reviews:</strong> ${consultant.clientReviews}</p>` : ""}
      `;
      consultantsContainer.appendChild(card);
    });
  } else {
    consultantsContainer.innerHTML = "<p>No consultants found.</p>";
  }
});
