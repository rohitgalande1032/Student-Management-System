let arr = [];
let url = "https://gist.githubusercontent.com/harsh3195/b441881e0020817b84e34d27ba448418/raw/c4fde6f42310987a54ae1bc3d9b8bfbafac15617/demo-json-data.json";

fetch(url)
    .then(response => response.json())
    .then(data => {
        arr = data;
        console.log("Fetched Array : ", data);
        renderTable(); //render table when data fetched successfully
    }).catch(error => {
        console.log("Error Fetching Data : ", error);
    })

let table = document.getElementById("table");
let searchInput = document.getElementById("search");


//Function to render table
function renderTable() {
    
        table.innerHTML +=
        `
        <table class="container" border="1" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        ${arr.map(item => `
            <tr>
                <td>${item.id}</td>
                <td class="table-image">
                    <img src="${item.img_src}" alt="" />
                    <span>${item.first_name} ${item.last_name}</span>
                </td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing ? "passing" : "failed"}</td>
                <td>${item.email}</td>
            </tr>
            `
        ).join("")}
        </tbody>
    </table>
        `
}

//Search Functionality
function search() {
    let searchValue = searchInput.value.toLowerCase();
    console.log(searchValue);
    arr = arr.filter(item => 
        item.first_name.toLowerCase().includes(searchValue) ||
        item.last_name.toLowerCase().includes(searchValue) ||
        item.email.toLowerCase().includes(searchValue)
    );

    console.log("Filtered Array by searchValue: ", arr);
    arr.map(item => {
        table.innerHTML = ""
        renderTable()
    })
}


//Sort by full Name in ascending order
function filterAtoZ() {
    arr.sort((a, b) => a.first_name.localeCompare(b.first_name));
    table.innerHTML = '';
    renderTable();
}

//Sort by full Name in descending order
function filterZtoA() {
    arr.sort((a, b) => b.first_name.localeCompare(a.first_name));
    table.innerHTML = '';
    renderTable();
}

//Sort by marks in ascending order
function sortByMarks() {
    arr.sort((a, b) => a.marks - b.marks);
    table.innerHTML = '';
    renderTable();
}

//Sort by class in ascending order
function sortByClass() {
    arr.sort((a, b) => a.class - b.class);
    table.innerHTML = '';
    renderTable();
}

//Show only passing students
function sortByPassing(){
    arr = arr.filter((item)=> item.passing);

    arr.map((item) => {
        table.innerHTML = '';
        renderTable();
    })
}

//Sort By Gender and Make two saperate table for Male and Female
function sortByGender() {
    let maleTable = arr.filter(item => item.gender === "Male");
    let femaleTable = arr.filter(item => item.gender === "Female");

    table.innerHTML = "";
    table.innerHTML +=
        `
        <table class="container" border="1" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        ${maleTable.map(item => `
            <tr>
                <td>${item.id}</td>
                <td class="table-image">
                    <img src="${item.img_src}" alt="" />
                    <span>${item.first_name} ${item.last_name}</span>
                </td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing ? "passing" : "failed"}</td>
                <td>${item.email}</td>
            </tr>
            `
        ).join("")}
        </tbody>
    </table>
        `

    table.innerHTML +=
        `
        <table class="container" border="1" >
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
                <th>Class</th>
                <th>Marks</th>
                <th>Passing</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
        ${femaleTable.map(item => `
            <tr>
                <td>${item.id}</td>
                <td class="table-image">
                    <img src="${item.img_src}" alt="" />
                    <span>${item.first_name} ${item.last_name}</span>
                </td>
                <td>${item.gender}</td>
                <td>${item.class}</td>
                <td>${item.marks}</td>
                <td>${item.passing ? "passing" : "failed"}</td>
                <td>${item.email}</td>
            </tr>
            `
        ).join("")}
        </tbody>
    </table>
        `

}



document.getElementById("atoz").addEventListener("click", filterAtoZ);
document.getElementById("ztoa").addEventListener("click", filterZtoA);
document.getElementById("byMarks").addEventListener("click", sortByMarks);
document.getElementById("byClass").addEventListener("click", sortByClass);
document.getElementById("byPassing").addEventListener("click", sortByPassing);
document.getElementById("byGender").addEventListener("click", sortByGender);
document.getElementById("searchBtn").addEventListener("click", search)

renderTable()


