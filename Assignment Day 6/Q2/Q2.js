BusAvailable = [
    {
        name:"Bus1065",
        number:17294,
        source:"Baroda",
        destination:"Chennai",
        passengercapacity:58
    },
    {
        name:"Bus1037",
        number:17381,
        source:"Ahmedabad",
        destination:"Delhi",
        passengercapacity:45
    },
    {
        name:"Bus1095",
        number:17230,
        source:"Mumbai",
        destination:"Gandhinagar",
        passengercapacity:38
    },
    {
        name:"Bus1094",
        number:17198,
        source:"Goa",
        destination:"Abu",
        passengercapacity:28
    },
    {
        name:"Bus1049",
        number:17296,
        source:"Indore",
        destination:"pune",
        passengercapacity:74
    }
];


function display(BusAvailable) {
    let tabledata = "";

    BusAvailable.forEach(function (Currentbus, index) {
        let currentrow = `<tr>
        <td>${index + 1}</td>
        <td>${Currentbus.name}</td>
        <td>${Currentbus.number}</td>
        <td>${Currentbus.source}</td>
        <td>${Currentbus.destination}</td>
        <td>${Currentbus.passengercapacity}</td>
        </tr>`;

        tabledata += currentrow;
    });

    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    // document.getElementById("tdata").innerHTML = tabledata;
}

display(BusAvailable);

function addbus(event) {
    event.preventDefault();
    let newbus = {};

    let name = document.getElementById("name").value;
    let number = document.getElementById("number").value;
    let source = document.getElementById("source").value;
    let destination = document.getElementById("destination").value;
    let passengercapacity = document.getElementById("passengercapacity").value;

    newbus.name = name;
    newbus.number = Number(number);
    newbus.source = source;
    newbus.destination = destination;
    newbus.passengercapacity = passengercapacity;

    BusAvailable.push(newbus);
    display(BusAvailable);

    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("source").value = "";
    document.getElementById("destination").value = "";
    document.getElementById("passengercapacity").value = "";
}

function searchBySource() {
    let searchValue = document.getElementById("searchSource").value;

    let newdata = BusAvailable.filter(function (bus) {
        return (
            bus.source.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
        );
    });

    display(newdata);
}
function searchByDestination() {
    let searchValue = document.getElementById("searchDestination").value;

    let newdata = BusAvailable.filter(function (bus) {
        return (
            bus.destination.toLowerCase().indexOf(searchValue.toLowerCase()) != -1
        );
    });

    display(newdata);
}