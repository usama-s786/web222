var users = [
{first_name: "Kaitlin", last_name: "Burns",
age: 23, email: "kburns99753@usermail.com"},
{first_name: "Joshua", last_name: "Feir",
age: 31, email: "josh319726@usermail.com"},
];

function addlogo(){
    var a_logo=document.querySelector("#logo");
    var logo = document.createElement("img");
    logo.src='./images/logo.gif';
    logo.height=60;
    logo.width=165;
    a_logo.appendChild(logo);
}

function addtable(){
    var a_table=document.querySelector("#table");
   let headers = ['First Name', 'Last Name', 'Age', 'Email'];
    let table = document.createElement('table');
    let headerRow = document.createElement('tr');
    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
        header.style.border="1px solid";
    });

    table.appendChild(headerRow);

    users.forEach(usr => {
        let row = document.createElement('tr');
        Object.values(usr).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
            cell.style.border="1px solid";
        })
        table.appendChild(row);
    });
    table.style.border="1px solid";
    a_table.appendChild(table);
}

function congrats(){
    var greet=document.querySelector("#con");
    greet.style.color='red';
    greet.style.fontWeight='bold';
    greet.innerHTML= "Congrats!";

}