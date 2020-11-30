//slide handler

function runningPic() {

    let slideOne = document.getElementById('slide-one')
    slideOne.style.height = `${window.innerHeight}px`

    

    let counter = 1
    
    setInterval(() => {
        let pic = document.querySelectorAll('#slide-one img[data-screen="on"]')
        for(let i = 0;i < pic.length;i++)
        {
                let elTopP = pic[i].getBoundingClientRect().top
                pic[i].style.top = `-${counter+=.5}px`
                console.log(`Element ke: ${pic[i].getAttribute('data-number')} - Posisi  Top :${elTopP} - ${pic[i]}`)
                //console.log(pic[0].getBoundingClientRect().top, pic[0].height)



                if(elTopP < -pic[i].height )
                {
                    pic[i].setAttribute('data-screen','off')
                    //pic[i].remove()
                    var images = document.createElement('img')
                    images.setAttribute('data-screen','on')
                    images.src = pic[i].src
                    slideOne.appendChild(images)
                    console.log('naik')    
                }

           
            
        }
    }   , 100)
    
}

runningPic()
