<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Configura tu dirección de correo electrónico
    $to = "camiloamaya993@gmail.com";
    
    // Obtén y filtra los datos del formulario
    $name = filter_var(trim($_POST["name"]), FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $subject = filter_var(trim($_POST["subject"]), FILTER_SANITIZE_STRING);
    $message = filter_var(trim($_POST["message"]), FILTER_SANITIZE_STRING);

    // Validación básica
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "Por favor completa todos los campos.";
        exit;
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "Por favor, ingresa una dirección de correo válida.";
        exit;
    }

    // Asunto del correo
    $email_subject = "Mensaje de tu Portafolio: $subject";
    
    // Cuerpo del correo
    $email_body = "Nombre: $name\n";
    $email_body .= "Correo: $email\n\n";
    $email_body .= "Mensaje:\n$message\n";
    
    // Encabezados del correo
    $headers = "From: $email";

    // Enviar correo
    if (mail($to, $email_subject, $email_body, $headers)) {
        echo "Mensaje enviado correctamente.";
    } else {
        echo "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.";
    }
}
?>
