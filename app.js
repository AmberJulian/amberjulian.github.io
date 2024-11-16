
document.addEventListener("DOMContentLoaded", async () => {
    var headerTextOne = document.getElementById("headerTextOne");
    var headerTextTwo = document.getElementById("headerTextTwo");
    var headerImage = document.getElementById("headerImage");

    var chevDown = document.getElementById("chevDown");

    headerTextOne.style.opacity = 1;

    await waitForOpacity(headerTextOne, 1);

    async function fadeInPlayer() {
        headerImage.style.opacity = 1;
        headerImage.style.animationPlayState = "running";
        await delay(0.9);
        headerImage.style.animationPlayState = "paused";
        return true;
    };

    await fadeInPlayer();
    await delay(0.2);

    headerTextTwo.style.opacity = 1;
    await waitForOpacity(headerTextTwo, 1);
    //Wait for second lot of text to fully fade in, 
    // and set about fading in the downswards chevron
    await delay(0.9);
    chevDown.style.opacity = 1;
    chevDown.style.animationPlayState = "running";
    return true;
});

function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000));
}

function waitForOpacity(element, targetOpacity = 1) {
    return new Promise((resolve, reject) => {
        // Check if the element is in the DOM
        if (!element) {
            reject(new Error("Element not found"));
            return;
        }

        // Function to check if opacity has reached the target
        function checkOpacity() {
            const currentOpacity = parseFloat(window.getComputedStyle(element).opacity);
            if (currentOpacity === targetOpacity) {
                resolve(); // Resolve when the opacity reaches the target
            } else {
                requestAnimationFrame(checkOpacity); // Keep checking
            }
        }

        // Start checking the opacity
        checkOpacity();
    });
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