function clickName() {
    let listName = document.querySelectorAll('.name-list p')

    let info = document.getElementById('profile-info')

    listName.forEach(element => {
        element.addEventListener('click', function(e) {
            console.log(info.style.left)
            info.style.left = '-250px'
            document.body.style.cursor = 'progress'
            element.style.cursor = 'progress'
            setTimeout(() => {
                let nis = this.getAttribute('data-nis')
                console.log(info)
                info.style.left = '350px'
                document.body.style.cursor = 'default'
                element.style.cursor = 'pointer'
            },1200)
        })
    })
    
    let closeBtn = document.querySelector('.close-btn')
    closeBtn.addEventListener('click',function(e) {
        info.style.left = '-250px'
    })
}

clickName()