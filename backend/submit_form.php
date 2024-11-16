<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize and validate input
    $firstName = htmlspecialchars(strip_tags($_POST['firstName']));
    $lastName = htmlspecialchars(strip_tags($_POST['lastName']));
    $phone = htmlspecialchars(strip_tags($_POST['phone']));
    $email = htmlspecialchars(strip_tags($_POST['email']));
    $newClient = htmlspecialchars(strip_tags($_POST['newClient']));
    $message = htmlspecialchars(strip_tags($_POST['message']));

    // Here you can add code to save the data to a database or send an email

    // Respond with a success message
    echo "Thank you, $firstName! Your information has been submitted successfully.";
} else {
    echo "Invalid request.";
}
?>
