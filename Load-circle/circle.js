const btnSizeLoad = document.querySelector(".btnSizeLoad")
const btnSizeDots = document.querySelector(".btnSizeDots")

var inputSizeLoad = document.querySelector(".inputSizeLoad")
var inputSizeDots = document.querySelector(".inputSizeDots")

var root = document.documentElement.style

btnSizeDots.addEventListener('click', function(){
    var value = inputSizeDots.value
    if (isNaN(value)){
        alert('Nhập sai giá trị!!!\nVui lòng nhập lại!!!')
        document.querySelector(".inputSizeDots").value = ""
        value = 0
    }
    else{
    }
    root.setProperty("--sizeDots", value + 'px')
})

btnSizeLoad.addEventListener('click', function(){
    var value = inputSizeLoad.value
    if (isNaN(value)){
        alert('Nhập sai giá trị!!!\nVui lòng nhập lại!!!')
        document.querySelector(".inputSizeLoad").value = ""
        value = 0
    }
    root.setProperty("--size", value + 'px')
})