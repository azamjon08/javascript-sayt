let box = document.querySelector('.box')
let close = document.querySelector('.close')
let boy = document.querySelector('.boy')
let list = document.querySelector('.list')
let btn = document.querySelector('.btn')


btn.addEventListener('click' , function() {
    boy.style.display = 'block'
    box.style.display = 'none'
    // document.body.style.background = '#affff7'
})
close.addEventListener('click' , function() {
    boy.style.display = 'none'
    box.style.display = 'block'
    document.body.style.backgroundImage = ''
})



