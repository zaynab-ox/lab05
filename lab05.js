
import formatStudentResult from "./studentUtils.js";

import {
    DEPARTMENT_NAME,
    calculateTotal,
    calculateAverage as findAverage,
    getGrade,
    getStatus
} from "./studentUtils.js";


// TASK 1

const coreCourses = [
    "Web Development",
    "Database Systems",
    "Data Structures"
];

const electiveCourses = [
    "Artificial Intelligence",
    "Computer Networks",
    "Cloud Computing"
];

const student = {
    name: "Ali",
    rollNumber: "BSCS-001",
    department: "Computer Science",
    semester: 6
};

const cgpas = [3.20, 3.45, 2.90, 3.75, 3.10];

const allCourses = [...coreCourses, ...electiveCourses];

const copiedCourses = [...allCourses, "Software Engineering"];

const updatedStudent = {
    ...student,
    semester: 7,
    cgpa: 3.45
};

function enrollStudent(name, ...courses) {
    return `${name} enrolled in ${courses.length} course(s): ${courses.join(", ")}`;
}

const calculateAverageCGPA = (...values) => {
    let total = 0;

    for (let value of values) {
        total += value;
    }

    return total / values.length;
};

const highestCGPA = Math.max(...cgpas);

function getStudentInfo(
    name,
    department = "Computer Science"
) {
    return `${name} belongs to ${department}.`;
}

document.getElementById("task1Output").innerHTML = `
    <div class="card">
        <h3>Course Information</h3>

        <p><b>Core Courses:</b> ${coreCourses.join(", ")}</p>

        <p><b>Elective Courses:</b> ${electiveCourses.join(", ")}</p>

        <p><b>All Courses (${allCourses.length}):</b>
        ${allCourses.join(", ")}</p>

        <p><b>Copied Array (${copiedCourses.length}):</b>
        ${copiedCourses.join(", ")}</p>

        <p class="success">
            Original array still has ${allCourses.length} courses.
        </p>
    </div>

    <div class="card">
        <h3>Student Information</h3>

        <p>Original Student: ${student.name},
        Semester ${student.semester}</p>

        <p>Updated Student: ${updatedStudent.name},
        Semester ${updatedStudent.semester},
        CGPA ${updatedStudent.cgpa}</p>

        <p>${enrollStudent(
            "Ali",
            "Web Development",
            "Database Systems",
            "Artificial Intelligence"
        )}</p>

        <p>Average CGPA: ${calculateAverageCGPA(...cgpas).toFixed(2)}</p>

        <p>Highest CGPA: ${highestCGPA.toFixed(2)}</p>

        <p>${getStudentInfo("Ali")}</p>
    </div>
`;


// TASK 2

const students = [
    {
        name: "Ali",
        rollNumber: "BSCS-001",
        assignment: 25,
        midterm: 27,
        finalExam: 30
    },
    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        assignment: 20,
        midterm: 22,
        finalExam: 25
    },
    {
        name: "Sara",
        rollNumber: "BSCS-023",
        assignment: 28,
        midterm: 26,
        finalExam: 28
    },
    {
        name: "Ayesha",
        rollNumber: "BSCS-014",
        assignment: 15,
        midterm: 16,
        finalExam: 17
    }
];

let task2HTML = `
    <div class="card">
        <h3>Department: ${DEPARTMENT_NAME}</h3>
    </div>
`;

students.forEach((student) => {

    const {
        name,
        rollNumber,
        assignment,
        midterm,
        finalExam
    } = student;

    const total = calculateTotal(
        assignment,
        midterm,
        finalExam
    );

    const average = findAverage(
        assignment,
        midterm,
        finalExam
    );

    const grade = getGrade(total);
    const status = getStatus(total);

    task2HTML += `
        <div class="card">
            <h3>${name}</h3>

            <p>Roll Number: ${rollNumber}</p>
            <p>Total Marks: ${total}</p>
            <p>Average: ${average.toFixed(2)}</p>
            <p>Grade: ${grade}</p>
            <p>Status: ${status}</p>

            <p>${formatStudentResult(
                name,
                rollNumber,
                total
            )}</p>
        </div>
    `;
});

document.getElementById("task2Output").innerHTML = task2HTML;


// TASK 3

function verifyStudent(roll, callback) {

    setTimeout(() => {

        if (!roll.trim()) {
            callback("Roll number is required", null);
        } else {
            callback(null, `Student ${roll} verified`);
        }

    }, 1000);
}

function loadExamPaper(callback) {

    setTimeout(() => {
        callback("Exam paper loaded");
    }, 1500);
}

function submitAnswers(callback) {

    setTimeout(() => {
        callback("Answers submitted");
    }, 2000);
}

function generateResult(callback) {

    setTimeout(() => {
        callback("Result generated: 82 marks");
    }, 1000);
}

