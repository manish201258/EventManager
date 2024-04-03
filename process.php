<?php
$servername = "sql5.freesqldatabase.com";
$username = "sql5696495";
$password = "JTUKUP4JH5";
$database = "sql5696495";
$con = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$con) {
  die("Connection was failed. " .mysqli_error($con));
}
else{
  echo "Connection successfull";
}

if(isset($_POST['submit']))
{
   
  $fname=$_POST['f-name'];
  $lname=$_POST['l-name'];
  $gender=$_POST['gender'];
  $regno=$_POST['reg-no'];
  $email=$_POST['email'];
  $contact=$_POST['contact'];
  $event=$_POST['event'];

  $sql = "INSERT INTO studentdata (First_Name, Last_Name,Gender,Registration_No, Email, Contact, Event) 
          VALUES ('$fname', '$lname','$gender','$regno', '$email', '$contact', '$event')";

  if(mysqli_query($con, $sql)){
    echo "<script>alert('Form has been Submited')</script>";
  }
  else{
    echo "Error: " . mysqli_error($con);
  }
  mysqli_close($con);
}
?>
