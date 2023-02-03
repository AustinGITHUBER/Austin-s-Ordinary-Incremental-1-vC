'use strict'
let newsDiv = document.createElement('div')
newsDiv.style.position = 'absolute'
let origWidth = newsDiv.getBoundingClientRect().width
let moving = false
let repositionNewsDiv = () => {
    newsDiv.style.left = ''
    newsDiv.style.right = `${-parseFloat(newsDiv.getBoundingClientRect().width)}px`
    newsDiv.style.width = 'auto'
    origWidth = newsDiv.getBoundingClientRect().width
    newsDiv.style.width = `${origWidth}px`
    newsDiv.style.right = `${-parseFloat(newsDiv.getBoundingClientRect().width)}px`
}
let newsTexts = ['Hello, this was made on 12/16/2020, version made on 2/3/2023.', 'This is definently a normal incremental.', `Is it weird when people say &im`, `Times you encountered this before: &ci1`, 'Hello Fieler, I\'m Austin.']
let A = 0
let counter1 = 0n
let getRandomNewsText = () => {
    let normal = newsTexts[Math.floor(Math.random() * newsTexts.length)]
    let modified = normal.replace(/&im/g, modifyNumber(A)).replace(/&ci1/g, counter1)
    if (normal.includes('&ci1')) counter1++
    return modified
}
newsDiv.textContent = getRandomNewsText()
newsDiv.style.whiteSpace = 'nowrap'
addEventListener('resize', () => repositionNewsDiv())
document.body.append(newsDiv)
repositionNewsDiv()
let scrollLeftAndRespawn = () => {
    newsDiv.style.left = `${newsDiv.getBoundingClientRect().left - 4}px`
    if (newsDiv.getBoundingClientRect().left < -origWidth) {
        newsDiv.textContent = getRandomNewsText()
        repositionNewsDiv()
    }
    return requestAnimationFrame(scrollLeftAndRespawn)
}
requestAnimationFrame(scrollLeftAndRespawn)
let otherStuff1 = document.createElement('div')
otherStuff1.style.position = 'absolute'
otherStuff1.style.top = '42px'
document.body.append(otherStuff1)
let hr = document.createElement('hr')
otherStuff1.style.left = '0px'
otherStuff1.style.width = '100%'
hr.style.margin = '0px'
let AdisplayDiv = document.createElement('div')
AdisplayDiv.id = 'AdisplayDiv1'
function modifyNumber(n) {
    let int = Math.round(n)
    let e = int.toString().length - 1
    let firstDigits = fixDecimal((int / 10 ** e).toFixed(2))
    return `${firstDigits}e${e}`
}
let displayingA = () => {
    AdisplayDiv.textContent = modifyNumber(A)
    return requestAnimationFrame(displayingA)
}
requestAnimationFrame(displayingA)
let aUpgrades1 = 0
let firstButton = document.createElement('button')
firstButton.textContent = 'Click to begin earning A'
firstButton.onclick = () => {
    requestAnimationFrame(startEarningA)
    firstButton.id = 'firstButton1MaybeIdk'
    firstButton.textContent = modifyNumber(1e2 * 10 ** (Math.floor(aUpgrades1 / 10)))
    firstButton.onclick = () => {
        if (A < 1e2 * 10 ** (Math.floor(aUpgrades1 / 10))) return
        A -= 1e2 * 10 ** (Math.floor(aUpgrades1 / 10))
        aUpgrades1 += 1
        firstButton.textContent = modifyNumber(1e2 * 10 ** (Math.floor(aUpgrades1 / 10)))
    }
}
otherStuff1.append(hr, AdisplayDiv, firstButton)
async function startEarningA() {
    A += aUpgrades1 + 1 + ((1 + aUpgrades1) * 5 ** Math.floor(aUpgrades1 / 10) * 8)
    return requestAnimationFrame(startEarningA)
}
function fixDecimal(n) {
    if (!n.includes('.')) return n
    let arr = n.split('.')
    for (let [i, digit] of Object.entries(arr[1].split('').reverse())) {
        if (digit === '0') continue
        if (i !== '0') arr[1] = arr[1].slice(0, `-${i}`)
        break
    }
    if (arr[1][arr[1].length - 1] === '0') arr.pop()
    return arr.join('.')
}
let versionDiv = document.createElement('div')
versionDiv.textContent = `AOI 1 NONSAVE vC`
versionDiv.id = 'versionDiv'
let licenseDiv = document.createElement('div')
licenseDiv.textContent = `Austin's Ordinary Incremental 1 © 2020 by Austin is licensed under Attribution 4.0 International. To view a copy of this license, visit http://creativecommons.org/licenses/by/4.0/`
licenseDiv.id = `licenseDiv`
document.body.append(versionDiv, licenseDiv)