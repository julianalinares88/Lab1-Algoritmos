export const highgrade = (students) => {
    //La función devolverá el resultado de las operaciones que se aplican a este arreglo
    return students

    .filter(student => student.grade > 80) // Filtrar estudiantes con calificación mayor a 80
    .sort((a, b) => b.grade - a.grade); // Los ordena de mayor a menor
};

// Función para renderizar estudiantes con calificación mayor a 80
export const renderhighgrade = ({ name, grade }) => {

    const container = document.createElement('figure');
    container.classList.add('student-card');

    const p = document.createElement('p');

    // Establecer el contenido del p con nombre y nota
    p.textContent = `${name}: ${grade}`; 

    container.appendChild(p);

    return container;
}