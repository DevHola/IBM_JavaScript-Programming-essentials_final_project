function getdata(){
	
	
	var input = document.getElementById('searchinput').value.toLowerCase();
	console.log(input)
	fetch('travelrecommendation.json', { cache: 'no-store' })
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

	
}


function search(data){
	var destinations_grid = document.getElementById('Result');
	destinations_grid.innerHTML = "";
	
	if(data === null || data === ''){
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
		mydiv.classList.add('resultvalues');
		
		var newhtml = `
			<p class="resulttittle">${city.name}</p>
			<img class="resultimg" src="${city.imageUrl}" >
			<p class="resultdescription">${city.description}</p>
		`;
		
		mydiv.innerHTML = newhtml;
		destinations_grid.appendChild(mydiv);
		
	});
	
	
	
}

