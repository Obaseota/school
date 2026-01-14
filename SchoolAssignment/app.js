// ==================== STEP 1: System Initialization ====================
// This function runs when the program starts
function initializeSystem() {
  // Alert shows a popup message
  alert("Welcome to the Smart Student Management System!");

  // Prompt asks for user input and stores it in a variable
  let schoolName = prompt("Please enter your school name:");

  // Check if user entered something (not null or empty)
  if (schoolName && schoolName.trim() !== "") {
    // Display greeting using template literal (ES6 feature)
    console.log(`🚀 Welcome to ${schoolName}'s Student Management System!`);
  } else {
    // Default name if user doesn't enter anything
    schoolName = "Default School";
    console.log(`🚀 Welcome to ${schoolName}'s Student Management System!`);
  }

  return schoolName;
}

// ==================== STEP 2 & 3: Main Program Structure ====================
// Global array to store all students (accessible from all functions)
let students = [];

// Main menu function - keeps showing until user chooses Exit
function showMenu() {
  let choice;

  // Using do-while loop to show menu at least once
  do {
    // \n creates new lines in the prompt
    choice = prompt(`📋 MAIN MENU\n\nSelect an option:\n
1. Register Student
2. View All Students
3. Search Student
4. Exit`);

    // Switch statement handles different menu choices
    switch (choice) {
      case "1":
        registerStudent();
        break;
      case "2":
        viewStudents();
        break;
      case "3":
        searchStudent();
        break;
      case "4":
        exitProgram();
        break;
      default:
        // Handle invalid input
        if (choice !== null) {
          // null means user clicked Cancel
          alert("❌ Invalid choice! Please enter 1-4.");
        }
    }
  } while (choice !== "4" && choice !== null); // Loop continues until Exit or Cancel
}

// ==================== STEP 3 & 4: Student Registration with Validation ====================
function registerStudent() {
  console.log("=== Registering New Student ===");

  // STEP 3: Get student details
  let name = prompt("Enter student name:");

  // STEP 4: Input Validation
  // Check if name is empty or contains only spaces
  if (!name || name.trim() === "") {
    alert("❌ Student name cannot be empty!");
    return; // Exit function early if invalid
  }

  let age = prompt("Enter student age:");
  // Convert to number and validate
  age = parseInt(age);
  if (isNaN(age) || age <= 0 || age > 100) {
    alert("❌ Invalid age! Please enter a number between 1-100.");
    return;
  }

  let studentClass = prompt("Enter student class:");
  if (!studentClass || studentClass.trim() === "") {
    alert("❌ Class cannot be empty!");
    return;
  }

  let score = prompt("Enter student score (0-100):");
  // Convert to number and validate range
  score = parseFloat(score);
  if (isNaN(score) || score < 0 || score > 100) {
    alert("❌ Invalid score! Please enter a number between 0-100.");
    return;
  }

  // STEP 6: Get grade based on score
  let grade = calculateGrade(score);

  // STEP 7: Determine pass/fail status
  let status = score >= 50 ? "Pass" : "Fail";

  // Create student object
  const student = {
    name: name.trim(), // trim() removes extra spaces
    age: age,
    class: studentClass.trim(),
    score: score,
    grade: grade, // Added from STEP 6
    status: status, // Added from STEP 7
  };

  // Add student to the array
  students.push(student);

  // Confirm registration
  console.log(`✅ Student ${student.name} registered successfully!`);
  alert(
    `✅ Student ${student.name} registered successfully!\nGrade: ${grade}, Status: ${status}`
  );
}

// ==================== STEP 6: Grading System Function ====================
function calculateGrade(score) {
  // Using if-else if chain to determine grade
  if (score >= 70 && score <= 100) {
    return "A";
  } else if (score >= 60 && score < 70) {
    return "B";
  } else if (score >= 50 && score < 60) {
    return "C";
  } else if (score >= 40 && score < 50) {
    return "D";
  } else {
    return "F";
  }

  // Alternative using switch(true) - both work
  /*
    switch(true) {
        case score >= 70: return "A";
        case score >= 60: return "B";
        case score >= 50: return "C";
        case score >= 40: return "D";
        default: return "F";
    }
    */
}

// ==================== STEP 8: View All Students ====================
function viewStudents() {
  console.log("=== All Registered Students ===");

  // Check if array is empty
  if (students.length === 0) {
    console.log("📭 No students registered yet.");
    alert("📭 No students registered yet.");
    return;
  }

  // Loop through all students and display details
  students.forEach((student, index) => {
    console.log(`\n📌 Student ${index + 1}:`);
    console.log(`   Name: ${student.name}`);
    console.log(`   Age: ${student.age}`);
    console.log(`   Class: ${student.class}`);
    console.log(`   Score: ${student.score}`);
    console.log(`   Grade: ${student.grade}`);
    console.log(`   Status: ${student.status}`);
    console.log("   " + "=".repeat(30)); // Visual separator
  });

  // Also show summary in alert
  alert(
    `📊 Total Students: ${students.length}\nCheck console for details (Press F12)`
  );
}

// ==================== STEP 9: Search Student Function ====================
function searchStudent() {
  let searchName = prompt("Enter student name to search:");

  // Validate input
  if (!searchName || searchName.trim() === "") {
    alert("❌ Please enter a name to search!");
    return;
  }

  // Trim search term and convert to lowercase for case-insensitive search
  searchName = searchName.trim().toLowerCase();

  // Find student (case-insensitive)
  const foundStudent = students.find((student) =>
    student.name.toLowerCase().includes(searchName)
  );

  if (foundStudent) {
    console.log("=== Student Found ===");
    console.log(`Name: ${foundStudent.name}`);
    console.log(`Age: ${foundStudent.age}`);
    console.log(`Class: ${foundStudent.class}`);
    console.log(`Score: ${foundStudent.score}`);
    console.log(`Grade: ${foundStudent.grade}`);
    console.log(`Status: ${foundStudent.status}`);

    // Show in alert too
    alert(
      `✅ Student Found!\n\nName: ${foundStudent.name}\nClass: ${foundStudent.class}\nScore: ${foundStudent.score}\nGrade: ${foundStudent.grade}\nStatus: ${foundStudent.status}`
    );
  } else {
    console.log(`🔍 Student "${searchName}" not found.`);
    alert(`❌ Student "${searchName}" not found.`);
  }
}

// ==================== STEP 10: Exit Program ====================
function exitProgram() {
  console.log("=== System Summary ===");
  console.log(`Total students registered: ${students.length}`);
  console.log("Thank you for using the Student Management System!");
  console.log("👋 Goodbye!");

  alert(
    `👋 Thank you for using our system!\n\nTotal students managed: ${students.length}\n\nGoodbye!`
  );
}

// ==================== MAIN PROGRAM EXECUTION ====================
// This is where the program starts running
function main() {
  console.clear(); // Clear console for clean output

  // STEP 1: Initialize
  const schoolName = initializeSystem();

  // STEP 2: Show main menu
  showMenu();
}

// Start the program
main();
