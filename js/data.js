





url = 'https://pomber.github.io/covid19/timeseries.json';

fetch(url).then(response => response.json()).then(data => {

  let countries = Object.keys(data);
  //console.log(data["Albania"]);
  let options = '';

  for(let i = 0; i < countries.length; i++)
    options += '<option value="' + countries[i]+'" />';

  document.querySelector('#country_list').innerHTML = options;

  //console.log(countries);
  
});


let add_button = document.querySelector('.add-button');
  
add_button.addEventListener('click', (e) => {
  let to_add = document.querySelector('#country_input').value;
  console.log(to_add);
  let list = document.querySelector('#countries_for_chart');
  let entry = document.createElement("li");
  entry.setAttribute("id", "selected_country");
  entry.appendChild(document.createTextNode(to_add));
  list.appendChild(entry);
})















