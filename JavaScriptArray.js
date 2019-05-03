 function sortFunction(a,b) {
        return b-a;
    }
//Добавил внутрение массивы
var arr_1 = new Array("Wow" , "First" , "Array");
var arr_2 = new Array("WOw" , "Second" , "Array");
var arr_3 = new Array("WOW" , "Third" , "Array");
var arr_clear = new Array();

//Добавил массив
var arr_With_num = new Array( 9 , 6 , 7);
var arr_Clear = new Array();
var arr = new Array(arr_1 , arr_2 , arr_3);
//Массив без внутренностей

//Функция (принимает только строковые аргументы!)





function ShowElements(arg){
  
    /*var summ = 0;*/
   
    //Проверка , есть ли в массиве внутренние массивы
    for(var y = 0; y < arg.length; y++){
     
        for(var t = 0; t < arg[y].length; t++){
    	

        }

    }



    //Проверка и вычисление , на сумму всех элементов массива , если элементы = Number (Не работает!)
    /*for(var y = 0; y < arg.length; y++){
     
        for(var t = 0; t < arg[y].length; t++){
    	
        var summInArr += arg[y][t];

        }

    }*/
    if(y == 0){

    	document.write("В массиве нет внутренностей");

    }else if(t == 0){

    	document.write("Внутренние массивы пусты");

    }/*else if (typeof(summ) == 'Number'){

        for(var u = 0; u < arg.length; u++){
        	for(var m = 0; m < arg[u].length; m++){
        		
                document.write(arg[u][m] + '<br/>');
        	}
        }
        


    }*/else{

    //Нахождение всех элементов внутренних массивов
    for( var i = 0; i < arg.length; i++){

        for( var x = 0; x < arg[i].length; x++){

            document.write(arg[i][x] + " ");

            }

        document.write( "<br/>" );

        }

    }
    

    


} 
ShowElements(arr);



    