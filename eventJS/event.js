let pGrey = document.getElementById('search-id');
document.body.onkeydown = function(){
    pGrey.remove();
    button[0].classList.remove('hide');
};
divKeyId = document.getElementById("div-key");

addEventListener("keydown", function(e) {
  divKeyId.innerHTML = e.keyCode;
});



divWithBlocks = document.getElementById('blocks-div');

function createBlocks(){
  for (let i = 1; i <= 4; i++) {
    let block = document.createElement("div");
    let blockName = document.createElement("div");
    let blockInfo = document.createElement("div");
    block.appendChild(blockName);
    block.appendChild(blockInfo);
    divWithBlocks.appendChild(block);
    block.classList.add("block");
    blockName.classList.add("block-name");
    blockName.classList.add("block-name" + i);
    blockInfo.classList.add("block-info");
    blockInfo.classList.add("block-info" + i);
  };
  removeEventListener("keydown",createBlocks, false);
};

addEventListener("keydown", createBlocks);

blockNameId = document.getElementsByClassName("block-name");
blockInfoId = document.getElementsByClassName("block-info");

function blockEdit(e) {
  blockNameId[0].innerHTML = "event.key";
  blockNameId[1].innerHTML = "event.location";
  blockNameId[2].innerHTML = "event.which";
  blockNameId[3].innerHTML = "event.code";

  blockInfoId[0].innerHTML = e.key;
  blockInfoId[1].innerHTML = e.location;
  blockInfoId[2].innerHTML = e.which;
  blockInfoId[3].innerHTML = e.code;
};

addEventListener("keydown", blockEdit);

let divId = document.getElementById('div-id-search');
let header = document.getElementsByClassName('header');
let center = document.getElementsByClassName('center');
let button = document.getElementsByClassName('button');
let buttonSecond = document.getElementsByClassName('buttonSecond');

button[0].addEventListener('click', function(){
  header[0].classList.add('hide');
  center[0].classList.remove('hide');
  button[0].classList.add('hide');
  button[1].classList.remove('hide');
});

button[1].addEventListener('click', function(){
  header[0].classList.remove('hide');
  center[0].classList.add('hide');
  button[0].classList.remove('hide');
  button[1].classList.add('hide');
});

