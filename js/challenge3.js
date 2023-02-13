const getTextField = document.getElementById('textField')
/* getTextField.value = 'value="This Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, inventore? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident, inventore? is some defaul value"' */
const boldBtn = document.getElementById('bold')
const italicBtn = document.getElementById('italic')
const underlineBtn = document.getElementById('underline')

//align buttons
const leftBtn = document.getElementById('left')
const centerBtn = document.getElementById('center')
const rightBtn = document.getElementById('right')
const justifyBtn = document.getElementById('justify')


//fontsize, transform, color
const fontSizeField = document.getElementById('fontSize')
const transfromBtn = document.getElementById('transform')
const colorField = document.getElementById('color')

let clickedBoldBtn = false;
let clickedItalicBtn = false;
let clickedUnderlineBtn = false;
let cleckdeTransformBtn = false;


boldBtn.addEventListener('click', function () {

    if (!clickedBoldBtn) {

        boldBtn.style.backgroundColor = 'green'
        getTextField.style.fontWeight = 'bold';
        clickedBoldBtn = true;
    } else {
        boldBtn.style.backgroundColor = ''
        getTextField.style.fontWeight = '';
        clickedBoldBtn = false;
    }
}

)

italicBtn.addEventListener('click', function () {

    if (!clickedItalicBtn) {

        italicBtn.style.backgroundColor = 'green'
        getTextField.style.fontStyle = 'italic';
        clickedItalicBtn = true;
    } else {
        italicBtn.style.backgroundColor = ''
        getTextField.style.fontStyle = '';
        clickedItalicBtn = false;
    }
}

)

underlineBtn.addEventListener('click', function () {

    if (!clickedUnderlineBtn) {

        underlineBtn.style.backgroundColor = 'green'
        getTextField.style.textDecoration = 'underline';
        clickedUnderlineBtn = true;
    } else {
        underlineBtn.style.backgroundColor = ''
        getTextField.style.textDecoration = '';
        clickedUnderlineBtn = false;
    }
}

)

//alingnment

leftBtn.addEventListener('click', function () {
    leftBtn.style.backgroundColor = 'green'
    centerBtn.style.backgroundColor = ''
    rightBtn.style.backgroundColor = ''
    justifyBtn.style.backgroundColor = ''
    getTextField.style.textAlign = 'left';
})
centerBtn.addEventListener('click', function () {
    centerBtn.style.backgroundColor = 'green'
    leftBtn.style.backgroundColor = ''
    rightBtn.style.backgroundColor = ''
    justifyBtn.style.backgroundColor = ''
    getTextField.style.textAlign = 'center';
})

rightBtn.addEventListener('click', function () {
    rightBtn.style.backgroundColor = 'green'
    leftBtn.style.backgroundColor = ''
    centerBtn.style.backgroundColor = ''
    justifyBtn.style.backgroundColor = ''
    getTextField.style.textAlign = 'right';
})

justifyBtn.addEventListener('click', function () {
    justifyBtn.style.backgroundColor = 'green'
    leftBtn.style.backgroundColor = ''
    rightBtn.style.backgroundColor = ''
    centerBtn.style.backgroundColor = ''
    getTextField.style.textAlign = 'justify';
})

//fontsize, transform, color change
fontSizeField.addEventListener('click', function(){
    getTextField.style.fontSize = fontSizeField.value +'px';
})
fontSizeField.addEventListener('keyup', function(event){
    getTextField.style.fontSize = fontSizeField.value +'px';
    }
)


transfromBtn.addEventListener('click', function(){
    if(!cleckdeTransformBtn){
        getTextField.style.textTransform = 'uppercase'
        transfromBtn.style.backgroundColor = 'green'
        cleckdeTransformBtn = true;
    }else{
        getTextField.style.textTransform = ''
        transfromBtn.style.backgroundColor = ''
        cleckdeTransformBtn = false;
    }
    
})


colorField.addEventListener('input', function(){
    getTextField.style.color = this.value;
})

const redirectBtn = document.getElementById('go2nd')
redirectBtn.addEventListener('click', function(){
    location.replace('challenge02.html')
})
