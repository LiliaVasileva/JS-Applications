function loadRepos() {
	const username = document.getElementById('username').value;


	fetch(`https://api.github.com/users/${username}/repos`)
		.then(handleResponse)
		.then(handleData)
		.catch(handleError);
}

function handleData(data) {
	const list = document.getElementById('repos');

	const items = data.map(repo => {
		const li = document.createElement('li');
		const a = document.createElement('a');
		a.href = repo.html_url;
		a.textContent = repo.full_name;
		li.appendChild(a);
		return li;
	});

	list.replaceChildren(...items);

	// for (let repo of data) {
	// 	console.log(repo)
	// 	const li = document.createElement('li');
	// 	const a = document.createElement('a');
	// 	a.href = repo.html_url;
	// 	a.textContent = repo.full_name;
	// 	li.appendChild(a);
	// 	list.appendChild(li);
	// }

}

function handleResponse(response) {
	if (response.ok == false) {
		throw new Error(`Error: ${response.status} ${response.statusText}`)
	}
	return response.json();
}

function handleError(error) {
	console.log(error);
}