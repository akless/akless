<?php
	session_start();
?>
<!doctype html>

<!-- Not my solution! Student solution. -->

<h1>Login</h1>
<form method="post">
	<fieldset>
		<legend>Login to my Website:</legend>
		Accountname:<br>
		<input type="text" name="account">
		<br>
		Password:<br>
		<input type="password" name="password">
		<br><br>
		<input type="submit" value="Submit">
	</fieldset>
</form>
<?php
	if ( isset($_POST[ 'account' ]) && isset($_POST[ 'password' ]) ){
		$account = hash("sha384",filter_input(INPUT_POST,'account',FILTER_SANITIZE_STRING));
		$password = hash("sha384",filter_input(INPUT_POST,'password',FILTER_SANITIZE_STRING));
		$pwHash = checkIfAccountExists($account);
		if($pwHash != null) {
			if(strcmp($password,$pwHash)) {
				$_SESSION["isLoggedIn"] = true;
				echo "<script>alert('Login successfully!')</script>";
			} else {
				echo "<script>alert('Wrong Account or Password!')</script>";
			}
		} else {
			echo "<script>alert('Account does not exist!')</script>";
		}
	}

	function checkIfAccountExists($accHash) {
		$lines = file('passwd.csv');
		foreach($lines as $line_num => $line) {
			list($user,$password) = explode(";",$line);
			if($accHash === $user) {
				return $password;
			}
		}
		return null;
	}
?>