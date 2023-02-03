<?header('Content-Type: application/json');
$name = $_POST['name'];
$email = $_POST['email'];
$password=$_POST['password'];
$password2=$_POST['password2'];
$conn = mysqli_connect("localhost", "root", "", "test");
$sql = "SELECT * FROM testap WHERE  email='$email'";
if($result = $conn->query($sql)){
    foreach($result as $row){
         $userEmail = $row["email"];
    }
}




if($email!==$userEmail){
if (!$conn) {
  die("Ошибка: " . mysqli_connect_error());
}
$emailbd = "SELECT * FROM testap WHERE  email='$email'";
$sql = "INSERT INTO testap (name,email,password,password2) VALUES 
            ('$email', '$email','password','password2')";
if(mysqli_query($conn, $sql)){
    echo "Данные успешно добавлены";
} else{
    echo "Ошибка: " . mysqli_error($conn);
}
mysqli_close($conn);

}
else{
    echo"Пользователь с таким email уже существует";}
?> 