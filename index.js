let jokes = [
    "What do you call it when a snowman has a temper tantrum?<br><br>A meltdown.",
    "Why are elevator jokes so good?<br><br>Because they work on so many levels.",
    "What do you call advice from a cow?<br><br>Beef Tips.",
    "Why are pediatricians always so grumpy?<br><br>They have little patients.",
    "Why did the scarecrow win an award?<br><br>Because he was outstanding in his field.",
    "Why did the melon jump into the lake?<br><br>It wanted to be a water-melon.",
    "What did the duck say when it bought lipstick?<br><br>“Put it on my bill.”",
    "What do you call a pig that does karate?<br><br>A pork chop.",
    "What has a bed that you can’t sleep in?<br><br>A river.",
    "Why were the teacher’s eyes crossed?<br><br>She couldn’t control her pupils.",
    "What starts with E, ends with E, and has only 1 letter in it?<br><br>An Envelope.",
    "How does the ocean say hello?<br><br>It waves.",
    "What lights up a soccer stadium?<br><br>A soccer match.",
    "What creature is smarter than a talking parrot?<br><br>A spelling bee.",
    "Which U.S. state has the smallest soft drinks?<br><br>Minnesota (as in, “mini-soda”).",
    "Why couldn’t the leopard play hide and seek?<br><br>Because he was always spotted.",
    "Why did the drum take a nap?<br><br>It was beat.",
    "Where do hamburgers go dancing?<br><br>They go to the meat-ball.",
    "Why did the tomato turn red?<br><br>It saw the salad dressing.",
    "Why shouldn’t you write with a broken pencil?<br><br>Because it’s pointless.",
    "What do you call two monkeys that share an Amazon account?<br><br>Prime mates.",
    "Why are teddy bears never hungry?<br><br>Because they’re always stuffed!",
    "Why did the tree go to the dentist?<br><br>It needed a root canal.",
    "If athletes get athlete’s foot, what do elves get?<br><br>Mistle-toes.",
    "Why couldn’t the pony sing?<br><br>Because she was a little hoarse.",
    "Where do cows go for entertainment?<br><br>The mooooo-vies!",
    "What do you call a pig that does karate?<br><br>A pork chop.",
    "How does NASA organize a party?<br><br>They planet.",
    "Why did Adele cross the road?<br><br> To sing, “Hello from the other side!",
    "What runs around a yard without actually moving?<br><br>A fence.",
    "What’s an astronaut’s favorite candy?<br><br>A Mars bar.",
    "Where do sheep go to get their hair cut?<br><br>The baa-baa shop.",
    "Why are there gates around cemeteries?<br><br>Because people are dying to get in.",
    "What do you get when you cross a snake with a pie?<br><br>A pie-thon!",
    "Why is Peter Pan always flying?<br><br>He Neverlands.",
    "What’s the most musical part of the chicken?<br><br>The drumstick.",
    "Why do seagulls fly over the sea?<br><br>Because if they flew over a bay, they would be bagels.",
    "How do you know when the moon has had enough to eat?<br><br>When it’s full.",
    "What kind of music do planets like?<br><br>Neptunes.",
    "Why can’t you trust an atom?<br><br>Because they make up everything.",
    "What do you call a group of disorganized cats?<br><br>A cat-tastrophe.",
    "Why do bees have sticky hair?<br><br>Because they use honeycombs.",
    "Where do you learn to make banana splits?<br><br>At sundae school.",
    "How do you tell if a vampire is sick?<br><br>By how much he is coffin.",
    "Why are ghosts good cheerleaders?<br><br>Because they have a lot of spirit!",
    "What happens to a frog’s car when it breaks down?<br><br>It gets toad away.",
    "Why did the witches’ team lose the baseball game?<br><br>Their bats flew away.",
    "Why did the school kids eat their homework?<br><br>Because their teacher told them it was a piece of cake.",
    "Why are hairdressers never late for work?<br><br>Because they know all the short cuts!",
    "What is the difference between a teacher and a train?<br><br>One says, “Spit out your gum,” and the other says, “Choo choo choo!”",
    "Why does Humpty Dumpty love autumn?<br><br>Because Humpty Dumpty had a great fall.",
    "How do you make a tissue dance?<br><br>Put a little boogie in it.",
    "What is the tallest building in the entire world?<br><br>The library, because it has so many stories.",
    "Why do programmers prefer dark mode? Because light attracts bugs!",
    "How many programmers does it take to change a light bulb?<br><br>None, that’s a hardware problem!",
    "Why do Java developers wear glasses?<br><br>Because they don’t see sharp!",
    "Why was the developer unhappy at their job?<br><br>They wanted arrays!",
    "What do you call a programmer from Finland?<br><br>Nerdic!",
    "Why did the programmer quit their job?<br><br>Because they didn’t get arrays!",
    "How do you comfort a JavaScript bug?<br><br>You console it!",
    "Why do Python programmers prefer snakes?<br><br>Because they can handle exceptions!",
    "What’s a programmer’s favorite hangout place?<br><br>Foo Bar!",
    "Why was the developer always calm?<br><br>Because they knew how to handle exceptions!",
    "What do you get when you cross a computer and a life guard?<br><br>A screensaver!",
    "Why do programmers hate nature?<br><br>It has too many bugs!",
    "Why did the coder bring a ladder to work?<br><br>To reach the next level!",
    "What’s a programmer’s favorite game?<br><br>Catch the bug!",
    "Why did the computer go to therapy?<br><br>It had too many bytes!",
    "What do you call a website that tells you about programming?<br><br>A code-umentary!",
    "Why was the computer cold?<br><br>It left its Windows open!",
    "How does a programmer propose?<br><br>With a ring buffer!",
    "What did the developer say when they found a bug?<br><br>“It’s a feature!”",
    "Why did the programmer stay at their computer?<br><br>They wanted to debug their relationship!"
]

function joke() {
    let random = Math.floor(Math.random() * jokes.length)
    return jokes[random]
}

document.querySelector('#generate').addEventListener('click', () => {
    let jokes = joke()
    document.querySelector('#jokes').innerHTML = jokes
    sessionStorage.setItem('joke', jokes)
})

window.addEventListener('DOMContentLoaded', () => {
    let joke = sessionStorage.getItem('joke')
    document.querySelector('#jokes').innerHTML = joke
})
