<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo "1mustafa bozkaya"; ?></title>
</head>
<body>
<?php

#Değişken çeşitleri ve ARRAY ler


$int=258;
$str = "merhaba";
$flo = "50.23";
$obje = new stdClass();

// array tanımlamanı 1. yolu
$arrayy1=[
    [1,2,3],
    "mustafa bozkaya",
    [
        "id" => "01",
        "name" => "salih",
        "soyad" =>"bozkaya"
    ],
    $str,
    $flo,
    "siteler"=>[
        "e_ticaret"=>[
            "hepsiburada",
            "N11",
            "Sahibinden.com",
            "Gittigidiyor",
        ],
        "egitim"=>[
            "udemy",
            "Courserae",
            "videoegitim",
        ]
    ]
];
// array tanımlamanı 2. yolu

$arrayy2=array(

    "kullanıcı1"=>array(

        "id" => "01",
        "name" => "salih",
        "Urn_satlan_site" =>array(
            "gittigidiyor"=>2,
            "sahibinden"=>2,
            "N11"=>2,
            "Hepsiburada"=>array(
                "magaza1"=>15,
                "magaza2"=>10,
                "magaza3"=>21,
            )
        )
    ),
    "kullanıcı2"=>array(
        "id" => "01",
        "name" => "salih"),
    "kullanıcı3"=>array(
        "id" => "01",
        "name" => "salih"),
    "kullanıcı4"=>array(
        "id" => "01",
        "name" => "salih"
    )

);
 // array leri objeleri ekrana  print_r () fonk ile basarız.we dont use echo or print !!!!
echo "<br>";
print_r($arrayy1)  ;

echo "<br><br>";
print_r($arrayy2)  ;
echo "<br>--------";
print_r($obje)  ;
echo "----------<br>";
print_r($flo);
echo "<br>";
echo $int ;
print_r("<br>" .
"<br>");
echo gettype($arrayy1);
print_r("<br>");
echo gettype($arrayy2);
printf("<br>");
echo gettype($obje);




?>

</body>
</html>
