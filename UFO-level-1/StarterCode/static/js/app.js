// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the sightings data from data.js
console.log(data);

// // clear the rows in case the script had been run previously
// d3.selectAll("tr").remove();

//script to update the tables with data
data.forEach((sightingData) => {
    let row = tbody.append("tr");
    Object.entries(sightingData).forEach(([key,value]) => {
        let cell = row.append("td");
        cell.text(value);
    });
});

//select the button
var button = d3.select("#filter-btn")

//set up listener to do some actions on click.  The listener will do the following:
button.on("click", function() {
    // prevent the page from loading and select the field that is prepared to intake a date/time value.
    d3.event.preventDefault();
    var inputElement = d3.select("#datetime");

    var inputValue = inputElement.property("value");

    //print out the values
    console.log(inputValue);
    console.log(tableData);

    //create a variable called filteredData that will hold filtered values.  The filter will take the value that is inputted into the form and match on values in the table. 
    var filteredData = tableData.filter(entry => entry.datetime === inputValue);

    //print out the values
    console.log(filteredData);

    //clear out the current values
    tbody.html("");

    // append filtered data to html
    filteredData.forEach((sightingData) => {
        var row = tbody.append('tr');
        Object.entries(sightingData).forEach(([key,value]) => {
            var cell = row.append('td');
            cell.text(value);
        });    
    });
});