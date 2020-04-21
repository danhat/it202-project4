/*
 * Danielle Hatten
 * April 2020
 * Tracking COVID-19 Data Around the World
 */




/*
 * Event Listener Button for when table button is clicked
 */
let table_button = document.querySelector('.table-button');
  
table_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mytable").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mychart").style.display = "none";

  google.charts.load('current', {'packages':['table']});
  google.charts.setOnLoadCallback(drawTable);

  function drawTable() {
    let data = new google.visualization.DataTable();
   
    // get selected countries
    let countries = document.querySelectorAll('#selected_country');
    
    data.addColumn('string', 'Date');
      
    for(let i = 0; i < countries.length; i++) {
      let country = countries[i].childNodes[0].nodeValue;
      data.addColumn('number', country);
    };
    
  
    let len = (c_data["Albania"]).length;
    for(let i = 0; i < len; i++) {
      let row = [];
      let date = (c_data["Albania"])[i].date;
      row.push(date);
      for (let j = 0; j < countries.length; j++) {
        let country = countries[j].childNodes[0].nodeValue;
        let arr = (c_data[country]);
        let confirmed = arr[i].confirmed;
        row.push(confirmed);
      };
      data.addRow(row);

    };
    

    let table = new google.visualization.Table(document.getElementById('table_div'));

    table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
  }
    
})










