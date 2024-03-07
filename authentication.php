<?php
session_start();

// Assuming $validKeys is an array containing valid authentication keys
$validKeys = array(
    "Abc123!@#def456GHI789!@#", 
    "PaSsW0rd!@#123qWeRtYUiOp", 
    "!@#AbC789DEF123!@#GHI456", 
    "qwerty!@#123!@#asdfGHIjkl", 
    "P@ssW0rD!@#1q2w3e4r5t6y", 
    "!@#P@55w0rD1234!@#5678", 
    "M1x3dCh@Ract3r$!@#123!@#", 
    "MyK3y!@#For!@#Aut#3ntiC4tion", 
    "!@#25Char@cT3r5!@#Long111" 
);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $enteredKey = $_POST["authKey"];

    if (empty($enteredKey)) {
        $response = array("error" => true, "message" => "Please enter a key.");
    } elseif (!in_array($enteredKey, $validKeys)) {
        $response = array("error" => true, "message" => "Invalid key.");
    } else {
        $_SESSION["authenticated"] = true;
        // Set cookie to indicate authentication with an expiration time of 100 years
        setcookie("authentication", "true", time() + (100 * 365 * 24 * 60 * 60), "/"); // Cookie expires in 100 years
        $response = array("error" => false, "message" => "Validation Successful");
    }

    echo json_encode($response);
}
?>