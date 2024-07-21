var result = document.querySelector("#destinations");
var hero = document.querySelector("#hero");


document.querySelector("#search").addEventListener('click',function(){
	
	
	var input = document.querySelector(".search-bar input").value.toLowerCase();
	
	fetch('travel_recommendation_api.json', { cache: 'no-store' })
		.then( response => response.json())
		.then( data => {
			
			console.log("hey" + data.countries[0]);
			console.log("hey1" + data.countries[0].cities);
			
			if(input == "temple" || input == "temples"){
				search(data.temples);
			}else if(input == "beach" || input == "beaches"){
				search(data.beaches);
			}else if(input == "australia" ){
				search(data.countries[0].cities);
			}else if(input == "brazil" ){
				search(data.countries[2].cities);
			}else if(input == "japan"){
				search(data.countries[1].cities);
			}else{
				search(null);
			}
				
			
		})
		.catch(error => {
			console.log(error);
		});

	
});


function search(data){
	hero.style.display = "none";
	result.style.display = "";
	console.log(data);
	
	var destinations_grid = document.querySelector(".destinations-grid");
	destinations_grid.innerHTML = "";
	
	if(data == null){
		destinations_grid.innerHTML = ` 
			<div class="destinations-grid">
				<p><b>No result found</b></p>       
			</div>
		`;
		return;
	}
	
	data.forEach((city)=>{
		console.log(city.name);
		var mydiv = document.createElement('div');
		mydiv.classList.add('destination-card');
		
		var newhtml = `
			<img src="images/${city.imageUrl}" >
			<h3>${city.name}</h3>
			<p>${city.description}</p>
		`;
		
		mydiv.innerHTML = newhtml;
		destinations_grid.appendChild(mydiv);
		
	});
	
	
	
}


document.querySelector("#clear").addEventListener('click',function(){
	
	document.querySelector(".search-bar input").value = "";
});