function getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let usersDiv = document.getElementById('users');
            usersDiv.innerHTML = "";

            data.forEach(user => {
                usersDiv.innerHTML += `
                    <div class="user">
                        <h2>${user.name}</h2>
                        <p>Email: ${user.email}</p>
                        <p>Phone: ${user.phone}</p>
                        <p>City: ${user.address.city}</p>
                    </div>
                `;
            });
        })
        .catch(err => {
            console.log("Error:", err);
        });
}