<html>
    <head>
        <title> Jade Delight </title>
    </head>
    <body>

        <?php
        $fname = $_POST['fname'];
        $lname = $_POST['lname'];
        $phone = $_POST['phone'];
        $item = $_POST['list_items'];
        $subtotal = $_POST['subtotal'];
        $tax = $_POST['tax'];
        $total = $_POST['total'];
        $arrival_time = $_POST['time_calc'];


        echo "Thank You for ordering with us! <br>"; 
        echo "First Name: $fname <br>"; 
        echo "Last Name*: $lname <br>"; 
        echo "Phone*: $phone <br>";
        echo " You ordered: $item_each <br>";
        echo "Subtotal: $subtotal <br>"
        echo "Tax: $tax <br>"; 
        echo "Order Total: $total <br>";
        echo "Your order will arrive by: $arrival_time <br>";

        //email the order receipt

        mail("abdiwakene@gmail.com", "Jade Delight Order Receipt", "Thank You!");

        ?>

    </body>
</html>
