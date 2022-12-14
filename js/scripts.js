let card = document.getElementById('card');
let cardText = document.getElementById('card-text');
let button = document.getElementById('button');
let quotes = ["You alone are enough. You have nothing to prove to anybody.",
  "The most beautiful thing you can wear is confidence.",
  "Self confidence is a superpower. Once you start to believe in yourself, magic starts happening.",
  "You have a one of a kind gift to offer this world, and you are unique in the entire history of creation.",
  "Your self-worth is determined by you. You don't have to depend on someone to tell you who you are.",
  "Flowers grow back even after the harshest winters. You will, too.",
  "Wanting to be someone else is a waste of the person you are.",
  "You can turn your life around. You can do anything that you want to do, and you can be self-educated. - Tamara Mellon",
  "You have to really know your strengths and really be ok with your weaknesses. - Rachel Zoe",
  "If no one's being your cheerleader, be your own cheerleader. - Karla Welch",
  "I would say vulnerability is your superpower. Do not compare yourself with others because you are great, strong as you are yourself. You need to learn to fall in love with your flaws instead of feeling insecure or bad about them. - Sarah Lee",
  "You have to be as fearless as the weight of your passion. - Rea Ann Silva",
  "When you really focus on yourself and what you want to do, you end up exactly where you want to be. - Raissa Gerona",
  "No one is ever going to promote you the way you can. - Jen Atkin",
  "Passion is just as important as skill set. - Katie Sturino",
  "You have everything you need to be successful. You, yourself, just as a person, as a woman. You've got this. - Gregg Renfrew",
  "I've never learned more than falling on my face and having to pick myself back up and figure it out. - Cassandra Grey",
  "You have to hustle and make things happen yourself. You can't just sit and wait for somebody to knock on your door. - Anine Bing",
  "One of my biggest things is think how you can, not why you can't. And if you're going to do it, then you have to own it. You need to own it. - Andrea Lieberman",
  "Every woman is beautiful, and she needs to be who she is. She needs to show her beauty and power. - Anastasia Soare"
];



button.addEventListener('click', function changeQuote() {
  let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  cardText.innerText = randomQuote;
});