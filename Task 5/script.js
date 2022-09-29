const data = [
    {
        name: "RAJAT",
        regno: "3581",
        OOPS: "58",
        DBMS: "76",
        TOC: "32"
    },
    {
        name: "TANYA",
        regno: "3582",
        OOPS: "45",
        DBMS: "74",
        TOC: "67"
    },
    {
        name: "NEHAL",
        regno: "3583",
        OOPS: "78",
        DBMS: "89",
        TOC: "65"
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function () {
    const name = document.getElementById('name-box').value;
    for (let i = 0; i < data.length; i++) {
        if (data[i].name.toLowerCase() == name.toLowerCase()) {
            console.log(data[i].marks)
            results.innerHTML = "<h3>" + "OOPS : " + data[i].OOPS + "</h3>" + "<h3>" + "DBMS : "
                + data[i].DBMS + "</h3>" + "<h3>" + "TOC: " + data[i].TOC + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h1>" + "Not available" + "</h1>"
})