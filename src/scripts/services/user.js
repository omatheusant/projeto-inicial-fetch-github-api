import { baseUrl } from "../variables.js";

async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

console.log(getUser('devemdobro'))

export { getUser }