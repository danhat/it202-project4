/*
 * Danielle Hatten
 * April 2020
 * Tracking COVID-19 Data Around the World
 */



/*
 * get covid-19 data
 */
url = 'https://pomber.github.io/covid19/timeseries.json';
let c_data;
fetch(url).then(response => { return response.json();}
      ).then(json => {
          c_data = json;
        }
      );


/*
 * Event Listener Button for when chart button is clicked
 */
let chart_button = document.querySelector('.chart-button');
  
chart_button.addEventListener('click', (e) => {
    
  // go to chart page once button is clicked
  document.querySelector("#mychart").style.display = "block";
  document.querySelector("#mydata").style.display = "none";
  document.querySelector("#mytable").style.display = "none";
    
  // Load the Visualization API and the corechart and line packages.
  google.charts.load('current', {'packages':['corechart', 'line']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {

    // Create the data table for pie chart.
    let data = new google.visualization.DataTable();
    data.addColumn('string', 'Country');
    data.addColumn('number', 'Number of Cases');
     
    // create data table for line graph
    let line_data = new google.visualization.DataTable();
    line_data.addColumn('string', 'Date');
    
    // get selected countries
    let countries = document.querySelectorAll('#selected_country');
    

      
    for(let i = 0; i < countries.length; i++) {
      let country = countries[i].childNodes[0].nodeValue;
      line_data.addColumn('number', country);
        
      let len = (c_data[country]).length;
      let arr = (c_data[country]);
        
      //console.log(arr);
      let date = arr[len - 1].date;
      let confirmed = arr[len - 1].confirmed;
      let deaths = arr[len - 1].deaths;
        
      data.addRow([country, confirmed]);

    };
     
      
      
    /*
     * Getting Line Graph Data
     */
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
        
      line_data.addRow(row);

    };
     
      
      
    /*
     * Line graph
     */
    var line_options = {
      chart: {
        title: 'Confirmed Cases',
        subtitle: 'since January 22, 2020'
      },
      width: 500,
      height: 400
    };

    let line_chart = new google.charts.Line(document.getElementById('linechart_material'));

    line_chart.draw(line_data, google.charts.Line.convertOptions(line_options));

      
      
    /* 
     * Pie Chart
     */
    // Set chart options
    let options = {'title':'Confirmed Cases',
                   'width':500,
                   'height':400};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.PieChart(document.getElementById('chart_div'));
    chart.draw(data, options);     


  }
})


