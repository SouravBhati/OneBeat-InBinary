$(document).ready(function () {
    // functio to play audio
    var audio = document.getElementById('backgroundAudio');

    // Ensure the audio is loaded and seek to 5 seconds
    audio.onloadeddata = function() {
        audio.currentTime = 5; // Set the starting time in seconds
        audio.play().catch(function(error) {
            // Handle the case where the autoplay was blocked
            console.log('Autoplay was blocked: ', error);
        });
    };
    // ---------- END's Here ---------------
    
    let $card = $('.card');
    let $texts = $card.find('.text');
    let index = 1; // Start from the second text (index 1)
    let hoverTimer;
    let initialHover = true; // Track if it's the first hover

    // Function to show the next text element
    function showNextText() {
        if (index < $texts.length) {
            $texts.removeClass('visible').addClass('hidden'); // Hide all text elements
            $texts.eq(index).removeClass('hidden').addClass('visible'); // Show the current text element
            index++;
            hoverTimer = setTimeout(showNextText, 5000); // Show next text after 5 seconds
        }
    }

    $('.container').hover(function () {
        // Start the card slide up and text display process
        $card.stop().animate({
            top: '-90px'
        }, 'slow');

        if (initialHover && index === 1) {
            initialHover = false; // Ensure this block runs only once
            setTimeout(function () {
                showNextText();
            }, 8000); // Wait for 5 seconds before starting the text transitions
        } else if (index > 1) {
            showNextText(); // Continue the sequence without delay if it's not the first hover
        }
    }, function () {
        // Stop the card slide animation and clear the text display timer
        $card.stop().animate({
            top: 0
        }, 'slow');
        clearTimeout(hoverTimer);
        // Ensure the last text remains visible
        $texts.removeClass('hidden').addClass('visible');
        $texts.not('#four').addClass('hidden'); // Hide all except the fourth text
    });

    // Handle button click to navigate to finalMessage.html
    $('#missionExecuted').click(function () {
        window.location.href = $(this).data('url'); // Use the data-url attribute to get the URL
    });
});
