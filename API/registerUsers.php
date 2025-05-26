<?php
require_once "methodPost.php"; //$data
require_once "db.php"; //$conexion


if ($data) {
    $name = $data->userName;
    $email = $data->userEmail;
    $password = $data->userPassword;

    $insercion = $conexion->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");

    $insercion->bind_param("sss", $name, $email, $password);

    if ($insercion->execute()){
        echo "BIEN AHIII";
    }
}