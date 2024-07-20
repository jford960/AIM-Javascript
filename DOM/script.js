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

const newArticle = document.createElement("article")
document.querySelector("main").append(newArticle)

const newDiv = document.createElement("div")
document.getElementById("div2").after(newDiv)