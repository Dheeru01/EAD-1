const password = "#Abcd@123";
const roll_no = 160122737108;
const student_name ="Dheeraj";

const roll_input = document.getElementById("roll_no");
const password_input = document.getElementById("password");
const student_name_input = document.getElementById("student_name");

const getVerified = () => {
    if (roll_input.value == roll_no && password_input.value == password && student_name_input.value == student_name) {
        alert("Welcome to the page");
    } 
    else if (student_name_input.value != student_name) {
        alert("Invalid Student Name");
    }
    else if (password_input.value!= password) {
        alert("Invalid Password");
    }
    else if (roll_input.value != roll_no) {
        alert("Invalid Roll No");
    }
    else {
        alert("Invalid Credentials");
    }
};