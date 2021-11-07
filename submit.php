<?php 
if(isset($_POST['submit'])){
    $to = "rboswellj@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $name = $_POST['name'];
    $subject = "Contact";
    $subject2 = "Contact Confirmation";
    $message = $name . " wrote the following:" . "\n\n" . $_POST['messageInput'];
    $message2 = "Here is a copy of your message " . $name . "\n\n" . $_POST['messageInput'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
    }
?>