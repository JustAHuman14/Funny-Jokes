async function jokes() {
        let x = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart`)
        let y = await x.json()
        let jokes =`<p style="display: flex; justify-content: center; align-items: center;">${y.setup}</p><br><br> <p style="display: flex; justify-content: center;">${y.delivery}</p>`
        document.getElementById('jokes').innerHTML = jokes
        document.getElementById('jokes').style.color = 'black'
}

function random(){
    return Math.ceil(Math.random()*2)
}

document.querySelector('#generate').addEventListener('click', () => {
    jokes()
})