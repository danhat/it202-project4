



mdc.topAppBar.MDCTopAppBar.attachTo(document.querySelector('header.mdc-top-app-bar'));
      
const drawer = mdc.drawer.MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));

document.querySelector('.mdc-top-app-bar__navigation-icon')
.addEventListener(
  'click', 
  (e) => {
    drawer.open = true;
  }
);


document.querySelectorAll('aside.mdc-drawer a.mdc-list-item').forEach(item => {

item.addEventListener(
  'click',
  event => {
    let selected = item.getAttribute('href');
    if (selected == '#mydata') {
      document.querySelector("#mydata").style.display = "block";
      document.querySelector("#data").style.display = "none";
      document.querySelector("#mytable").style.display = "none";
    }
    if (selected == '#mytable') {
      document.querySelector("#mytable").style.display = "block";
      document.querySelector("#mydata").style.display = "none";
      document.querySelector("#mychart").style.display = "none";
    }
    if (selected == '#mychart') {
      document.querySelector("#mychart").style.display = "block";
      document.querySelector("#mydata").style.display = "none";
      document.querySelector("#mytable").style.display = "none";
    }
  }
)       
}) 