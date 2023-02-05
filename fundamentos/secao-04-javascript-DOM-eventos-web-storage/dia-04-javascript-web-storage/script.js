// Mudando configs

const changeStyle = (attr, value) => (document.body.style[attr] = value);

const btnSelection = (group, button) => {
  let selecteds = group.getElementsByClassName("selected");
  for (let selected of selecteds) {
    selected.classList.remove("selected");
  }
  button.classList.add("selected");
};

// Inserindo os botões

let btnGroupBgColor = document.getElementById("btn-group-bgColor");
let btnGroupFontColor = document.getElementById("btn-group-fontColor");
let btnGroupFontSize = document.getElementById("btn-group-fontSize");
let btnGroupLineSpace = document.getElementById("btn-group-lineSpace");
let btnGroupFontType = document.getElementById("btn-group-fontType");
let bgColorArray = ["white", "black", "green", "blue", "yellow"];
let fontColorArray = ["black", "red", "white"];
let fontSizeArray = ["12pt", "8pt", "10pt", "14pt", "20pt"];
let lineSpaceArray = ["normal", "1", "1.5", "2.0", "3.0"];
let fontTypeArray = ["Times New Roman", "Arial", "Courier"];

function addBtns(array, group, attr) {
  for (option of array) {
    let newBtn = document.createElement("button");
    newBtn.innerHTML = option;
    newBtn.value = option;
    group.appendChild(newBtn);
    newBtn.addEventListener("click", (evt) => {
      btnSelection(group, evt.target);
      changeStyle(attr, evt.target.value);
      localStorage.setItem(attr,evt.target.value); 
    });
  }
}

addBtns(bgColorArray, btnGroupBgColor, "backgroundColor");
addBtns(fontColorArray, btnGroupFontColor, "color");
addBtns(fontSizeArray, btnGroupFontSize, "font-size");
addBtns(lineSpaceArray, btnGroupLineSpace, "line-height");
addBtns(fontTypeArray, btnGroupFontType, "font-family");

// Salvar e carregar com localStorage

function loadConfig(array, group, attr) {
  let value = localStorage.getItem(attr);
  if (value) {
    changeStyle(attr, value);
  } else {
    value = array[0];
    localStorage.setItem(attr, value);
  }
  let index = array.indexOf(value);
  let button = group.children[index];
  btnSelection(group, button);
}

function loadConfigs() {
  loadConfig(bgColorArray, btnGroupBgColor, "backgroundColor");
  loadConfig(fontColorArray, btnGroupFontColor, "color");
  loadConfig(fontSizeArray, btnGroupFontSize, "font-size");
  loadConfig(lineSpaceArray, btnGroupLineSpace, "line-height");
  loadConfig(fontTypeArray, btnGroupFontType, "font-family");
}

window.onload = function(){ loadConfigs()};
