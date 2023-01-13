// //
// const readNotifications = document.querySelector(".read");
const readNotifications = document.querySelector(".card__body");
// This method is used to select all the matching query and return it's length.
const notificationsCardCounter = document.querySelectorAll(".pop-up").length;
// //
const digit = document.getElementById("digit");
//
digit.innerHTML = notificationsCardCounter;

const handleNotifications = () => {
    //
    readNotifications.classList.toggle("card__body");

    //
    digit.innerHTML == 0
        ? (digit.innerHTML = notificationsCardCounter)
        : (digit.innerHTML = 0);
};

// const handleNotificationsCount = () => {};

// const btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//     // Ten
//     if (readNotifications.style.display == "block") {
//         readNotifications.style.display == "none";
//     } else {
//         readNotifications.style.display == "none";
//     }

//     digit.innerHTML == 0 ? (digit.innerHTML = 3) : (digit.innerHTML = 0);
// });

// P.S - I like to show my failure in code and I want to look back on why i did this and that
