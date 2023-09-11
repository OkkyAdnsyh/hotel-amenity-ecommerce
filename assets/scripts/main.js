document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('.nav-collapse').classList.add('isActive')
})
document.querySelector('.menu-toggle-close').addEventListener('click', () => {
    document.querySelector('.nav-collapse').classList.remove('isActive')
})

