import students from './data/students.js';
import { rendername, orderByName } from './utils/orderByName.js';
import { highgrade, renderhighgrade } from './utils/filterHighGrade.js';
import { calcularMedia, renderMedia } from './utils/calculateMeanGrade.js';
import { organizedCourse, renderCourse } from './utils/organizeByCourse.js';



const containername = document.querySelector('.card-name');

// Llamar a la función para ordenar alfabeticamente
orderByName(students);

students.forEach((student) => {
	//Crear el estudiante
	const studentfigure = rendername(student);

	//Agregar el personaje a la section cards
	containername.appendChild(studentfigure);
});


//Renderizar los estudiantes con calificaciones mayores a 80
const containerhighgrade = document.querySelector('.card-highgrade');

// Filtra los estudiantes con calificación mayor a 80
const highGradeStudents = highgrade(students);

// Renderizar solo los estudiantes filtrados
highGradeStudents.forEach((student) => {
    const studentFigure = renderhighgrade(student);
    containerhighgrade.appendChild(studentFigure);
});


//Renderizar la media de los estudiantes
const conatainermeangrade = document.querySelector('.card-meangrade');

conatainermeangrade.appendChild(renderMedia(calcularMedia(students)));



//Renderizar los estudiantes organizados por curso

const organizedStudents = organizedCourse(students);

// Selecciona un contenedor en el DOM donde se agregarán los estudiantes
const containerAllCourses = document.querySelector('.cards-course'); 

// Renderizar los estudiantes organizados por curso
for (const course in organizedStudents) {
    const courseContainer = document.createElement('div'); // Crea un contenedor para cada curso
    courseContainer.classList.add('course-container');
    
    const courseTitle = document.createElement('h1');
    courseTitle.textContent = `Course: ${course}`; // Título del curso
    courseContainer.appendChild(courseTitle);

    organizedStudents[course].forEach(student => {
        const studentCard = renderCourse(student); // Renderiza cada estudiante
        courseContainer.appendChild(studentCard); // Agrega la tarjeta al contenedor del curso
    });

    containerAllCourses.appendChild(courseContainer); // Agrega el contenedor del curso al contenedor principal
}

