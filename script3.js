function eatChocolate() {
    var chocolate = document.getElementById('chocolate');
    var chocolateHeading = document.getElementById('chocolateHeading');

    // Hide the chocolate and chocolate heading when clicked
    chocolate.style.display = 'none';
    chocolateHeading.style.display = 'none';

    // Redirect to the message page
    window.location.href = 'message.html';
}
