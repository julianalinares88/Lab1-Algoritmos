export const calcularMedia = (students) => {

    let sumaNotas = 0; // Inicializa la suma de notas

    for (const nota of students) { // se suma la nota de cada NOTA a SUMANOTAS. Esto acumula todas las notas en una sola variable.
        sumaNotas += nota.grade; // Suma cada nota
        
    }

    return sumaNotas / students.length; // Retorna la media

};

export const renderMedia = (media) => {
    const container = document.createElement('figure');
    container.classList.add('student-card'); 

    const h2 = document.createElement('h2');

    h2.textContent = `Grade point average: ${media}`;

    container.appendChild(h2);

    return container;
}