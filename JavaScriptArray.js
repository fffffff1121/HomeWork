//Добавил внутрение массивы
var arr_1 = new Array("Wow" , "First" , "Array");
var arr_2 = new Array("WOw" , "Second" , "Array");
var arr_3 = new Array("WOW" , "Third" , "Array");

//Добавил массив
var arr = new Array(arr_1 , arr_2 , arr_3);

//Функция (принимает только строковые аргументы!)
function ShowElements(arg)
{

/*
    var y;
    var elementsArray = 0;
    
    document.write(arg);

    Проверка , есть ли в массиве внутренние массивы
    for(y = 0; y < arg.lenght; y++){

        elementsArray += y; 

    }
    if(elementsArray == 0){document.write("В массиве" + arg + " нет внутренних массивов")}*/
    

        //Нахождение всех элементов внутренних массивов
        for( var i = 0; i < arg.lenght; i++){

            for( var x = 0; x < arg[i].lenght; x++){

            document.write(arg[i][x] + "\n");

            }

        document.write( "\n" );

        }

    }


    ShowElements(arr);
    
