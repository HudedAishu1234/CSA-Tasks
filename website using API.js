document.addEventListener('DOMContentLoaded', () => {
    const userContainer = document.getElementById('user-container');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';

                userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Username:</strong> ${user.username}</p>
                    <p><strong>Email:</strong> <a href="mailto:${user.email}">${user.email}</a></p>
                    <p><strong>Address:</strong> ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                `;

                userContainer.appendChild(userCard);
            });
        })
        .catch(error => console.error('Error fetching user data:', error));
});
