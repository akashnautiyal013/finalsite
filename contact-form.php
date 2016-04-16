 <?php
// require_once 'phpmailer/PHPMailerAutoload.php';

// if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {

//     //check if any of the inputs are empty
//     if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
//         $data = array('success' => false, 'message' => 'Please fill out the form completely.');
//         echo json_encode($data);
//         exit;
//     }

//     //create an instance of PHPMailer
//     $mail = new PHPMailer();

//     $mail->From = $_POST['inputEmail'];
//     $mail->FromName = $_POST['inputName'];
//     $mail->AddAddress('nymd.tk@gmail.com'); //recipient 
//     $mail->Subject = $_POST['inputSubject'];
//     $mail->Body = "Name: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);

//     if (isset($_POST['ref'])) {
//         $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
//     }

//     if(!$mail->send()) {
//         $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
//         echo json_encode($data);
//         exit;
//     }

//     $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
//     echo json_encode($data);

// } else {

//     $data = array('success' => false, 'message' => 'Please fill out the form completely.');
//     echo json_encode($data);

// }






 <?php
    $response = array( 'success' => false );
    $formData = file_get_contents( 'php://input' );
    $data = json_decode( $formData );
    if ( $data->submit && empty( $data->honeypot ) ) {
        $name = $data->name;
        $email = $data->email;
        $message = $data->message;

        if ( $name != '' && $email != '' && $message != '' ) {
            $mailTo = 'akash.nautiyal013@gmail.com';
            $subject = 'New contact form submission';
            $body  = 'From: ' . $name . "\n";
            $body .= 'Email: ' . $email . "\n";
            $body .= "Message:\n" . $message . "\n\n";

            $success = mail( $mailTo, $subject, $body );

            if ( $success ) {
                $response[ 'success' ] = true;
            }
        }
    }

    echo json_encode( $response );
?>