<!DOCTYPE html>
<meta charset="UTF-8">

<form method="post">
  <input type="text" name="user">
  <input type="password" name="password">
  <input type="submit">
</form>

<?php
if ( isset( $_POST[ 'user' ] ) && isset( $_POST[ 'password' ] ) )
  file_put_contents( './users.csv', $_POST[ 'user' ] . ',' . $_POST[ 'password' ] . '\n', FILE_APPEND | LOCK_EX );
?>