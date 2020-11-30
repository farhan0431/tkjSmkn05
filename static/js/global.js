//Body Size
let allEvent = ['load','resize']
allEvent.forEach(function(i) {
    window.addEventListener(i, function(e) {
        resizeBody();
    })
})
function resizeBody()
{
    document.body.style.height = `${window.innerHeight}px`
    document.body.style.overflow = `hidden`
}
