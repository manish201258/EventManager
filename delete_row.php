<?php
$servername = "sql5.freesqldatabase.com";
$username = "sql5696495";
$password = "JTUKUP4JH5";
$database = "sql5696495";
$con = mysqli_connect($servername, $username, $password, $database);

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['id'])) {
  $id = $_POST['id'];
  $sql = "DELETE FROM studentdata WHERE ID=$id";

  if (mysqli_query($con, $sql)) {
    echo "Record deleted successfully";
  } else {
    echo "Error deleting record: " . mysqli_error($con);
  }
} else {
  echo "Invalid request";
}

mysqli_close($con);
?>
