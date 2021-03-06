document.addEventListener('DOMContentLoaded', function(){
    let inputAdd = document.getElementById('add-input');
    let inputNumberSetting = document.getElementById('setting-number-input');
    let inputTextSetting = document.getElementById('setting-text-input');
    let inputDelete = document.getElementById('delete-input');
    let buttonAdd = document.getElementById('add-button');
    let buttonSetting = document.getElementById('setting-button');
    let buttonDelete = document.getElementById('delete-button');
    let divAdd = document.getElementById('add-list');
    let divSetting = document.getElementById('setting-list');
    let divList = document.getElementById('div-list');
    let divDelete = document.getElementById('delete-list');
    let addA = document.getElementById('aAdd');
    let deleteA = document.getElementById('aDelete');
    let settingA = document.getElementById('aSetting');
    let counter = 1;
    addA.addEventListener('click', addAFunc);
    function addAFunc(){
        if(divAdd.classList.contains('hide')){
            divAdd.classList.remove('hide');
            divSetting.classList.add('hide');
            divDelete.classList.add('hide');
            addA.classList.add('active');
            deleteA.classList.remove('active');
            settingA.classList.remove('active');
        }else{
            divAdd.classList.add('hide');
            addA.classList.remove('active');
        }
    };
    settingA.addEventListener('click', settingAFunc);
    function settingAFunc(){
        if(divSetting.classList.contains('hide')){
            divSetting.classList.remove('hide');
            divDelete.classList.add('hide');
            divAdd.classList.add('hide');
            settingA.classList.add('active');
            addA.classList.remove('active');
            deleteA.classList.remove('active');
            
        }else{
            divSetting.classList.add('hide');
            settingA.classList.remove('active');
        }
    }
    deleteA.addEventListener('click', deleteAFunc);
    function deleteAFunc(){
        if(divDelete.classList.contains('hide')){
            divDelete.classList.remove('hide');
            divAdd.classList.add('hide');
            divSetting.classList.add('hide');
            deleteA.classList.add('active');
            addA.classList.remove('active');
            settingA.classList.remove('active');    
        }else{
            divDelete.classList.add('hide');
            deleteA.classList.remove('active');
        }
    }
    buttonAdd.addEventListener('click', addTargetEvent);
    function addTargetEvent(){
        if(inputAdd.value){
            addTargetFunc(counter++, inputAdd.value);
            inputAdd.value = '';
        }else{
            let TIME = setTimeout(() => {
                inputAdd.style = 'box-shadow: 0 0 6px #F32828';
            },50);
            setTimeout(() => {
                clearTimeout(TIME);
                inputAdd.style = 'border-color: none';
            },500);
        }
    }
    buttonSetting.addEventListener('click', settingTargetEvent);
    function settingTargetEvent(){
        if(inputNumberSetting.value && inputTextSetting.value){
            let textElement = document.getElementsByClassName(inputNumberSetting.value)[2];
            textElement.innerHTML = inputTextSetting.value;
            inputTextSetting.value = '';
            inputNumberSetting.value = '';
        }else{
            if(inputNumberSetting.value == false){
                let TIME = setTimeout(() => {
                    inputNumberSetting.style = 'box-shadow: 0 0 6px #F32828';
                },50);
                setTimeout(() => {
                    clearTimeout(TIME);
                    inputNumberSetting.style = 'border-color: none';
                },500);
            }else if(inputTextSetting.value == false){
                let TIME = setTimeout(() => {
                    inputTextSetting.style = 'box-shadow: 0 0 6px #F32828';
                },50);
                setTimeout(() => {
                    clearTimeout(TIME);
                    inputTextSetting.style = 'border-color: none';
                },500);
            }
        }
    }
    buttonDelete.addEventListener('click', buttonTargetEvent);
    function buttonTargetEvent(){
        if(inputDelete.value){
            let divElement = document.getElementsByClassName(inputDelete.value)[0];
            divElement.remove();
            inputDelete.value = '';
            counter--;
        }else{
            let TIME = setTimeout(() => {
                inputDelete.style = 'box-shadow: 0 0 6px #F32828';
            },50);
            setTimeout(() => {
                clearTimeout(TIME);
                inputDelete.style = 'border-color: none';
            },500);
        }
    }
    function addTargetFunc(firstText, lastText){
        let divRow = document.createElement('div');
        divRow.classList.add('row');
        divRow.classList.add('main-list');
        divList.appendChild(divRow);
        let divColMd2 = document.createElement('div');
        divColMd2.classList.add('col-md-2');
        let divColMd10 = document.createElement('div');
        divColMd10.classList.add('col-md-10');
        divRow.appendChild(divColMd2);
        divRow.appendChild(divColMd10);
        let h3Number = document.createElement('h3');
        h3Number.id = 'h3-number';
        let h3Text = document.createElement('h3');
        h3Text.id = 'h3-text';
        h3Text.classList.add('text-truncate');
        h3Text.style = 'width: 50rem';
        divColMd2.appendChild(h3Number);
        divColMd10.appendChild(h3Text);
        h3Number.innerHTML = firstText;
        h3Text.innerHTML = lastText;
        h3Number.classList.add(firstText);
        h3Text.classList.add(firstText);
        divRow.classList.add(firstText);
    }
});
/* <div class="row main-list">
    <div class="col-md-2"><h3 id="h3-number">1</h3></div>
    <div class="col-md-10"><h3 class="text-truncate" style="width: 50rem" id="h3-text">addasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasdddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddaddasddad</h3></div>
</div> */