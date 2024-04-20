function eatChocolate() {
    var chocolate = document.getElementById('chocolate');
    var chocolateHeading = document.getElementById('chocolateHeading');

    // Hide the chocolate and chocolate heading when clicked
    chocolate.style.display = 'none';
    chocolateHeading.style.display = 'none';

    // Close the browser after 3 seconds (3000 milliseconds)
    setTimeout(function() {
        window.close();
    }, 3000);
}