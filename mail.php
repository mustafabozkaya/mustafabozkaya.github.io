<?php
	$to = 'admin@domainname.com';
	$username = $_POST[username];
	$email= $_POST[email];
	$message = $_POST[message];
	
	$headers = 'MIME-Version: 1.0' . "\r\n";
	$headers .= "From: " . $email . "\r\n"; // Sender's E-mail
	$headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	
	if (@mail($to, $email, $message, $headers))
	{
		echo 'sent';			
	}else{
		echo 'failed';
	}
	
?>