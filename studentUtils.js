


export const DEPARTMENT_NAME = "Computer Science";


export function calculateTotal(...marks) {
    let total = 0;

    for (let mark of marks) {
        total = total + mark;
    }

    return total;
}



export const calculateAverage = (...marks) => {
    if (marks.length === 0) {
        return 0;
    }

    return calculateTotal(...marks) / marks.length;
};


export function getGrade(marks) {
    if (marks >= 80) {
        return "A";
    } else if (marks >= 70) {
        return "B";
    } else if (marks >= 60) {
        return "C";
    } else if (marks >= 50) {
        return "D";
    } else {
        return "F";
    }
}



export const getStatus = (marks) =>
    marks >= 50 ? "Pass" : "Fail";



export default function formatStudentResult(
    name,
    rollNumber,
    total
) {
    return `Student: ${name} | Roll No: ${rollNumber} | Total: ${total}`;
}