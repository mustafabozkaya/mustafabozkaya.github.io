<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo "1mustafa bozkaya"; ?></title>
</head>
<body>

<?php echo "2mustafa bozkaya"; ?><br>
<?="3mustafa bozkaya"?><br>

<?php

// bu bir açıklama satırı
# bu bir açıklama satırı
/*

    çoklu açıklama satırım

*/
print "4mustafa bozkaya";
$int=258;
$str = "merhaba";
$flo = "50.23";
$obje1 = new stdClass();
$obje=[
    array(1,2,3), "mustafa bozkaya",
    array(
        "id" => "01",
        "name" => "salih",
        "soyad" =>"bozkaya"
    ),$str,$flo
];
$arrayy=[
    array(
        "id" => "01",
        "name" => "salih"
    ),
    array(
        "id" => "01",
        "name" => "salih"),
    array(
        "id" => "01",
        "name" => "salih"),
    array(
        "id" => "01",
        "name" => "salih"
    )
];
echo "<br>";
print_r($arrayy)  ;
echo "<br>";
print_r($obje)  ;
echo "<br>";
print_r($flo);
echo "<br>";
echo $int ;
print_r("<br>" .
    "<br>");
echo gettype($arrayy);
print_r("<br>");
echo gettype($obje);
printf("<br>");
echo gettype($obje1);

// Variable incrementing and decrementing

$x=0;
++$x;

 echo "<br>"."----------".$x."----------";


//print_r($wiewData) ;

?>

</body>
</html>
