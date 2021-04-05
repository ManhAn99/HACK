let search = document.querySelector('.search');
let p_search = document.querySelector('#search');

function showSearch() {
    search.style.display = 'block';
    p_search.style.color = '#2d87f3';


}

function closesearch() {
    search.style.display = 'none';
    p_search.style.color = 'initial';
}





let underWeight_male_image = document.getElementById('underweight-male-image');
let healthy_male_image = document.getElementById('healthy-male-image');
let overWeight_male_image = document.getElementById('overweight-male-image');
let obeseType1_male_image = document.getElementById('obesetype1-male-image');
let obeseType2_male_image = document.getElementById('obesetype2-male-image');
let underWeight_text = document.getElementById('underweight-text');
let healthy_text = document.getElementById('healthy-text');
let overWeight_text = document.getElementById('overweight-text');
let obeseType1_text = document.getElementById('obesetype1-text');
let obeseType2_text = document.getElementById('obesetype2-text');
let display_text = document.getElementsByClassName('display_text');
let container_text = document.getElementById('container_text')
// let form = document.getElementById('bmi')
// form.onsubmit = (e) => {
//     e.preventDefault();
//     let bmi = form.inputValue.value;

//     // container_text.style.display = 'block';

//     // if (bmi < 18.5) {
//     //     underWeight_male_image.src = 'image/underweight-male-blue.png';
//     //     healthy_male_image.src = 'image/healthy-male-gray.png';
//     //     overWeight_male_image.src = 'image/overweight-male-gray.png';
//     //     obeseType1_male_image.src = 'image/obese-type1-male-gray.png';
//     //     obeseType2_male_image.src = 'image/obese-type2-male-gray.png';
//     //     underWeight_text.style.fontWeight = 'bold';
//     //     healthy_text.style.display = 'block';
//     //     overWeight_text.style.display = 'block';
//     //     obeseType1_text.style.display = 'block';
//     //     obeseType2_text.style.display = 'block';
//     //     underWeight_text.style.display = 'block';
//     //     healthy_text.style.fontWeight = '200';
//     //     overWeight_text.style.fontWeight = '200';
//     //     obeseType1_text.style.fontWeight = '200';
//     //     obeseType2_text.style.fontWeight = '200';

//     // } else if (bmi < 24.9) {
//     //     underWeight_male_image.src = 'image/underweight-male-gray.png'
//     //     healthy_male_image.src = 'image/healthy-male-blue.png'
//     //     overWeight_male_image.src = 'image/overweight-male-gray.png'
//     //     obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
//     //     obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
//     //     healthy_text.style.fontWeight = 'bold'
//     //     healthy_text.style.display = 'block'
//     //     overWeight_text.style.display = 'block'
//     //     obeseType1_text.style.display = 'block'
//     //     obeseType2_text.style.display = 'block'
//     //     underWeight_text.style.display = 'block'
//     //     underWeight_text.style.fontWeight = '200'
//     //     overWeight_text.style.fontWeight = '200'
//     //     obeseType1_text.style.fontWeight = '200'
//     //     obeseType2_text.style.fontWeight = '200'
//     // } else if (bmi < 29.9) {
//     //     underWeight_male_image.src = 'image/underweight-male-gray.png'
//     //     healthy_male_image.src = 'image/healthy-male-gray.png'
//     //     overWeight_male_image.src = 'image/overweight-male-blue.png'
//     //     obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
//     //     obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
//     //     overWeight_text.style.fontWeight = 'bold'
//     //     healthy_text.style.display = 'block'
//     //     overWeight_text.style.display = 'block'
//     //     obeseType1_text.style.display = 'block'
//     //     obeseType2_text.style.display = 'block'
//     //     underWeight_text.style.display = 'block'
//     //     underWeight_text.style.fontWeight = '200'
//     //     healthy_text.style.fontWeight = '200'
//     //     obeseType1_text.style.fontWeight = '200'
//     //     obeseType2_text.style.fontWeight = '200'
//     // } else if (bmi < 34.9) {
//     //     underWeight_male_image.src = 'image/underweight-male-gray.png'
//     //     healthy_male_image.src = 'image/healthy-male-gray.png'
//     //     overWeight_male_image.src = 'image/overweight-male-gray.png'
//     //     obeseType1_male_image.src = 'image/obese-type1-male-blue.png'
//     //     obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
//     //     obeseType1_text.style.fontWeight = 'bold'
//     //     healthy_text.style.display = 'block'
//     //     overWeight_text.style.display = 'block'
//     //     obeseType1_text.style.display = 'block'
//     //     obeseType2_text.style.display = 'block'
//     //     underWeight_text.style.display = 'block'

//     //     underWeight_text.style.fontWeight = '200'
//     //     overWeight_text.style.fontWeight = '200'
//     //     healthy_text.style.fontWeight = '200'
//     //     obeseType2_text.style.fontWeight = '200'
//     // } else {
//     //     underWeight_male_image.src = 'image/underweight-male-gray.png'
//     //     healthy_male_image.src = 'image/healthy-male-gray.png'
//     //     overWeight_male_image.src = 'image/overweight-male-gray.png'
//     //     obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
//     //     obeseType2_male_image.src = 'image/obese-type2-male-blue.png'
//     //     obeseType2_text.fontWeight = 'bold'
//     //     healthy_text.style.display = 'block'
//     //     overWeight_text.style.display = 'block'
//     //     obeseType1_text.style.display = 'block'
//     //     obeseType2_text.style.display = 'block'
//     //     underWeight_text.style.display = 'block'

