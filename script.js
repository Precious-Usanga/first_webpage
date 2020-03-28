let body = document.querySelector('body');
let selectTrack = document.getElementById('tracks');
let courseList = document.getElementById('courses');
let enter_name = document.getElementById('enter_name');

enter_name.addEventListener('change', function(e) {
    e.preventDefault();
    let show_name = document.getElementById('name');
    show_name.innerHTML = `Your Name is: ${e.target.value}`;
    console.log(show_name.innerHTML);
});
const courses = ['HTML', 'CSS', 'JavaScript', 'NodeJs', 'PHP'];
const tracks = [
    {
        name: 'Front End',
        value: 'frontend',
        courses: ['HTML', 'CSS', 'JavaScript']
    },
    {
        name: 'Back End',
        value: 'backend',
        courses: ['NodeJs', 'PHP', 'Go', 'Python', 'C']
    },
    {
        name: 'Mobile(Android)',
        value: 'mobile',
        courses: ['Java', 'Kotlin', 'Flutter']
    },
    {
        name: 'Design',
        value: 'design',
        courses: ['Figma', 'Adobe XD']
    }
];
let selected;
for(i=0; i<tracks.length; i++){
    let track = tracks[i];
    selectTrack.innerHTML += `<label for="${track.value}"> 
                                <input type="checkbox" name="" id="${track.value}" value="${track.value}" onclick="selectedTrack('${track.value}')"> 
                                ${track.name}
                             </label>`;
};
let courseArray = [];
var alreadySelected = [];
function selectedTrack(id){
    console.log(`selectedTrack is ${id}`);
    selected = document.getElementById(`${id}`);
    let showCourses;
    if(selected.getAttribute('selected') === 'true'){
        console.log(selected.getAttribute('selected'));
        selected.setAttribute('selected', 'false');
        showCourses = false;
        console.log(selected.getAttribute('selected'));
    } else if (selected.getAttribute('selected') === 'false'){
        console.log(selected.getAttribute('selected'));
        selected.setAttribute('selected', 'true');
        showCourses = true;
        console.log(selected.getAttribute('selected'));
    } else if(selected.getAttribute('selected') === null) {
        console.log(selected.getAttribute('selected'));
        selected.setAttribute('selected', 'true');
        showCourses = true;
        console.log(selected.getAttribute('selected'));
    }
    
    if (showCourses === true) {
        console.log(id);
        tracks.forEach(track => {
            if (track.value === id) {
                cList = {track: track.value, course: track.courses};
                // cList = {[track.value]: track.courses};
            }
        });
        console.log(cList);
        courseArray.push(cList);
        console.log(courseArray);
        if (alreadySelected.length === 0) {
            courseArray.forEach(course => {
                course.course.forEach(c => {
                    courseList.innerHTML += `<label for="${c.toLowerCase()}" class="${c.toLowerCase()}"> 
                                                <input type="checkbox" name="" id="${c.toLowerCase()}" value="${c.toLowerCase()}"> 
                                                ${c}
                                            </label>`;
                                            // console.log(courseList.innerHTML);
                });
                alreadySelected.push(course.track);
                console.log(alreadySelected);
            });
        } else if (alreadySelected.length > 0) {
            courseArray.forEach(course => {
                if (course.track === id) {
                    console.log(`clicked on ${id}.please set to true`);
                    let exist = alreadySelected.includes(course.track);
                    if (exist == false){
                        console.log(`${course.track} doesn't exist`);
                            course.course.forEach(c => {
                                courseList.innerHTML += `<label for="${c.toLowerCase()}" class="${c.toLowerCase()}"> 
                                                            <input type="checkbox" name="" id="${c.toLowerCase()}" value="${c.toLowerCase()}"> 
                                                            ${c}
                                                        </label>`;
                                                        // console.log(courseList.innerHTML);
                            });
                            alreadySelected.push(course.track);
                            // console.log(alreadySelected);
                    } else {
                        console.log(`${course.track} already exist`);
                    }
                } else if (course.track !== id) {
                    console.log(`did not click on ${course.track}. exempt`);
                }
            });
        }
    } else {
        console.log(`remove ${id} from view`);
        let ia = alreadySelected.indexOf(id);
        alreadySelected.splice(ia, 1);
        console.log(alreadySelected);
        
        courseArray.forEach((course, index) => {
            if(course.track === id) {
                course.course.forEach(c => {
                    console.log(c)
                    let label = document.querySelector(`.${c.toLowerCase()}`);
                    console.log(label);
                    label.remove();
                });
                courseArray.splice(index, 1);
                console.log(courseArray);
            }
        });
    }
}

// courses.forEach(course => {
//     console.log(course);
//     let li = document.createElement('li');
//     li.innerHTML = course;
//     ul.appendChild(li);
// });

for(i=0; i<= 200; i++) {
    // console.log(courses.length % 2);
    if (courses.length % 2 === 0) {
        if (i%2 === 0) {
            // console.log(i);
        } 
    } else if (courses.length % 2 !== 0) {
        if (i%2 !== 0) {
            // console.log(i)
        }
    }
}
