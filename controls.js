const remote = require('electron').remote
let w = remote.getCurrentWindow()
let closeBtn = document.getElementById('closeBtn')
let minimizeBtn = document.getElementById('minimizeBtn')
let maximizeBtn = document.getElementById('maximizeBtn')

closeBtn.addEventListener('click', function(){
    w.close()
})

minimizeBtn.addEventListener('click', function(){
    w.minimize()
})

