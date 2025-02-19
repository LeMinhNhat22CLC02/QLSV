const prompt = require("prompt-sync")();
const { addStudent, deleteStudent, updateStudent, searchStudent } = require("./student_manager");

function main() {
    while (true) {
        console.log("\n===== QUẢN LÝ SINH VIÊN =====");
        console.log("1. Thêm sinh viên");
        console.log("2. Xóa sinh viên");
        console.log("3. Cập nhật thông tin sinh viên");
        console.log("4. Tìm kiếm sinh viên");
        console.log("5. Thoát");

        const choice = prompt("Chọn chức năng: ").trim();

        if (choice === "1") {
            addStudent();
        } else if (choice === "2") {
            deleteStudent();
        } else if (choice === "3") {
            updateStudent();
        } else if (choice === "4") {
            searchStudent();
        } else if (choice === "5") {
            console.log("Thoát chương trình!");
            break;
        } else {
            console.log("Lựa chọn không hợp lệ!");
        }
    }
}

main();