document.getElementById("startExam").addEventListener("click", () => {

    const roll = document.getElementById("examRoll").value;

    const output = document.getElementById("task3Output");

    output.innerHTML = "<p>Exam workflow started...</p>";

    verifyStudent(roll, (error, message) => {

        if (error) {
            output.innerHTML += `<p class="error">Error: ${error}</p>`;
            return;
        }

        output.innerHTML += `<p>Step 1: ${message}</p>`;

        loadExamPaper((message) => {

            output.innerHTML += `<p>Step 2: ${message}</p>`;

            submitAnswers((message) => {

                output.innerHTML += `<p>Step 3: ${message}</p>`;

                generateResult((message) => {

                    output.innerHTML += `
                        <p>Step 4: ${message}</p>
                        <p class="success">
                            Exam completed successfully!
                        </p>
                    `;

                });

            });

        });

    });

});


// TASK 4

const resultStudents = [
    {
        name: "Ali",
        rollNumber: "BSCS-001",
        department: "Computer Science",
        semester: 6,
        assignment: 25,
        midterm: 27,
        finalExam: 30
    },
    {
        name: "Ahmed",
        rollNumber: "BSCS-002",
        department: "Computer Science",
        semester: 5,
        assignment: 20,
        midterm: 22,
        finalExam: 25
    },
    {
        name: "Sara",
        rollNumber: "BSCS-023",
        department: "Computer Science",
        semester: 6,
        assignment: 28,
        midterm: 26,
        finalExam: 28
    },
    {
        name: "Ayesha",
        rollNumber: "BSCS-014",
        department: "Computer Science",
        semester: 4,
        assignment: 15,
        midterm: 16,
        finalExam: 17
    },
    {
        name: "Hassan",
        rollNumber: "BSCS-031",
        department: "Computer Science",
        semester: 6,
        assignment: 24,
        midterm: 25,
        finalExam: 23
    }
];

function findStudent(rollNumber) {

    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const student = resultStudents.find(
                (student) => student.rollNumber === rollNumber.trim()
            );

            if (student) {
                resolve(student);
            } else {
                reject("Student not found");
            }

        }, 1000);

    });

}

function calculateResult(student) {

    return new Promise((resolve) => {

        setTimeout(() => {

            const {
                assignment,
                midterm,
                finalExam
            } = student;

            const total = calculateTotal(
                assignment,
                midterm,
                finalExam
            );

            const average = findAverage(
                assignment,
                midterm,
                finalExam
            );

            const grade = getGrade(total);
            const status = getStatus(total);

            resolve({
                total,
                average,
                grade,
                status
            });

        }, 1000);

    });

}

function createResultCard(student, result) {

    return `
        <div class="card">
            <h3>${student.name}</h3>

            <p>Roll Number: ${student.rollNumber}</p>
            <p>Department: ${student.department}</p>
            <p>Semester: ${student.semester}</p>
            <p>Total: ${result.total}</p>
            <p>Average: ${result.average.toFixed(2)}</p>
            <p>Grade: ${result.grade}</p>
            <p>Status: ${result.status}</p>
        </div>
    `;
}

document.getElementById("promiseButton").addEventListener("click", () => {

    const output = document.getElementById("promiseOutput");

    output.innerHTML = "<p>Searching...</p>";

    findStudent("BSCS-001")
        .then((student) => {
            return calculateResult(student).then((result) => {
                output.innerHTML += createResultCard(student, result);
            });
        })
        .catch((error) => {
            output.innerHTML += `<p class="error">Error: ${error}</p>`;
        })
        .finally(() => {
            output.innerHTML += "<p>Search completed.</p>";
        });

});

async function showResult(rollNumber) {

    const output = document.getElementById("searchOutput");

    output.innerHTML = "<p>Searching...</p>";

    try {

        const student = await findStudent(rollNumber);

        const result = await calculateResult(student);

        output.innerHTML = createResultCard(student, result);

    } catch (error) {

        output.innerHTML = `
            <p class="error">Error: ${error}</p>
        `;

    } finally {

        output.innerHTML += "<p>Search completed.</p>";

    }

}

document.getElementById("searchButton").addEventListener("click", () => {

    const rollNumber = document.getElementById("searchRoll").value;

    showResult(rollNumber);

});

async function loadAllResults() {

    const output = document.getElementById("allResultsOutput");
    const stats = document.getElementById("statisticsOutput");

    output.innerHTML = "<p>Loading all results...</p>";
    stats.innerHTML = "";

    try {

        const allResults = await Promise.all(
            resultStudents.map(async (student) => {

                const result = await calculateResult(student);

                return {
                    student,
                    result
                };

            })
        );

        output.innerHTML = "";

        let passed = 0;
        let failed = 0;

        allResults.forEach(({ student, result }) => {

            output.innerHTML += createResultCard(student, result);

            if (result.status === "Pass") {
                passed++;
            } else {
                failed++;
            }

        });

        stats.innerHTML = `
            <h3>Final Statistics</h3>
            <p>Total Students: ${allResults.length}</p>
            <p>Passed Students: ${passed}</p>
            <p>Failed Students: ${failed}</p>
        `;

    } catch (error) {

        output.innerHTML = `
            <p class="error">Error: ${error}</p>
        `;

    }

}

document.getElementById("loadAllButton").addEventListener("click", () => {
    loadAllResults();
});

