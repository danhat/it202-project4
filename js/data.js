





url = 'https://pomber.github.io/covid19/timeseries.json';

fetch(url).then(response => response.json()).then(data => {

  let countries = Object.keys(data);
  //console.log(data["Albania"]);
  let options = '';

  for(let i = 0; i < countries.length; i++)
    options += '<option value="' + countries[i]+'" />';
    
  /*let links = '';
  for(let i = 0; i < countries.length; i++) {
    links += '<a class="dropdown-item" href="#">' + countries[i] + '</a>'
  }*/

  document.querySelector('#country_list').innerHTML = options;
  //document.querySelector('#country-dropdown').innerHTML = links;

  //console.log(countries);
  
});


let add_button = document.querySelector('.add-button');
  
add_button.addEventListener('click', (e) => {
  let to_add = document.querySelector('#country_input').value;
  let list = document.querySelector('#countries_for_chart');
  let entry = document.createElement("li");
  entry.setAttribute("id", "selected_country");
  entry.appendChild(document.createTextNode(to_add));
  list.appendChild(entry);
})


let clear_button = document.querySelector('.clear-button');
  
clear_button.addEventListener('click', (e) => {  
  let list = document.querySelector('#countries_for_chart');
  let items = document.querySelectorAll('#selected_country');
  
  // remove items from list
  for (item of items) {
    list.removeChild(item);
  }
})















