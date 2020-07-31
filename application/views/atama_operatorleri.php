<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>atama operatörleri</title>
</head>
<body>

<?php
   /*
    *  ATAMA OPERATÖRLERİ
    *
    */
         $m="MUSTAFA";
         $s=20;
            //$s=30;
            //$s+=10;
            //$s-=10;
            //$s*=10;
            //$s/=10;
            //$s%=10;
            //$s%=10;

        //echo $s;

            //. birleştirme operatörü
        echo $m.$s."yaşındayken:".($s/5+3)."sene önceydi";
            // .= birleştirerek atama operatörü.
            $m.=$s;
        echo $m;



?>
</body>
</html>