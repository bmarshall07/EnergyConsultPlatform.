import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const consultantsContainer = document.getElementById("consultantsContainer");

const fetchConsultants = () => {
  const consultantsRef = ref(db, "consultants");

  onValue(consultantsRef, (snapshot) => {
    consultantsContainer.innerHTML = ""; // Clear existing data
    const data = snapshot.val();

    if (data) {
      Object.values(data).forEach((consultant) => {
        const card = document.createElement("div");
        card.classList.add("profile-card");

        card.innerHTML = `
          <h3>${consultant.name}</h3>
          <p><strong>Expertise:</strong> ${consultant.expertise}</p>
          <p><strong>Portfolio:</strong> ${consultant.portfolio}</p>
          <p><strong>Certifications:</strong> ${consultant.certifications}</p>
          <p><strong>Client Reviews:</strong> ${consultant.clientReviews}</p>
        `;
        consultantsContainer.appendChild(card);
      });
    } else {
      consultantsContainer.innerHTML = "<p>No consultants available.</p>";
    }
  });
};

// Fetch consultants on page load
fetchConsultants();
