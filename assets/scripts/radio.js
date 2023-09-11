const radio = document.querySelectorAll('input[type="radio"]');

radio.forEach(btn => {
    btn.addEventListener('click', () => {
        for(let i = 0; i < radio.length; i++){
            radio[i].removeAttribute('checked')
        }
        btn.setAttribute('checked','')
    })
})