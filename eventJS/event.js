let markup = document.createElement('div');
document.body.appendChild(markup);
markup.classList.add('markup');

let divWithAllDivs = document.createElement('div');
markup.appendChild(divWithAllDivs);
divWithAllDivs.classList.add('divId');
let divKey = document.createElement('div');
divWithAllDivs.appendChild(divKey);
divKey.id = "divKey";
divKeyId = document.getElementById('divKey');

addEventListener('keydown' , function(e) {
divKeyId.innerHTML = e.keyCode;


});

let divWithBlocks = document.createElement('div');
divWithAllDivs.appendChild(divWithBlocks);
divWithBlocks.classList.add('blocksDiv');

addEventListener('keydown', function t(){
     for(let i = 1; i <= 4; i++){
    let block = document.createElement('div');
    let blockName = document.createElement('div');
    let blockInfo = document.createElement('div');
    block.appendChild(blockName);
    block.appendChild(blockInfo);
    divWithBlocks.appendChild(block);
    block.classList.add('block');
    blockName.classList.add('blockName');
    blockName.classList.add('blockName' + i);
    blockInfo.classList.add('blockInfo');
    blockInfo.classList.add('blockInfo' + i);
    }
    removeEventListener('keydown',t,false);
})
   



blockNameId = document.getElementsByClassName('blockName');
blockInfoId = document.getElementsByClassName('blockInfo');


addEventListener('keydown' , function(e) {
    
blockNameId[0].innerHTML = 'event.key';
blockNameId[1].innerHTML = 'event.location';
blockNameId[2].innerHTML = 'event.which';
blockNameId[3].innerHTML = 'event.code';

blockInfoId[0].innerHTML = e.key;
blockInfoId[1].innerHTML = e.location;
blockInfoId[2].innerHTML = e.which;
blockInfoId[3].innerHTML = e.code;
});

let p = document.createElement('p');
markup.appendChild(p);
p.classList.add('p');

p.innerHTML = 'Сдесь могла быть реклама <span class="RED"> Сайта </span> — и ссылка на мой <span class="RED">GitHub</span>';