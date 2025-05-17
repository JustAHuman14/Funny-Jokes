async function joke() {
        let x = await fetch(`https://official-joke-api.appspot.com/jokes/programming/random`)
        let y = await x.json()
        let z = y[0]
        let joke = `<p style="display: flex; justify-content: center; align-items: center;">${z.setup}</p><br><br> <p style="display: flex; justify-content: center;">${z.punchline}<p>`
        document.getElementById('jokes').innerHTML = joke
        document.getElementById('jokes').style.color = 'black'
}

async function jokes() {
        let x = await fetch(`https://official-joke-api.appspot.com/jokes/general/random`)
        let y = await x.json()
        let z = y[0]
        let jokes =`<p style="display: flex; justify-content: center; align-items: center;">${z.setup}</p><br><br> <p style="display: flex; justify-content: center;">${z.punchline}<p>`
        document.getElementById('jokes').innerHTML = jokes
        document.getElementById('jokes').style.color = 'black'
}

function random(){
    return Math.ceil(Math.random()*2)
}

document.querySelector('#generate').addEventListener('click', () => {
    if (random() == 1) {
        return jokes()
    } else {
        return joke()
    }
})