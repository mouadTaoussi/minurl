document.querySelector('.submit_btn').addEventListener('click',async()=>{
	// Get the inputs
	const name = document.querySelector('#name').value,
		  url = document.querySelector('#url').value;
	// Valid the inputs
	if (name == '' || url == '') {
		document.querySelector('.errors').innerText = "Please fill the inputs!"
	}
	else {
		// Save it to the database
		const response = await fetch('/post', {
		    method: 'POST', // *GET, POST, PUT, DELETE, etc.
		    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		    // credentials: 'same-origin', // include, *same-origin, omit
		    headers: {
		      'Content-Type': 'application/json'
		      // 'Content-Type': 'application/x-www-form-urlencoded',
		    },
		    // referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
		    body: JSON.stringify({name : name, url : url}) // body data type must match "Content-Type" header
		 });
		const json_response = await response.json(); // parses JSON response into native JavaScript objects
		// Check if saved
		if (!json_response.posted) {
			document.querySelector('.errors').innerText = json_response.message;
		}
		else{
			document.querySelector('#shorteren').value = "localhost:8000/"+ name;
		}
	}
})