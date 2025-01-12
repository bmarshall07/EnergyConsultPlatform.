import { db, storage } from "./firebaseConfig.js";
import { ref, push } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-database.js";
import { ref as storageRef, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.19.1/firebase-storage.js";

const form = document.getElementById("join-form");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", async () => {
  const name = document.getElementById("name").value.trim();
  const expertise = document.getElementById("expertise").value.trim();
  const certifications = document.getElementById("certifications").value.trim();
  const reviews = document.getElementById("reviews").value.trim();
  const photo = document.getElementById("photo").files[0];

  if (!name || !expertise || !certifications || !photo) {
    alert("Please fill out all required fields and upload a photo.");
    return;
  }

  try {
    // Upload photo to Firebase Storage
    const photoRef = storageRef(storage, `photos/${photo.name}`);
    const snapshot = await uploadBytes(photoRef, photo);
    const photoURL = await getDownloadURL(snapshot.ref);

    // Save profile to Firebase Realtime Database
    const profilesRef = ref(db, "consultant_profiles");
    await push(profilesRef, {
      name,
      expertise,
      certifications,
      reviews,
      photoURL,
    });

    alert("Profile submitted successfully!");
    form.reset();
  } catch (error) {
    console.error("Error submitting profile:", error);
    alert("An error occurred. Please try again.");
  }
});
