import { db } from "./firebaseConfig.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Get the container element where consultants will be displayed
const consultantsContainer = document.getElementById("consultantsContainer");

// Function to fetch and display consultants
const fetchConsultants = () => {
    const consultantsRef = ref(db, "consultants"); // Reference to the "consultants" node in Firebase

    // Listen for real-time updates
    onValue(consultantsRef, (snapshot) => {
        consultantsContainer.innerHTML = ""; // Clear existing data to prevent duplication
        const data = snapshot.val();

        if (data) {
            Object.entries(data).forEach(([key, consultant]) => {
                // Create a card for each consultant
                const card = document.createElement("div");
                card.classList.add("profile-card");

                card.innerHTML = `
                    <h3 class="profile-name">${consultant.name}</h3>
                    <p class="profile-details"><strong>Expertise:</strong> ${consultant.expertise || "N/A"}</p>
                    <p class="profile-details"><strong>Portfolio:</strong> ${consultant.portfolio || "N/A"}</p>
                    <p class="profile-details"><strong>Certifications:</strong> ${consultant.certifications || "N/A"}</p>
                    <p class="profile-details"><strong>Client Reviews:</strong> ${consultant.clientReviews || "No reviews yet"}</p>
                `;

                consultantsContainer.appendChild(card);
            });
        } else {
            // Display a message if no consultants are available
            consultantsContainer.innerHTML = "<p>No consultants available at the moment.</p>";
        }
    });
};

// Call the function to fetch consultants on page load
fetchConsultants();

