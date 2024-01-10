//-----------------------------------------------------------------------------------

const myImage = document.querySelector("img");

//trocar as imagens 
myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");

    if(mySrc === "../indexs/firefox2.jpg")
        myImage.setAttribute("src","../indexs/2013-02-26-firefox-logo-full.webp");
    else
        myImage.setAttribute("src","../indexs/firefox2.jpg");
}

//-----------------------------------------------------------------------------------
//essa parte serve para assim que o usuario acessar a pagina, ele seja solicitado a mandar um nome, para que aparece uma mensagem de boas vindas a ele com o nome dele.
//E tambem o usurio pode alterar o nome dele na mensagem.
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

if(!localStorage.getItem("name"))
    setUserName();
else{
    const storaredName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla é legal, ${storaredName}`;
}

function setUserName() {
    const myName = prompt("Digite seu nome");
    if(!myName)
        setUserName();
    else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla é legal, ${myName}`;
    }
}

myButton.onclick = () => {
    setUserName();
};
