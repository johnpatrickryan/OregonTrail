document.onkeypress = function(e) {
    if(e.keyCode == 32){
        window.location.href = "http://148.100.5.112:1337/mainmenu"
    }
} 


var topTen = [
    ['John Ryan', 1050, '2/24/10'],
    ['John Eletto', 650, '4/13/16'],
    ['Andrew Arrigo' , 6900, '10/16/17'],
    ['Drew Decarlos', 100, '4/4/17'],
    ['Jon Newfield', 150, '6/14/13'],
    ['Ethan Wilde', 1200, '10/12/14'],
    ['Michael Traina', 900, '2/2/10'],
    ['Bruce Hayes', 1100, '1/12/00'],
    ['Vincent Mangano', 1400, '8/6/09'],
    ['Shaun Michaels', 50, '4/9/16'],
    ['Mike Williams', 1450, '9/8/13'],
    ['Robert Johnson', 0, '3/3/12']
    
]

topTen.sort(function(a, b){
    var x = a[1];
    var y = b[1];
    return y - x;
});

var topTenTable = document.getElementById('topTenTable');
var table = document.createElement('table');
var tbody = document.createElement('tbody');

for (i = 0; i < 10; i++){
    var vals = topTen[i];
    var row = document.createElement('tr');
    var cell = document.createElement('td');
    cell.textContent = i + 1;
    row.appendChild(cell);
    for (var b = 0; b < vals.length; b++){
        var cell = document.createElement('td');
        cell.textContent = vals[b];
        row.appendChild(cell);
    }
    tbody.appendChild(row);
}
table.appendChild(tbody);
topTenTable.appendChild(table);



document.getElementById("blinkText").onclick = function() {
    window.location.href = "http://148.100.5.112:1337/mainmenu";
}
