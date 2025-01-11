document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('#nome');
    const usernameElement = document.querySelector('#usuario');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#seguidores');
    const followingElement = document.querySelector('#seguindo');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/leofirsil')
        .then(function(res) {
            return res.json();
        })
        .then(function(json) {
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            avatarElement.src = json.avatar_url;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
})