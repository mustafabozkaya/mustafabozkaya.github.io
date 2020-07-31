<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>sihirli karakterler</title>
</head>
<body>
<?php
  /* sihirli karakterler
            \n
            \t
            \\
            \$
            \"
            \'
   */

 // sayfada \n ve \t karakterleri sadece bir boşluk olarak algılanıyorken
// sayfanın wiew sourse kısmında degişiklikler göze çarpıyor

        $ad = "mustafa\t\t\tbozkaya";
        $soyad = "bozkaya\n";

            echo $soyad;
            echo $ad;
            print "<br>";
            print "\test";
            print "<br>";
            print "\\test";

            echo "kullanıcı $ad  dediki:\"hoşgeldiniz!!!\"";
            print_r("kullanıcı \$ad değişkeni degeri $ad.")
?>
</body>
</html>