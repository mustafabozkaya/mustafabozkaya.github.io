<!doctype html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <title>globalVariables</title>
</head>
<body>
<h1 style="color: red "> Global Degişkenlere CODELGNITER de fonksiyon içinde erişemiyoruz.Hatalar bundan dolayı!!! </h1>

    <p>
        Variables Scope
        In PHP, variables can be declared anywhere in the script.

        The scope of a variable is the part of the script where the variable can be referenced/used.

        PHP has three different variable scopes:

        local
        global
        static
        Global and Local Scope
        A variable declared outside a function has a GLOBAL SCOPE and can only be accessed outside a function:
    </p>

    Example
    <?php
    $x = 50; // global scope
    $y = 100;// global scope


    function myTest() {
        // using x inside this function will generate an error
        echo "<p style='color: red'>Global Variable x inside function is: $x</p>";
    }
    myTest();

    echo "<p style='color:green'>Global Variable x outside function is: $x</p>";
    ?>
    <p>

        A variable declared within a function has a LOCAL SCOPE and can only be accessed within that function:
    </p>

    Example
    <?php
    function myTest1() {
        $x = 5; // local scope
        echo "<p style='color:green'>Local Variable x inside function is: $x</p>";
    }
    myTest1();

    // using x outside the function will generate an error
    echo "<p style='color:red'> Global Variable x outside function is: $x</p>";
    ?>
    <p>
        You can have local variables with the same name in different functions, because local variables are only recognized by the function in which they are declared.

        PHP The global Keyword
        The global keyword is used to access a global variable from within a function.

        To do this, use the global keyword before the variables (inside the function):

    </p>

    Example1
    <?php
    //$x = 5;  $x already defined at up
    //$y = 10;  $y already defined at up

    function myTest2() {
        global $x, $y;
        $y = $x + $y;
    }

    myTest2();
    echo "<p> Global variables \$y: $y</p>"; // outputs 15
    ?>
    <p>
        PHP also stores all global variables in an array called $GLOBALS[index]. The index holds the name of the variable. This array is also accessible from within functions and can be used to update global variables directly.

        The example above can be rewritten like this:

    </p>

    Example2
    <?php
    // $x = 5; this variables already defined
    // $y = 10; this variables already defined

    function myTest3() {
        $GLOBALS['y'] = $GLOBALS['x'] + $GLOBALS['y'];
    }

    myTest3();
    echo "<p> Global variables \$y: $y</p>"; // outputs 15
    ?>

    Example3

    <?php
    function test() {
        $foo = "local variable";
        ?>
        <p>
            <?php
            echo '$foo in global scope: ' . $GLOBALS["foo"] . "<br>";
            echo '$foo in current scope: ' . $foo . "<br>";
            ?>
        </p>
        <?php
    }

    $foo = "Example content";
    test();
    ?>
    <p>
        PHP The static Keyword
        Normally, when a function is completed/executed, all of its variables are deleted.
        However, sometimes we want a local variable NOT to be deleted. We need it for a further job.

        To do this, use the static keyword when you first declare the variable:

    </p>

    Example
    <?php
    function myTestnonstatic() {
        $x = 0;
        return "<p> NON Static variables \$x: $x</p>";
        $x++;
    }
    echo "<br>";
    echo myTestnonstatic();
    echo myTestnonstatic();
    echo myTestnonstatic();
    echo "<br>";
    function myTeststatic() {
        static $x = 0;
        return "<p> Static variables \$x: $x</p>";
        $x++;
    }
    echo "<br>";
    echo myTeststatic();
    echo myTeststatic();
    echo myTeststatic();
    echo "<br>";


    ?>
    </body>
    </html>


