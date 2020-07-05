/*fetch('data.json')
.then(res => res.json())
.then((json) => {
  var intData = json.links[1].price;

  document.getElementById('demo').innerHTML = intData ;  







})

*/


fetch('run_results.json')
.then(res => res.json())
.then((json) => {
  

  document.getElementById('demo').innerHTML = "total: " + json.value ;  







})

/*

var  staticUrl = 'https://mystifying-galileo-3ae747.netlify.app/run_results.json';

$.getJSON(staticUrl , function(data) {
	console.log(data);
	// body...
});

*/











  
