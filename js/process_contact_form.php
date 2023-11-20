<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Add your email address where you want to receive the messages
    $to = "navya.nelluri981@gmail.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    // Construct the message body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    // Send the email and check if it was sent successfully
    $mailSent = mail($to, $subject, $body, $headers);

    if ($mailSent) {
        // You can send a success response back to the client
        echo "success";
    } else {
        // You can send an error response back to the client
        echo "error";
    }
} else {
    // If the request is not POST, redirect to an error page or handle accordingly
    header("Location: error.html");
    exit();
}
?>
