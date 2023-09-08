const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){

        this.userProfile.innerHTML = ` <div class="info">
                            <img src="${user.avatarUrl} alt="foto de perfil do usuário">
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                <div>👥Seguidores:${user.followers}</div> <div>👤Seguindo: ${user.following}</div>
                                <p>${user.bio ?? 'Não possui bio cadastrada'}
                            </div> 
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`

        }

        let eventsItens = ''
        user.events.forEach(event => {
            console.log(event.payload)
            event.payload.commits.forEach(commit =>{
                console.log(commit.message)
            })
            eventsItens += `<li><span>${event.repo.name}</span> — ${event.payload.commits.message}</li>`
        })
        if(user.events.length > 0){
            this.userProfile.innerHTML += `<div class="events section">
            <h2>Eventos</h2>
            <ul>${eventsItens}</ul>
            </div>`
        }

    },
    
    renderNotFound(){
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }