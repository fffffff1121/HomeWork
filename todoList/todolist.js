window.onload = function(){
    let h1MainName = document.getElementById("main_name");
    let buttonAddTask = document.getElementById("new_button");
    let rowInputId = document.getElementById("row_input_id");
    let buttonPerformed = document.getElementById("button_performed");
    let buttonUnfulfilled = document.getElementById("button_unfulfilled");
    let buttonMarked = document.getElementById("button_marked");
    let inputAddNewTask = document.getElementById("new_input");
    let counter = 1;
    let divId = 1;
    let buttonId = 1;
    let arrayCounter = 0;
    let arrWithTask = [];
    
    let buttonDeleteArray = [];

    h1MainName.innerHTML = "TodoList";

    buttonPerformed.addEventListener('click', function(){
        for(let i = 1; i < divId; i++){
            document.getElementById(i).remove();
        }
        divId = 1;
        buttonId = 1;
        counter = 1;
        h1MainName.innerHTML = "Выполненые";
        arrWithTask.forEach((currentValue, index) => {
           if(arrWithTask[index][1] == '1'){
                    createTask(counter++, arrWithTask[index][0], divId++, buttonId++);
            } 
        });
        
    });

    buttonUnfulfilled.addEventListener('click', function(){
        for(let i = 1; i < divId; i++){
            document.getElementById(i).remove();
        }
        divId = 1;
        buttonId = 1;
        counter = 1;
        h1MainName.innerHTML = "Невыполненые";
        arrWithTask.forEach((currentValue, index) => {
            if(arrWithTask[index][2] == '1'){
                    createTask(counter++, arrWithTask[index][0], divId++, buttonId++);
            } 
        });
    });

    buttonMarked.addEventListener('click', function(){ 
        for(let i = 1; i < divId; i++){
            document.getElementById(i).remove();
        }
        divId = 1;
        buttonId = 1;
        counter = 1;
        h1MainName.innerHTML = "Отмеченые";
        arrWithTask.forEach((currentValue, index) => {
            if(arrWithTask[index][3] == '1'){
                    createTask(counter++, arrWithTask[index][0], divId++, buttonId++);
            } 
        });  
        console.log(document.querySelectorAll("[id^='buttonDelete']"));
    });


    function arrItem(arr){
        if(arr.length){
            return true;
        }else{
            return false;
        }
    }

    function createTask(First, Second, Id, buttonId){
        let divAll = document.createElement('div');

        rowInputId.appendChild(divAll);

        divAll.classList.add('col-md-12');
        divAll.classList.add('main-menu-list');
        divAll.id = Id;

        let divRow = document.createElement('div');
        divRow.classList.add('row');
        divAll.appendChild(divRow);

        let divWithPFirst = document.createElement('div');
        let divWithPSecond = document.createElement('div');

        divWithPFirst.classList.add('col-md-1');
        divWithPSecond.classList.add('col-md-11');

        let divRowSecond = document.createElement('div');
        divRowSecond.classList.add('row');
        divWithPSecond.appendChild(divRowSecond);

        let divInDivRowFirst = document.createElement('div');
        let divInDivRowSecond = document.createElement('div');

        divInDivRowFirst.classList.add('col-md-9');
        divInDivRowSecond.classList.add('col-md-3');

        divRowSecond.appendChild(divInDivRowFirst);
        divRowSecond.appendChild(divInDivRowSecond);

        let pFirst = document.createElement('p');
        let pSecond = document.createElement('p');

        pFirst.classList.add('text-truncate');
        pSecond.classList.add('text-truncate');

        divWithPFirst.appendChild(pFirst);
        divInDivRowFirst.appendChild(pSecond);

        divRow.appendChild(divWithPFirst);
        divRow.appendChild(divWithPSecond);

        pFirst.innerHTML = First;
        pSecond.innerHTML = Second;

        let buttonSetting = document.createElement('button');
        let buttonDelete = document.createElement('button');
        let buttonMarked = document.createElement('button');

        divInDivRowSecond.appendChild(buttonSetting);
        divInDivRowSecond.appendChild(buttonDelete);
        divInDivRowSecond.appendChild(buttonMarked);

        buttonSetting.type = 'button';
        buttonDelete.type = 'button';
        buttonMarked.type = 'button';

        buttonSetting.innerHTML = 'Изменить';
        buttonDelete.innerHTML = 'Удалить';
        buttonMarked.innerHTML = 'Отметить';

        buttonSetting.classList.add('btn');
        buttonSetting.classList.add('btn-primary');
        buttonSetting.classList.add('btn-sm');
        buttonSetting.classList.add('mt-1');
        buttonSetting.classList.add('mr-1');

        buttonDelete.classList.add('btn');
        buttonDelete.classList.add('btn-danger');
        buttonDelete.classList.add('btn-sm');
        buttonDelete.classList.add('mt-1');
        buttonDelete.classList.add('mr-1');

        buttonMarked.classList.add('btn');
        buttonMarked.classList.add('btn-warning');
        buttonMarked.classList.add('btn-sm');
        buttonMarked.classList.add('mt-1');
        buttonMarked.classList.add('mt-1');
        
        buttonSetting.id = "buttonSetting" + buttonId;
        buttonDelete.id = "buttonDelete" + buttonId;
        buttonMarked.id = "buttonMarked" + buttonId;
    }

    function typeOfThis(obj){
        return {}.toString.call(obj).slice(8, -1);
    }

    buttonAddTask.addEventListener('focus', function(){
        if(typeOfThis(inputAddNewTask.value) == "String"){
            arrWithTask.push([inputAddNewTask.value, 0, 1, 0]);
            inputAddNewTask.value;
        }else{
            alert("Введите строку");
        }
    });

}



/* <div class="col-md-12 main-menu-list">
                            <div class="row">
                                <div class="col-md-1">
                                    <p class="text-truncate">dd</p>
                                </div>
                                    <div class="col-md-11">
                                        <div class="row">
                                            <div class="col-md-9"><p class="text-truncate">ddsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss</p></div>
                                            <div class="col-md-3">
                                                <button type="button" class="btn btn-primary btn-sm mt-1">Удалить</button>
                                                <button type="button" class="btn btn-primary btn-sm mt-1">Удалить</button>
                                                <button type="button" class="btn btn-primary btn-sm mt-1">Удалить</button>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div> */