const songTitles = [
    "grant",
    "BLVD",
    "sweet",
    "AW",
    "necklace",
    "kintsugi",
    "kint",
    "sugi",
    "margaret",
    "tail",
    "peppers",
    "venicebitch",
    "venice",
    "bitch",

    "book",
    "BB",
    "arcadia",
    "violets",
    "dealer",
    "wildflower",

    "dress",
    "COCC",
    "tulsa", "tulsa",
    "freak",
    "yosemite",
    "for"
];


async function generateRandomName() {
    const randomIndex = () => Math.floor(Math.random() * songTitles.length);
    const randomName = songTitles[randomIndex()] + songTitles[randomIndex()];
    document.getElementById("titletext").textContent = randomName;

    try {
        const res = await fetch(`/api/check?name=${randomName}`);
        const data = await res.json();
        console.log(data)

        document.getElementById("availabletext").textContent = data.available ? "Not Taken" : "Taken"; ;
        document.getElementById("urltext").textContent = data.url;
        document.getElementById("urltext").setAttribute("href", data.url);
    } catch (error) {
        console.error('Error:', error);
    }
}
