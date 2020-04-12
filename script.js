const name = 'Precious Usanga';
console.log(`name is = ${name}`);
const courses = ['HTML5', 'CSS3', 'JS', 'PHP', 'PYTHON', 'C#', 'NodeJs'];


const nameSelector = document.getElementsByClassName('name');
nameSelector[0].innerHTML = name;
const courseTag = document.getElementsByClassName('courseTag');
courseTag[0].innerHTML = 'COURSES OFFERED:'

courses.forEach((course, i) => {
    let courseSelector = document.getElementsByClassName('courses');
    courseSelector[0].innerHTML += `${course}, `; 
});

const showNumbLabel = document.getElementsByClassName('showNumbLabel');
const showNums = document.getElementsByClassName('showNums');
showNums[0].style.textAlign = 'justify';
showNums[0].style.lineHeight = '1.5'

if ((courses.length % 2) === 0) {
    showNumbLabel[0].innerHTML = 'Even Numbers between 1 and 200';
    for(i = 1; i <= 200; i++){
        if ((i%2) == 0) {
            showNums[0].innerHTML += `${i}, `;
        }
    }
} else if ((courses.length % 2) !== 0) {
    showNumbLabel[0].innerHTML = 'Odd Numbers between 1 and 200';
    for(i = 1; i <= 200; i++){
        if ((i%2) !== 0) {
            showNums[0].innerHTML += `${i}, `;
        }
    }
}