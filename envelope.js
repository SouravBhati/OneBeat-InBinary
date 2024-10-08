$(document).ready(function () {
    // functio to play audio
    const audio = document.getElementById('backgroundAudio');

    // Start the audio playback after 20 seconds
    setTimeout(function() {
        audio.play().catch(error => {
            console.error('Playback failed:', error);
        });
    }, 20000); // 20000 milliseconds = 20 seconds
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
