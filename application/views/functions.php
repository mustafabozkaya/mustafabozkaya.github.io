<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title><?php echo "1mustafa bozkaya"; ?></title>
</head>
<body>
<h1 style="color: red "> Global Degişkenlere CODELGNITER de fonksiyon içinde erişemiyoruz.Hatalar bundan dolayı!!! </h1>

<?php

#Değişken çeşitleri ve ARRAY ler

    $int=258;

    $str = "merhaba mustafa bozkaya";

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
//array_keys() — Return all the keys or a subset of the keys of an array.
//RETURNS ARRAY
print_r(array_keys($arrayy1));
echo "<br>";

//array_values() — Return all the values of an array
// RETURNS ARRAY
print_r(array_values($arrayy1));

die();
    /*foreach($arrayy1 as $key => $value){ print_r($key);echo "-->";print_r($value);echo "<br><br>";}
    echo strlen($str)."<br>";
    echo count($arrayy2)."<br>";

    for ($i=1; $i <= count($arrayy2); $i++) {
        $keyy="kullanıcı".$i;
        $index=
        print_r($arrayy2[$keyy]);echo "<br>";

}*/
 // fonctions tanımlama
/**
 * @param $int
 * @param $str
 * @param $flo
 * @param $obje
 * @param $arrayy1
 * @param $arrayy2
 */
function test_ARRAY($int, $str, $flo, $obje, $arrayy1, $arrayy2)
 {
    echo $int."<br>";
    echo $str."<br>";
    echo $flo."<br>";

     foreach($obje as $key => $value){ print_r($key);echo "-->";print_r($value);echo "<br><br>";}

     foreach($arrayy1 as $key => $value){ print_r($key);echo "-->";print_r($value);echo "<br><br>";}
     echo strlen($str)."<br>";
     echo count($arrayy2)."<br>";

    for ($i=1; $i <= count($arrayy2); $i++) {
        $keyy = "kullanıcı" . $i;

            print_r($arrayy2[$keyy]);
        echo "<br>";
    }
 }


 test_ARRAY($int,$str,$flo,$obje,$arrayy1,$arrayy2);

?>

</body>
</html>