"use strict";

// Get references to UI elements
const cardForm = document.getElementById('cardForm');
const modal = document.getElementById('modal');
const certificateContent = document.getElementById('certificateContent');
const closeModal = document.querySelector('.close');

// Close the modal when the close button is clicked
closeModal.addEventListener('click', function (){ modal.close(); });


cardForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input elements
  const studentNameInput = cardForm.elements["studentName"];
  const personalMessageInput = cardForm.elements["personalMessage"];
  const courseNameInput = cardForm.elements["courseName"]; 

  // Get input values
  const studentName = studentNameInput.value.trim();
  const personalMessage = personalMessageInput.value.trim();
  const courseName = courseNameInput.value.trim() !== '' ? courseNameInput.value.trim() : "a course";

  // Check if name and message are empty strings (whitespace entered)
  if (studentName === '' || personalMessage === '') {
    alert('Please fill in all fields');
    return;
  }

//   // 🚨 Generate certificate content dynamically
//   certificateContent. = `
//   <h3>${studentName}</h3>
// `;

  //  Display the modal
  modal.showModal();

  // Clear the form inputs
  studentNameInput.value = '';
  personalMessageInput.value = '';
  courseNameInput.value = '';

});
  