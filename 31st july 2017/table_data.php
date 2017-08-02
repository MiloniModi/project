<?php
		$host = "localhost";
		$username = "root";
		$password = "";
		

		$connector = mysqli_connect($host,$username,$password,"test");
		if($connector)
		{
			echo "Connection Successful!";
		}
		else
		{
			echo "Unable to connect!";
		}

		//$selected = mysqli_select_db("test",$connector);
?>
<html>
<body>
	<?php
		$result = mysqli_query($connector,"SELECT * FROM student");
	?>
	<table style="border: 1px solid black; font-family: Times New Roman">
		<thread>
			<th>First Name</th>
			<th>Last Name</th>
			<th>Age</th>
			<th>Id</th>
		</thread>
		<tbody>
			<?php
				while($row = mysqli_fetch_assoc($result))
				{
					echo "<tr> 
					<td>{$row['FName']}</td>
					<td>{$row['LName']}</td>
					<td>{$row['Age']}</td>
					<td>{$row['Id']}</td>
					</tr>";
				}
			?>
		</tbody>
	</table>
</body>
</html>
<?php mysqli_close($connector); ?>