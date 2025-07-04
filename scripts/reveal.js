// header reveal
// window.addEventListener('load', function() {
//     document.getElementById('header').style.transform = 'scaleY(1)';
//   });

// subscribe reveal
document.addEventListener("DOMContentLoaded", function () {
  const subscribeSection = document.querySelector(
    "#subscribe #subscribe-content"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          subscribeSection.classList.add("reveal");
          observer.unobserve(subscribeSection);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(subscribeSection);
});

// description reveal
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll("#description-box *"); // Select all elements within .description-box

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("right")) {
            entry.target.classList.add("reveal-right");
          } else if (entry.target.classList.contains("appear")) {
            entry.target.classList.add("reveal-appear");
          } else {
            entry.target.classList.add("reveal-left");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});

// Area Heading
document.addEventListener("DOMContentLoaded", function () {
  const element = document.querySelector("#areas-heading-box");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          console.log("reveal heading");
        }
      });
    },
    { threshold: 0.1 }
  );
  observer.observe(element);
});

// // Whole Area
// document.addEventListener("DOMContentLoaded", function () {
//   const elements = document.querySelectorAll(".areas-box"); // Select the areas-box elements
//   console.log("elements=", elements);
//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           if (entry.target.classList.contains("right")) {
//             entry.target.classList.add("reveal-right");
//           } else if (entry.target.classList.contains("appear")) {
//             entry.target.classList.add("reveal-appear");
//           } else {
//             entry.target.classList.add("reveal-left");
//           }
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.1 }
//   );

//   elements.forEach((element) => {
//     observer.observe(element);
//   });
// });

// area reveal
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".area-content *"); // Select all elements within .area

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target.classList.contains("right")) {
            entry.target.classList.add("reveal-right");
          } else if (entry.target.classList.contains("appear")) {
            entry.target.classList.add("reveal-appear");
          } else {
            entry.target.classList.add("reveal-left");
          }
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  elements.forEach((element) => {
    observer.observe(element);
  });
});
