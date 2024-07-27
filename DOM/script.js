const headerElements = document.getElementById("page-banner")
console.log(headerElements)
const divElements = document.getElementsByTagName("div")
console.log(divElements)
const cursiveElements = document.getElementsByClassName("cursive")
console.log(cursiveElements)
const cursiveDiv2Element = document.querySelector("main > p")
console.log(cursiveDiv2Element)
const allChildrenOfMain = document.querySelectorAll("main > *")
console.log(allChildrenOfMain)

const firstDiv = divElements[0]
const secondDiv = divElements.div2

const totalDivs = divElements.length
console.log(totalDivs)

for (const d of divElements) {
    console.log(d.id)
}

const bodyChildElements = document.body.children
console.log(bodyChildElements)

const content = document.getElementById('page-content')
const firstContentChildNode = content.firstChild
console.log(firstContentChildNode)
const firstContentChildElement = content.firstElementChild
console.log(firstContentChildElement)

const para = document.querySelector("main > p")
const lastchildpara = para.lastChild
console.log(lastchildpara)


const childelement = document.querySelector("h1")
const h1parent = childelement.parentNode
console.log(h1parent)

const currentElement1 = document.querySelector("main")
const prevSib = currentElement1.nextelementsibling
console.log(prevSib)


const currentelement2 = document.querySelector("header")
const nextsib = currentelement2.nextelementsibling
console.log(nextsib)

const newNav = document.createElement("nav")
document.querySelector("main").prepend(newNav)

const newDiv = document.createElement("div")
document.getElementById("div2").after(newDiv)

//element.innerHTML = text
newNav.innerHTML = "<h2>Navigation</h2>"

//insertAdjacentText()
//element.insertAdjacentText(location, text)

//insertAdjacentHTML()
//element.insertAdjacentHTML(location, data)

//beforebegine, afterbegin, beforeend, afterend

document.querySelector('main').insertAdjacentHTML("beforebegin", "<section>I am a section!</section>")

document.querySelector('h2').insertAdjacentText("beforeend", " - Main");

//element.remove()
console.log("is div1 still here?");
for (const d of divElements) {
    console.log(d.id)
}
document.getElementById('div1').remove();
console.log("is div1 still here?");
for (const d of divElements) {
    console.log(d.id)
}

const pageTitle = document.querySelector('h1');
pageTitle.style.fontSize = '64px';
pageTitle.style.color = 'maroon';
pageTitle.style.textAlign = 'center';
pageTitle.style.border = '1px solid black'

//element.classList

//element.classList.add('class1, class2, class3');
document.querySelector('h2').classList.add('nav-heading');

//element.classList.remove(class)
document.getElementById('div2').classList.remove('cursive')

document.querySelector('p').classList.toggle('cooking');
console.log("We toggled a class on the p element")
document.querySelector('p').classList.toggle('cooking');

const kaleImage = document.getElementById("kale-image");

console.log(kaleImage.id);
console.log(kaleImage.src);
console.log(kaleImage.alt);

//element.getAttribute(attribute)
const srcKaleImg = kaleImage.getAttribute("src");
console.log(srcKaleImg);

//element.setAttribute(attribute, value)
const div3Element = document.getElementById('div3');
div3Element.setAttribute('id', 'div4')

for (d of divElements) {
    if (!d.id) {
        d.setAttribute('id', 'middleDiv')
        console.log(middleDiv)
    }
}

//element.removeAttribute(attribute)
const mainElement = document.getElementById("page-content")
mainElement.removeAttribute("id");

//Events
//Event listener
//callback function

//element.addEventListener(event, callback)
const myButton = document.getElementById('my-button');
myButton.addEventListener('click', () => {
    const myDiv = document.getElementById('my-Div');
    myDiv.innerHTML = 'Yay, you clicked it!';
});

const myButton2 = document.getElementById('my-button2')
const addTextOnClick = () => {
    myButton2.insertAdjacentHTML('afterend', 'Hey you clicked the second one too')
}
myButton2.addEventListener('click', addTextOnClick);

document.addEventListener('DOMContentLoaded', function () {
    console.log('We are loaded')
})

//properties of event object
//target
//pageX
//pageY
//metaKey - not very important
//shiftKey



