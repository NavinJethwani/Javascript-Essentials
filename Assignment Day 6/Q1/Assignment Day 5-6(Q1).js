employeedata = [
    {
        name:"Ashwin",
        age:35,
        city:"Baroda",
        salary:54300
    },
    {
        name:"Dinesh",
        age:42,
        city:"Kanpur",
        salary:74922
    },
    {
        name:"Dhruv",
        age:47,
        city:"Ahmedabad",
        salary:62400
    },
    {
        name:"Amit",
        age:32,
        city:"Mumbai",
        salary:84632
    },
    {
        name:"Navin",
        age:29,
        city:"Banglore",
        salary:94258
    },
];

function display(employeedata) {
    let tabledata = "";

    employeedata.forEach(function (employee, index) {
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${employee.name}</td>
        <td>${employee.age}</td>
        <td>${employee.city}</td>
        <td>${employee.salary}</td>
        <td>
        <button onclick='deleteEmployee(${index})'>Delete</button>
        
        </td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    // document.getElementById("tdata").innerHTML = tabledata;
}

display(employeedata);

function deleteEmployee(index) {
    employeedata.splice(index, 1);
    display(employeedata);
} 

function addEmployee(event) {
    event.preventDefault();
    let employee = {};

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;

    employee.name = name;
    employee.age = Number(age);
    employee.city = city;
    employee.salary = salary;

    employeedata.push(employee);
    display(employeedata);

    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
}

function searchByName() {
    let searchValue = document.getElementById("searchName").value;

    let newdata = employeedata.filter(function (employee) {
        return (
            employee.name.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
        );
    });

    display(newdata);
}

function searchByCity() {
    let searchValue = document.getElementById("searchCity").value;

    let newdata = employeedata.filter(function (employee) {
        return (
            employee.city.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
        );
    });

    display(newdata);
}

