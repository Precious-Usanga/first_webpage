const name = 'Precious Usanga';
console.log(`name is = ${name}`);


const nameSelector = document.getElementsByClassName('name');
nameSelector[0].innerHTML = name;
const courseTag = document.getElementsByClassName('courseTag');
courseTag[0].style.bold = '700';
courseTag[0].innerHTML = 'WELCOME! Please Enter a Number';

const showNumbLabel = document.getElementsByClassName('showNumbLabel');
const showNums = document.getElementsByClassName('showNums');
showNums[0].style.textAlign = 'justify';
showNums[0].style.lineHeight = '1.5'
showNumbLabel[0].innerHTML = 'Output Array';
const enterNums = document.getElementById('enterNums');

function calculate_divisibilty(num){
    let numbArray = [];
    if(!isNaN(num)){
        for(i = 1; i <= num; i++) {
            let newNumb = '';
            
            if(i%2 == 0) {
                let newNumb = 'yu';
                if(i%3 == 0) {
                    newNumb += `-gi`;
                }
                if(i%5 == 0) {
                    newNumb += `-oh`;
                }
                numbArray.push(newNumb);
            } else if(i%3 == 0) {
                let newNumb = 'gi';
                if(i%5 == 0) {
                    newNumb += `-oh`;
                }
                numbArray.push(newNumb);
            } else if(i%5 == 0) {
                let newNumb = 'oh';
                numbArray.push(newNumb);
            } else {
                let newNumb = i;
                numbArray.push(newNumb);
            }
    
        }
        return numbArray;
    } else {
        return `${num} is not a number`;
    }
};

enterNums.addEventListener('change', function(){
    let input = enterNums.value
    let output = calculate_divisibilty(input);
    showNums[0].innerHTML = `${output}`;
});

console.log(calculate_divisibilty(100));
console.log(calculate_divisibilty(20));
console.log(calculate_divisibilty('a'));
