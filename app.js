
document.addEventListener("DOMContentLoaded", async () => {
    var headerTextOne = document.getElementById("headerTextOne");
    var headerTextTwo = document.getElementById("headerTextTwo");
    var headerImage = document.getElementById("headerImage");

    headerImage.onload = () => {
        console.log("loaded");
    }

    var chevDown = document.getElementById("chevDown");
    var useAlternativeCall = false;

    headerTextOne.style.opacity = 1;
    //Delay to try fix issues on refresh
    await delay(0.1);
    console.log("1")


    //Listen for the header 1 to be finished fading in
    headerTextOne.addEventListener("transitionend", async () => {

        console.log("reached");
        headerImage.style.opacity = 1;
        headerImage.style.animationPlayState = "running";
        await delay(0.9);
        headerImage.style.animationPlayState = "paused";

        await delay(0.2);
        //Fade in second lot of text
        headerTextTwo.style.opacity = 1;
        return true;
    });

    //Wait for second lot of text to fully fade in, 
    // and set about fading in the downswards chevron
    headerTextTwo.addEventListener("transitionend", async () => {
        await delay(0.9);
        chevDown.style.opacity = 1;
        chevDown.style.animationPlayState = "running";
        return true;
    });
    return true;
});




window.addEventListener("load", async () => {
    console.log("Everything is loaded, including images and styles.");
    // Your code here
    //Listen for the header 1 to be finished fading in
    return true;

});

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}





document.addEventListener("DOMContentLoaded", () => {
    // Create an intersection observer callback function
    const fadeInElements = Array.from(document.querySelectorAll('.rightBorderedDiv'))
        .concat(Array.from(document.querySelectorAll('.leftBorderedDiv')).concat(document.getElementById("techStackContainer"))); // All elements you want to fade in

    // Options for the intersection observer
    const options = {
        root: null, // Use the viewport as the root
        threshold: 0.1 // Trigger when 50% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the fade-in-visible class to the element when it enters the viewport

                entry.target.style.opacity = 1;
                observer.unobserve(entry.target); // Stop observing the element once it has appeared
            }
        });
    }, options);

    // Observe each element with the fade-in class
    fadeInElements.forEach(element => {
        observer.observe(element);
    });

    return true;
});


window.onscroll = function () {
    // Check if the page is scrolled
    if (window.scrollY > 0) {
        // Make the chevDown disappear by setting opacity to 0
        chevDown.style.opacity = 0;
    } else {
        // If the user scrolls back to the top, make the chevDown visible again
        chevDown.style.opacity = 1;
    }
};