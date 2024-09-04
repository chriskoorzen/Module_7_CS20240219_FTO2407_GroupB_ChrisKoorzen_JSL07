"use strict";

const cardForm = document.getElementById('cardForm');
const modal = document.getElementById('modal');
const certificateContent = document.getElementById('certificateContent');
const closeModal = document.querySelector('.close');

// 🚨 Close the modal when the close button is clicked
closeModal.addEventListener('click', function (){ modal.close(); });


cardForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get input values
//   const studentNameInput = document.getElementById('studentName');
//   const personalMessageInput = ;
//   const courseNameInput = ; 

//   const studentName = studentNameInput.value;
//   const personalMessage = personalMessageInput.value;
//   const courseName = courseNameInput ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

//   if (studentName.trim() === '' || personalMessage.trim() === '') {
//     alert('Please fill in all fields');
//     return;
//   }

//   // 🚨 Generate certificate content dynamically
//   certificateContent. = `
//   <h3>${studentName}</h3>
// `;

  //  Display the modal
  modal.showModal();

//   // Clear the form inputs
//   studentNameInput.value = '';
//   personalMessageInput.value = '';
//   if(courseNameInput) courseNameInput.value = '';
});
  