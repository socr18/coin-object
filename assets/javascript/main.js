// HTML Basic Body Tages

let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
        this.state = Math.floor(Math.random() * Math.floor(2))
        //this.toString(this.state)
        //console.log(this.state)
        return(this.state)
    },
    toString: function() {
        let listItem = document.createElement('li')
        orderedList.append(listItem)
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0){
            listItem.append('Heads')
            //return(this.toString)
        } else {
            listItem.append('Tails')
            //return(this.toString)
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
        image.className = 'penny'
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
           // tails image from Penny war - Wikipedia
           // heads image from Presidents On US Coins marshu.com
           if (this.state === 0) {
                image.setAttribute('src', './assets/img/heads.png')
                image.setAttribute('alt', 'Heads')
           } else {
                image.setAttribute('src', './assets/img/tails.png')
                image.setAttribute('alt', 'Tails')
           }
        //console.log(image)
        imageDiv.append(image)
        return image;
    }
};

function display20Images() {
    coin.flip()
    coin.toHTML(this.state)
}

function display20Strings() {
    coin.flip()
    coin.toString(this.state)
}

stringButton.addEventListener('click', function () {
    orderedList.innerHTML = ""
    imageDiv.innerHTML = ""
    for (let i = 0; i <  20; i += 1) {
        display20Strings()
        //console.log(coin)
    }
})

imageButton.addEventListener('click', function () {
    imageDiv.innerHTML = ""
    orderedList.innerHTML = ""
    for (let i = 0; i <  20; i += 1) {
        display20Images()
        //console.log(coin)
    }
})
