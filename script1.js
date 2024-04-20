document.addEventListener('DOMContentLoaded', async function() {
    var audio = document.getElementById('bg-music');

    // Wait for a user gesture (e.g., a click event)
    await new Promise((resolve) => {
        document.body.addEventListener('click', () => resolve(), { once: true });
    });

    // Play the audio after a user gesture
    audio.play().catch(error => {
        console.error('Error playing audio:', error);
    });
});

function animateCake() {
    var cake = document.getElementById('cake');
    var audio = document.getElementById('bg-music');
    var birthdayContent = document.getElementById('birthdayContent');
    var instruction = document.getElementById('instruction');
    
    // Hide the cake and instruction
    cake.style.display = 'none';
    instruction.style.display = 'none';
    
    // Show the birthday content
    birthdayContent.style.display = 'block';
    
    // Play audio
    audio.play();
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('bg-music');

    // Listen for the 'ended' event on the audio element
    audio.addEventListener('ended', function() {
        // After the song finishes, wait for 6 seconds before redirecting
        setTimeout(function() {
            window.location.href = 'bd3.html'; // Redirect to bd3.html
        }, 14000); // 6000 milliseconds = 6 seconds
    });
});
