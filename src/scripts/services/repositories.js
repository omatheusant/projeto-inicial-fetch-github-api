import { baseUrl, repositoriesQuantity } from "../variables.js";

async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)
    return await response.json()
}

console.log(getRepositories('devemdobro'))

export { getRepositories }