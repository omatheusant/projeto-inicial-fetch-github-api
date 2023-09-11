const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user){

        this.userProfile.innerHTML = ` <div class="info">
                            <img src="${user.avatarUrl} alt="foto de perfil do usuário">
                            <div class="data">
                                <h1>${user.name ?? 'Não possui nome cadastrado'}</h1>
                                <p>${user.bio ?? 'Não possui bio cadastrada'}
                              <div class="follow-info">
                                  <div>👥Seguidores:${user.followers}</div> <div>👤Seguindo: ${user.following}</div>
                              </div>
                            </div> 
                        </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name} <br><br> <span>🍴 ${repo.forks_count}</span> <span>⭐ ${repo.stargazers_count}</span> <span>👀 ${repo.watchers_count}</span> <span>📝 ${repo.language}</span></a> </li>`)

        if(user.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
            <h2>Repositórios</h2>
            <ul>${repositoriesItens}</ul>
            </div>`

        }

        let eventsItens = ''
        user.events.forEach(event =>{
            if(event.payload.commits){
                eventsItens += `<li><span>${event.repo.name}</span> — ${event.payload.commits[0].message}</li>`
            } else {
                eventsItens += `<li><span>${event.repo.name}</span> — Não possui mensagem`
            }
        } )
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