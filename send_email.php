<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "perezchristophermark@yahoo.com"; // Your email
    $subject = "New Message from Contact Form";
    
    // Sanitize and validate input
    $name = htmlspecialchars(strip_tags(trim($_POST['name'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));

    // Email content
    $body = "Name: $name\nEmail: $email\nMessage:\n$message";

    // Set headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Send email
    if (mail($to, $subject, $body, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Message could not be sent.";
    }
}
?>
