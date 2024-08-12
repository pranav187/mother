// document.addEventListener('DOMContentLoaded', function () {
//     document.querySelector('.valentine').addEventListener('click', function () {
//         const card = document.querySelector('.card');
//         const heart = document.querySelector('.heart');

//         // Move the card up when clicked
//         card.style.transform = 'translateY(-300px)';

//         // Start the heart pulse animation
//         heart.style.animation = 'pulse 1.5s infinite';

//         // Show a personalized message after the card moves up
//         setTimeout(() => {
//             const message = document.createElement('div');
//             message.className = 'message';
//             message.textContent = "I love you, Mom!";
//             card.appendChild(message);
//         }, 1000);  // Delay to allow the card to move up first
//     });

//     // Pulse animation for the heart
//     const heart = document.querySelector('.heart');
//     heart.style.animation = 'pulse 1.5s infinite';

//     // Define the pulse keyframes using JavaScript (in case you prefer to keep it all in the JS)
//     const styleSheet = document.styleSheets[0];
//     styleSheet.insertRule(`
//         @keyframes pulse {
//             0% {
//                 transform: scale(1) rotate(45deg);
//             }
//             50% {
//                 transform: scale(1.2) rotate(45deg);
//             }
//             100% {
//                 transform: scale(1) rotate(45deg);
//             }
//         }
//     `, styleSheet.cssRules.length);

//     // Define the fade-in keyframes for the message (if you want this in JS too)
//     styleSheet.insertRule(`
//         @keyframes fadeIn {
//             to {
//                 opacity: 1;
//             }
//         }
//     `, styleSheet.cssRules.length);
// });
