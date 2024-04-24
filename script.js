let user= prompt("Enter s w or g ")
let cpuI=Math.floor(Math.random() * 3);
let cpu=["s", "w", "g"][cpuI]

const match=(user, cpu)=>{
    if(user===cpu){
        return "Tie"
    }
    else if(user==="s" && cpu==="w"){
        return "user"
    }
    else if(user==="s" && cpu==="g"){
        return "cpu"
    }
    else if(user==="w" && cpu==="s"){
        return "cpu"
    }
    else if(user==="w" && cpu==="g"){
        return "user"
    }
    else if(user==="g" && cpu==="s"){
        return "user"
    }
    else if(user==="g" && cpu==="w"){
        return "cpu"
    }
}
let result=match(user, cpu)
document.write(`<br> user:${user}<br> cpu:${cpu} <br> The winner is: ${result.toUpperCase()}`)


