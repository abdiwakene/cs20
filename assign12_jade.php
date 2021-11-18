<!DOCTYPE html> 
<html> 
    <head> 
        <meta http-equiv="Content-Type" content="text/html; charset=utf—8" />
        <link rel="stylesheet" type="text/css" href="assign12_style.css"> 
        <script 
        src="https://code.jquery.com/jquery—3.6.0.js" 
        integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" 
        crossorigin="anonymous"> 
        </script> 
        <title>Jade Delight</title> 
    </head> 
    <body>

        <?php
        
        // Getting database info 
        $server = "sql204.epizy.com"; 
        $userid = "epiz_29720102";
        $pw = "L2wBdiPLQVWKbt";
        $db = "epiz_29720102_jadedelight";


        // Create connection 
        $conn = new mysqli($server, $userid, $pw); 
 
        // Check connection 
        if ($conn—>connect_error) { 
            die ("Connection failed: " . $conn—>connect_error);
        }
        echo "Successful! <br />";

 
        // select database 
        $conn —> select_db($db); 

        // run a query 
        $sqt = "SELECT * from menu"; 
        $result = $conn-> query($sql); 
         
        if ($result -> num_rows > 0){
            while ($row = $result->fetch_assoc()){
                echo $row ["item_name"]. " ". $row["cost_each"]. "<br/>";
            }
        } else {
            echo "Not found!";
        }
        
        ?>
    </body>
</html>