//     //     underWeight_text.style.fontWeight = '200'
//     //     overWeight_text.style.fontWeight = '200'
//     //     obeseType1_text.style.fontWeight = '200'
//     //     healthy_text.style.fontWeight = '200'
//     // }
// }

let select = document.getElementById('select')


function checkMale() {
    select.onsubmit = (e) => {
        e.preventDefault()
        console.log('aaaaa')
       let age = select.age.value
       let height = select.height.value
       let weight = select.weight.value
       console.log(age)
       console.log(height)
       console.log(weight)
       bmi = weight/((height*0.01)*(height*0.01))
       console.log(Math.floor(bmi))
       container_text.style.display = 'block';

       if (bmi < 18.5) {
           underWeight_male_image.src = 'image/underweight-male-blue.png';
           healthy_male_image.src = 'image/healthy-male-gray.png';
           overWeight_male_image.src = 'image/overweight-male-gray.png';
           obeseType1_male_image.src = 'image/obese-type1-male-gray.png';
           obeseType2_male_image.src = 'image/obese-type2-male-gray.png';
           underWeight_text.style.fontWeight = 'bold';
           healthy_text.style.display = 'block';
           overWeight_text.style.display = 'block';
           obeseType1_text.style.display = 'block';
           obeseType2_text.style.display = 'block';
           underWeight_text.style.display = 'block';
           healthy_text.style.fontWeight = '200';
           overWeight_text.style.fontWeight = '200';
           obeseType1_text.style.fontWeight = '200';
           obeseType2_text.style.fontWeight = '200';
   
       } else if (bmi < 24.9) {
           underWeight_male_image.src = 'image/underweight-male-gray.png'
           healthy_male_image.src = 'image/healthy-male-blue.png'
           overWeight_male_image.src = 'image/overweight-male-gray.png'
           obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
           obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
           healthy_text.style.fontWeight = 'bold'
           healthy_text.style.display = 'block'
           overWeight_text.style.display = 'block'
           obeseType1_text.style.display = 'block'
           obeseType2_text.style.display = 'block'
           underWeight_text.style.display = 'block'
           underWeight_text.style.fontWeight = '200'
           overWeight_text.style.fontWeight = '200'
           obeseType1_text.style.fontWeight = '200'
           obeseType2_text.style.fontWeight = '200'
       } else if (bmi < 29.9) {
           underWeight_male_image.src = 'image/underweight-male-gray.png'
           healthy_male_image.src = 'image/healthy-male-gray.png'
           overWeight_male_image.src = 'image/overweight-male-blue.png'
           obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
           obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
           overWeight_text.style.fontWeight = 'bold'
           healthy_text.style.display = 'block'
           overWeight_text.style.display = 'block'
           obeseType1_text.style.display = 'block'
           obeseType2_text.style.display = 'block'
           underWeight_text.style.display = 'block'
           underWeight_text.style.fontWeight = '200'
           healthy_text.style.fontWeight = '200'
           obeseType1_text.style.fontWeight = '200'
           obeseType2_text.style.fontWeight = '200'
       } else if (bmi < 34.9) {
           underWeight_male_image.src = 'image/underweight-male-gray.png'
           healthy_male_image.src = 'image/healthy-male-gray.png'
           overWeight_male_image.src = 'image/overweight-male-gray.png'
           obeseType1_male_image.src = 'image/obese-type1-male-blue.png'
           obeseType2_male_image.src = 'image/obese-type2-male-gray.png'
           obeseType1_text.style.fontWeight = 'bold'
           healthy_text.style.display = 'block'
           overWeight_text.style.display = 'block'
           obeseType1_text.style.display = 'block'
           obeseType2_text.style.display = 'block'
           underWeight_text.style.display = 'block'
   
           underWeight_text.style.fontWeight = '200'
           overWeight_text.style.fontWeight = '200'
           healthy_text.style.fontWeight = '200'
           obeseType2_text.style.fontWeight = '200'
       } else {
           underWeight_male_image.src = 'image/underweight-male-gray.png'
           healthy_male_image.src = 'image/healthy-male-gray.png'
           overWeight_male_image.src = 'image/overweight-male-gray.png'
           obeseType1_male_image.src = 'image/obese-type1-male-gray.png'
           obeseType2_male_image.src = 'image/obese-type2-male-blue.png'
           obeseType2_text.fontWeight = 'bold'
           healthy_text.style.display = 'block'
           overWeight_text.style.display = 'block'
           obeseType1_text.style.display = 'block'
           obeseType2_text.style.display = 'block'
           underWeight_text.style.display = 'block'
   
           underWeight_text.style.fontWeight = '200'
           overWeight_text.style.fontWeight = '200'
           obeseType1_text.style.fontWeight = '200'
           healthy_text.style.fontWeight = '200'
       }
    }
    
}

function checkFemale() {
    select.onsubmit = (e) => {
        e.preventDefault()
        console.log('bbbbbb')
    }
}