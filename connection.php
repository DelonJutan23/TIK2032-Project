<?php
$servername = "localhost";
$username = "root";
$password = ""; 
$dbname = "tik2032-project"; 

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Koneksi gagal: " . $conn->connect_error);
}
$queryBlogPreview = "SELECT * FROM blog_preview";

$resultBlogPreview = $conn->query($queryBlogPreview);
?>

