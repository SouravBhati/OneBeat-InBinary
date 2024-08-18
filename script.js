document.addEventListener('DOMContentLoaded', (event) => {
    let moveCount = 0;

    // Function to handle button click and navigation
    function handleButtonClick(event) {
        const url = event.target.getAttribute('data-url');
        if (url) {
            window.location.href = url;
        }
    }

    // Add event listeners to buttons for navigation
    document.querySelectorAll('[data-url]').forEach(button => {
        button.addEventListener('click', handleButtonClick);
    });
    // -------------------------- END's Here -------------------
    

    // Function to move the "No" button randomly within the viewport
    function moveRandomEl(elm) {
        elm.style.position = "absolute";
        elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
        elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
        moveCount++;
        showPopupMessage();
    }

    // Function to show popup message
    function showPopupMessage() {
        let message = '';
        if (moveCount == 10) {
            message = "Aur kitni kosis karegi, Abb maan bhi jaa naa! 😟😙😙";
        } else if (moveCount == 5) {
            message = "Aap dusra option bhi click krr skte hoo baby 👉👈🥹";
        }

        if (message) {
            const popup = document.createElement('div');
            popup.className = 'popup';
            popup.textContent = message;
            document.body.appendChild(popup);

            // Or 
            // if (message) {
            //     const popup = document.createElement('div');
            //     popup.textContent = message;
            //     popup.style.position = '';
            //     popup.style.bottom = '10px';
            //     popup.style.left = '50%';
            //     popup.style.transform = 'translateX(-50%)';
            //     popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            //     popup.style.color = '#fff';
            //     popup.style.padding = '10px';
            //     popup.style.borderRadius = '5px';
            //     popup.style.zIndex = '1000';
            //     document.body.appendChild(popup);

            //     setTimeout(() => {
            //         document.body.removeChild(popup);
            //     }, 3000);
            // }

            setTimeout(() => {
                popup.classList.add('fade-out');
                popup.addEventListener('animationend', () => {
                    document.body.removeChild(popup);
                });
            }, 3000);
        }
    }

    const moveRandom = document.querySelector("#noChoice");

    if (moveRandom) {
        moveRandom.addEventListener("mouseenter", function (e) {
            moveRandomEl(e.target);
        });
    }
    // ----------------------------- END's Here ----------------------------------
});
