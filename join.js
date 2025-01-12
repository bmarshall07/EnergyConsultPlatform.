import { db } from "./firebaseConfig.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";

// Ensure the script runs only when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  const joinForm = document.getElementById("joinForm");

  // Ensure the form exists before adding event listeners
  if (joinForm) {
    joinForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      // Collect form data
      const name = document.getElementById("name").value;
      const expertise = document.getElementById("expertise").value;
      const portfolio = document.getElementById("portfolio").value;
      const certifications = document.getElementById("certifications").value;
      const clientReviews = document.getElementById("clientReviews").value;

      // Save data to Firebase
      try {
        await push(ref(db, "consultants"), {
          name,
          expertise,
          portfolio,
          certifications,
          clientReviews,
        });

        alert("Profile submitted successfully!");
        joinForm.reset(); // Reset the form
      } catch (error) {
        console.error("Error saving profile:", error);
        alert("Failed to submit profile. Please try again.");
      }
    });
  } else {
    console.error("Form not found: Ensure the form ID matches and the script is loaded.");
  }
});
