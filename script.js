const facts = [
    "Cricket originated in England in the 16th century and has evolved significantly since then.",
    "The International Cricket Council (ICC) is the global governing body for cricket, founded in 1909.",
    "Cricket is played in several formats, including Test matches (5 days), One Day Internationals (50 overs), and Twenty20 (20 overs).",
    "The Ashes is one of the most famous Test series, contested between England and Australia, and dates back to 1882.",
    "The ICC Cricket World Cup is held every four years, with the first tournament taking place in 1975.",
    "A cricket bat is flat on one side and has a ridge on the other, while the ball is made of cork and covered with leather.",
    "A cricket field is typically oval-shaped, with a 22-yard long pitch at its center.",
    "Each team consists of 11 players, including batsmen, bowlers, and fielders.",
    "Runs can be scored by hitting the ball and running between the wickets or by hitting boundaries (4 runs for hitting the ball to the boundary and 6 runs for hitting it over the boundary).",
    "Cricket matches are officiated by two on-field umpires, with additional third umpires and match referees in international games to assist with decisions."
];

document.getElementById('factButton').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fact').innerText = facts[randomIndex];
});
