let bodyTag = document.querySelector('body')
let headerTags = document.createElement('header')
let mainTags = document.createElement('main')
let footerTags = document.createElement('footer')

bodyTag.prepend(headerTags, mainTags, footerTags)

let pageTitle = document.createElement('h1')
mainTags.append(pageTitle)
pageTitle.append('Coin Object')

let stringButton = document.createElement('button')
mainTags.append(stringButton)
stringButton.append('20 Coin Flips String')
stringButton.className = 'stringB'

let imageButton = document.createElement('button')
mainTags.append(imageButton)
imageButton.append('20 Coin Flips Image')
imageButton.className = 'imageB'

let imageResult = document.querySelector('main')
let orderedList = document.createElement('ol')
imageResult.append(orderedList)

let imageDiv = document.createElement('div')
imageResult.append(imageDiv)