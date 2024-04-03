<?php
$servername = "sql5.freesqldatabase.com";
$username = "sql5696495";
$password = "JTUKUP4JH5";
$database = "sql5696495";
$con = mysqli_connect($servername, $username, $password, $database);

// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}
$sql = "SELECT * FROM `studentdata`";
$result = mysqli_query($con, $sql);

if (mysqli_num_rows($result) > 0) {
  // Output data of each row
  echo "<table>";
  echo "<tr>
  <th>ID</th>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Gender</th>
  <th>Reg. No</th>
  <th>Email</th>
  <th>Contact No.</th>
  <th>Event</th>
  <th>Delete</th>
  </tr>
  ";
  while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>";
    echo "<td>" . $row["ID"] . "</td>";
    echo "<td>" . $row["First_Name"] . "</td>";
    echo "<td>" . $row["Last_Name"] . "</td>";
    echo "<td>" . $row["Gender"] . "</td>";
    echo "<td>" . $row["Registration_No"] . "</td>";
    echo "<td>" . $row["Email"] . "</td>";
    echo "<td>" . $row["Contact"] . "</td>";
    echo "<td>" . $row["Event"] . "</td>";
    echo "<td class='remove-icon' data-id='" . $row["ID"] . "'><img src='assests/remove.png' alt=''></td>";
    echo "</tr>";
  }
  echo "</table>";
} else {
  echo "0 results";
}

mysqli_close($con);
?>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script>
$(document).ready(function() {
  $(".remove-icon").click(function() {
    var row_id = $(this).data("id");
    $.ajax({
      url: "delete_row.php",
      method: "POST",
      data: { id: row_id },
      success: function(response) {
        // Refresh the table after successful deletion
        location.reload();
      }
    });
  });
});
</script>
