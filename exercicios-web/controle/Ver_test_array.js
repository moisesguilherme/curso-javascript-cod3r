const obj = {name:null, login:'aaaa', avatar_url:'kkkkk'}
let {name = login, avatar_url, bio} = obj

console.log(name)

///
const techsArray = techs.split(',').map(tech => tech.trim())
