let imageResult = document.querySelector('main')

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
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
        if (this.state === 0){
            this.toString = 'Heads'
            //console.log(this.toString)
            //return(this.toString)
        } else {
            this.toString = 'Tails'
            //console.log(this.toString)
            //return(this.toString)
        }
    },
    toHTML: function() {
        let image = document.createElement('img');
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
        imageResult.append(image)
        return image;
    }
};

function display20Images() {
    //for (let i = 0; i <  20; i += 1) {
        coin.flip()
        coin.toString(this.state)
        coin.toHTML(this.state)
    //}
}

function run20() {
    for (let i = 0; i <  20; i += 1) {
        display20Images()
        console.log(coin)
    }
}
 run20()


