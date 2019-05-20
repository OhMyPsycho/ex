<?php
sleep(1);
$name = (isset($_POST['name'])) ? htmlspecialchars($_POST['name']) : '';
$email = (isset($_POST['email'])) ? htmlspecialchars($_POST['email']) : '';
$msg = (isset($_POST['msg'])) ? htmlspecialchars($_POST['msg']) : '';
$to = 'sidep2006@gmail.com';
$subject = 'Mensaje enviado desde expertosdelaweb.com';

if ($name=='' || $email=='' || $msg=='') {
    echo 'Por favor rellena todos los campos';
} else {
    $message = "Nombre: $name \n";
    $message .= "Email: $email \n";
    $message .= "Mensaje: $msg \n";
    mail($to, $subject, $message);
    echo 'Mensaje enviado correctamente';
}

?>