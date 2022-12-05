const btnSize = document.querySelector(".btnSize")
var inputSize = document.querySelector(".inputSize")
var loadSize = document.querySelector(".loader")
var root = document.documentElement.style

function isColor(strColor){
    var option = new Option().style
    option.color = strColor
    return option.color == strColor.toLowerCase()
}

btnSize.addEventListener('click', function(){
    var valueSize = inputSize.value
    if (isNaN(valueSize) == true){
        alert("Bạn đã nhập sai giá trị!!\nVui lòng nhập số!!!")
        document.querySelector(".inputSize").value = ""
        valueSize = 70
    }
    root.setProperty('--size', valueSize + 'px')
})

const btnColor = document.querySelector(".btnColor")
var inputColor = document.querySelector(".inputColor")
btnColor.addEventListener('click', function(){
    var valueColor = inputColor.value
    if (isColor(valueColor) == false){  
        alert("Bạn đã nhập sai mã màu!!!\nVui lòng nhập lại!!!")
        document.querySelector(".inputColor").value = ""
        valueColor = 'gray'
    }
    root.setProperty('--color', valueColor)
})

