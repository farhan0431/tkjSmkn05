//slide handler


window.addEventListener('load',function(e) {
    if(window.innerWidth > 600)
    {
        runningPicUp()
    }else{
        runningPicRight()
    }
})


function runningPicUp() {

    let slideOne = document.getElementById('slide-one')
    slideOne.style.height = `${window.innerHeight}px`

    

    let counter = 1
    


    setInterval(() => {
        let pic = document.querySelectorAll('#slide-one img[data-screen="on"]')
        for(let i = 0;i < pic.length;i++)
        {
                let elTopP = pic[i].getBoundingClientRect().top
                pic[i].style.top = `-${counter++}px`
                if(elTopP < -pic[i].height )
                {
                    pic[i].setAttribute('data-screen','off')
                    //pic[i].remove()
                    var images = document.createElement('img')
                    images.setAttribute('data-screen','on')
                    images.src = pic[i].src
                    slideOne.appendChild(images)
                
                }

           
            
        }
    }   , 100)


}

function runningPicRight() {

    let slideOne = document.getElementById('slide-one')
    slideOne.style.height = `${window.innerHeight}px`

    

    let counter = 1
    


    setInterval(() => {
        let pic = document.querySelectorAll('#slide-one img[data-screen="on"]')
        for(let i = 0;i < pic.length;i++)
        {
                let elTopRight = pic[i].getBoundingClientRect().right
                console.log(pic[0].getBoundingClientRect().right, window.innerWidth)
                pic[i].style.top = `-${counter++}px`
                if(elTopRight > (pic[i].height * 2 + window.innerWidth) )
                {
                    pic[i].setAttribute('data-screen','off')
                    //pic[i].remove()
                    var images = document.createElement('img')
                    images.setAttribute('data-screen','on')
                    images.src = pic[i].src
                    slideOne.appendChild(images)
                
                }

           
            
        }
    }   , 100)


}


