let arr= [{"id":1,"first_name":"Chadwick","last_name":"Ayre","email":"cayre0@cam.ac.uk","gender":"Male","img_src":"https://robohash.org/corporisquiaperiam.png?size=50x50&set=set1","class":11,"marks":18,"passing":false,"city":"Moorreesburg"},
    {"id":2,"first_name":"Abrahan","last_name":"Seabrocke","email":"aseabrocke1@ocn.ne.jp","gender":"Male","img_src":"https://robohash.org/autiuredistinctio.png?size=50x50&set=set1","class":3,"marks":27,"passing":true,"city":"Kampong Thom"},
    {"id":3,"first_name":"Nathanael","last_name":"Laye","email":"nlaye2@typepad.com","gender":"Male","img_src":"https://robohash.org/dolorumsedut.png?size=50x50&set=set1","class":10,"marks":89,"passing":false,"city":"Niquinohomo"},
    {"id":4,"first_name":"Luigi","last_name":"Balcers","email":"lbalcers3@reverbnation.com","gender":"Agender","img_src":"https://robohash.org/eumaliquamest.png?size=50x50&set=set1","class":8,"marks":30,"passing":false,"city":"Nashtā Rūd"},
    {"id":5,"first_name":"Adam","last_name":"Gurg","email":"agurg4@xrea.com","gender":"Male","img_src":"https://robohash.org/nemolaborumquis.png?size=50x50&set=set1","class":3,"marks":10,"passing":true,"city":"Sandviken"},
    {"id":6,"first_name":"Kev","last_name":"Haitlie","email":"khaitlie5@booking.com","gender":"Male","img_src":"https://robohash.org/nonestnon.png?size=50x50&set=set1","class":1,"marks":59,"passing":true,"city":"Bridgewater"},
    {"id":7,"first_name":"Reinhard","last_name":"Royl","email":"rroyl6@sun.com","gender":"Male","img_src":"https://robohash.org/nobisvelquasi.png?size=50x50&set=set1","class":4,"marks":60,"passing":true,"city":"Padangulaktanding"},
    {"id":8,"first_name":"Nonah","last_name":"Kilmartin","email":"nkilmartin7@washington.edu","gender":"Female","img_src":"https://robohash.org/eosquodoloremque.png?size=50x50&set=set1","class":9,"marks":4,"passing":false,"city":"Petropavlovsk"},
    {"id":9,"first_name":"Clo","last_name":"Falkinder","email":"cfalkinder8@mysql.com","gender":"Female","img_src":"https://robohash.org/velitinaccusantium.png?size=50x50&set=set1","class":6,"marks":9,"passing":false,"city":"Novyy Oskol"},
    {"id":10,"first_name":"Clyve","last_name":"Dedney","email":"cdedney9@europa.eu","gender":"Male","img_src":"https://robohash.org/debitisevenietnon.png?size=50x50&set=set1","class":12,"marks":57,"passing":false,"city":"Jagna"},
    {"id":11,"first_name":"Vincenz","last_name":"Surphliss","email":"vsurphlissa@soup.io","gender":"Male","img_src":"https://robohash.org/accusantiumnecessitatibusesse.png?size=50x50&set=set1","class":4,"marks":2,"passing":true,"city":"Jingmao"},
    {"id":12,"first_name":"Helene","last_name":"Griffitts","email":"hgriffittsb@umn.edu","gender":"Female","img_src":"https://robohash.org/etcumquequi.png?size=50x50&set=set1","class":12,"marks":80,"passing":true,"city":"Fais"},
    {"id":13,"first_name":"Lydia","last_name":"Pamphilon","email":"lpamphilonc@mit.edu","gender":"Female","img_src":"https://robohash.org/ametvoluptatemautem.png?size=50x50&set=set1","class":5,"marks":81,"passing":false,"city":"North York"},
    {"id":14,"first_name":"Dov","last_name":"Cubbini","email":"dcubbinid@theguardian.com","gender":"Genderqueer","img_src":"https://robohash.org/quisteneturveritatis.png?size=50x50&set=set1","class":12,"marks":25,"passing":true,"city":"Keetmanshoop"},
    {"id":15,"first_name":"Mimi","last_name":"Monksfield","email":"mmonksfielde@mapquest.com","gender":"Female","img_src":"https://robohash.org/voluptatibusexplicabout.png?size=50x50&set=set1","class":4,"marks":52,"passing":true,"city":"Placer"},
    {"id":16,"first_name":"Marguerite","last_name":"Evanson","email":"mevansonf@huffingtonpost.com","gender":"Female","img_src":"https://robohash.org/voluptatesaliquamodit.png?size=50x50&set=set1","class":10,"marks":96,"passing":true,"city":"La Guacamaya"},
    {"id":17,"first_name":"Michele","last_name":"Haresnaip","email":"mharesnaipg@networkadvertising.org","gender":"Male","img_src":"https://robohash.org/quisquamaperiamvel.png?size=50x50&set=set1","class":9,"marks":46,"passing":true,"city":"Tilamuta"},
    {"id":18,"first_name":"Johnna","last_name":"Briars","email":"jbriarsh@behance.net","gender":"Agender","img_src":"https://robohash.org/maximecorruptiaspernatur.png?size=50x50&set=set1","class":9,"marks":77,"passing":false,"city":"Cocobeach"},
    {"id":19,"first_name":"Debee","last_name":"Bonnier","email":"dbonnieri@opensource.org","gender":"Female","img_src":"https://robohash.org/errordoloreaut.png?size=50x50&set=set1","class":2,"marks":35,"passing":false,"city":"Carolina"},
    {"id":20,"first_name":"Gunther","last_name":"Taveriner","email":"gtaverinerj@google.ca","gender":"Male","img_src":"https://robohash.org/mollitiautrerum.png?size=50x50&set=set1","class":1,"marks":72,"passing":true,"city":"Knoxville"},
    {"id":21,"first_name":"Dominick","last_name":"Coppock.","email":"dcoppockk@mlb.com","gender":"Genderqueer","img_src":"https://robohash.org/ullaminciduntaut.png?size=50x50&set=set1","class":9,"marks":10,"passing":false,"city":"Magrath"}
]

let table = document.getElementById("table");

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

//Sort by full Name in ascending order
function filterAtoZ() {
    arr.sort((a, b) => a.first_name.localeCompare(b.first_name));
    arr.sort((a, b) => a.last_name.localeCompare(b.last_name));
    table.innerHTML = '';
    renderTable();
}

//Sort by full Name in descending order
function filterZtoA() {
    arr.sort((a, b) => b.first_name.localeCompare(a.first_name));
    arr.sort((a, b) => b.last_name.localeCompare(a.last_name));
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
document.getElementById("byGender").addEventListener("click", sortByGender)
renderTable()


