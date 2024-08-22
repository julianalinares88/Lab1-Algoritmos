export const organizedCourse = (students) => {
    const organized = [];

    students.forEach(student => {
        const { course } = student;

        // Inicializa el array si no existe y luego agrega el estudiante
        organized[course] = organized[course] || [];
        organized[course].push(student);
    });

    return organized;
};

export const renderCourse = (student) => {

    const container = document.createElement('figure');
    container.classList.add('studentcourse-card');

    const h3name = document.createElement('h3');
    const pid = document.createElement('p');
    const page = document.createElement('p');
    const pgrade = document.createElement('p');
    const pcourse = document.createElement('p');

    h3name.textContent = student.name; 
    pid.textContent = `ID: ${student.id}`; 
    page.textContent = `Age: ${student.age}`; 
    pgrade.textContent = `Grade: ${student.grade}`; 
    pcourse.textContent = `Course: ${student.course}`; 

    container.appendChild(h3name);
    container.appendChild(pid);
    container.appendChild(page);
    container.appendChild(pgrade);
    container.appendChild(pcourse);

    return container;
}

