<?php

session_start();

include_once("conexao.php");

$nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
$email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);

//echo "Nome: $nome<br>";
//echo "Email: $email<br>";


$result_usuario = "INSERT  INTO usuarios (nome, email, created) VALUES ('$nome', '$email', NOW() )";
$resultado_usuario = mysqli_query($conn, $result_usuario);

if (mysqli_insert_id($conn)) {

    $_SESSION['msg'] = "<p style='color:blue; font-size:16px;'> Usuário cadastrado com sucesso.</p>";

    header("Location: cadastro.php");
} else {


    header("Location: cadastro.php");

    $_SESSION['msg'] = "<p style='color:red; font-size:16px;'> Usuário  não foi cadastrado com sucesso.</p>";
}