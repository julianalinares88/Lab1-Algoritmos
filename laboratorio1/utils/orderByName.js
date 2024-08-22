// Función para ordenar estudiantes alfabéticamente por nombre
export const orderByName = (students) => {
    students.sort((a, b) => {
        if (a.name > b.name) {
            return 1;
        }
        if (a.name < b.name) {
            return -1;
        }
        return 0;
    });
};

// Función para renderizar estudiantes alfabéticamente
export const rendername = ({name}) => {
    //crear el contenedor 
    const container = document.createElement('figure');
    container.classList.add('student-card');

    //crea las etiquetas vacias
    const pname = document.createElement('p');

    //Llena las etiquetas con los datos del estudiante
    pname.textContent = name; 
    //
    container.appendChild(pname);

    return container;
}


