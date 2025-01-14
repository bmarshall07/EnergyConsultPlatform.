import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

const consultantsContainer = document.getElementById("consultantsContainer");

// Fetch consultants' profiles from the database
const fetchConsultants = () => {
  const consultantsRef = ref(db, "consultants");

  onValue(
    consultantsRef,
    (snapshot) => {
      consultantsContainer.innerHTML = ""; // Clear existing data
      const data = snapshot.val();

      if (data) {
        Object.values(data).forEach((consultant) => {
          // Create a profile card
          const card = document.createElement("div");
          card.classList.add("profile-card");

          card.innerHTML = `
            <div class="card-header">
              <h3>${consultant.name}</h3>
              <p><strong>Expertise:</strong> ${consultant.expertise}</p>
            </div>
            <div class="card-body">
              ${
                consultant.portfolio
                  ? `<p><strong>Portfolio:</strong> <a href="${consultant.portfolio}" target="_blank">View Portfolio</a></p>`
                  : ""
              }
              ${
                consultant.certifications
                  ? `<p><strong>Certifications:</strong> ${consultant.certifications}</p>`
                  : ""
              }
              ${
                consultant.clientReviews
                  ? `<p><strong>Client Reviews:</strong> ${consultant.clientReviews}</p>`
                  : ""
              }
            </div>
          `;

          consultantsContainer.appendChild(card);
        });
      } else {
        consultantsContainer.innerHTML = "<p>No consultants available.</p>";
      }
    },
    (error) => {
      console.error("Error fetching consultants data:", error);
      consultantsContainer.innerHTML =
        "<p>Failed to load consultants. Please try again later.</p>";
    }
  );
};

// Fetch consultants on page load
fetchConsultants();
