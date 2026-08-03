"use strict";

// Lesson 09 exercise: The DOM and forms
// In your exercise repository, create a branch named `lesson-09-exercise` and switch to it.
// This lesson works with two provided files: open `lesson-09.html` with Live Server and keep
// the DevTools Console open, and write all JavaScript in `lesson-09.js`, which the page
// already loads with `defer`. The questions wait as comments in the JavaScript file.

// TODO: Part one.
// Log one sentence to the console, then log `document.title`, and confirm that both appear in
// the DevTools Console rather than in a terminal. In a comment, state what the `defer`
// attribute prevented.

console.log("Welcome to Startupistan Records!");
console.log(document.title);

// TODO: Part two.
// Select the page's `h1` with `querySelector` and replace its `textContent` with a label name
// of your choosing. Select the tagline by its class and change its text, then add the provided
// highlight class to it through `classList`.

const heading = document.querySelector("h1");
heading.textContent = "Startupistan Records";

const tagline = document.querySelector(".tagline");
tagline.textContent = "Discover new artists and great music.";
tagline.classList.add("highlight");

// TODO: Part three.
// The file provides the artists as an array of objects. Loop over it, create an `article`
// containing an `h3` for the name and a `p` for the genre and total runtime, fill both through
// dot notation and a template literal, and append each finished card into the element that
// carries the cards class. Reload the page and confirm that five cards stand on it.

// * The artists, provided:
const artists = [
  { name: "Pinkfong", genre: "Children's music", total: "11:31" },
  { name: "Adriano Celentano", genre: "Italian pop", total: "20:52" },
  { name: "Asake", genre: "Afrobeats", total: "14:08" },
  { name: "Miyagi and Andy Panda", genre: "Hip-hop", total: "16:21" },
  { name: "Johnny Cash", genre: "Country", total: "15:40" },
  { name: "Daft Punk", genre: "Electronic", total: "18:25" },
];

//const cards = document.querySelector(".cards");

//for (const artist of artists) {
//const card = document.createElement("article");

//const name = document.createElement("h3");
//name.textContent = artist.name;

//const details = document.createElement("p");
//details.textContent = `${artist.genre} — ${artist.total}`;

//card.append(name);
//card.append(details);

//cards.append(card);
//}

// TODO: Part four.
// Add a sixth artist object of your own invention to the array and reload. Confirm that the
// sixth card exists, and state in a comment what you did not have to change, compared with the
// five hand-copied cards this course opened on.

// I did not have to change the card-building loop because it automatically handles every artist in the array.

// TODO: Part five.
// The page provides a button with the shuffle class and an element with the featured class. On
// click, pick a random artist using the random recipe with `Math.floor`, and write a featured
// sentence into the featured element with a template literal.

const shuffleButton = document.querySelector(".shuffle");
const featured = document.querySelector(".featured");

shuffleButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * artists.length);
  const artist = artists[randomIndex];

  featured.textContent = `Featured artist: ${artist.name} — ${artist.genre}.`;
});

// TODO: Part six.
// The page provides a form with the signup class and a text input with the artist-name id. On
// submit, call `preventDefault` on the event, read the input's `value`, and, when the value is
// truthy, push a new artist object built from it into the array and append one new card for
// it, reusing your card-building code from part three, ideally as a function that both parts
// call. An empty submission does nothing; name in a comment which falsy value makes that check
// work. As a stretch, clear the input by assigning it an empty string after each successful
// addition.

const form = document.querySelector(".signup");
const artistInput = document.querySelector("#artist-name");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = artistInput.value;

  // The empty string "" is falsy, so an empty submission is ignored.
  if (name) {
    const newArtist = {
      name: name,
      genre: "Unknown",
      total: "00:00",
    };

    artists.push(newArtist);
    addArtistCard(newArtist);

    artistInput.value = "";
  }
});

const cards = document.querySelector(".cards");

function addArtistCard(artist) {
  const card = document.createElement("article");

  const name = document.createElement("h3");
  name.textContent = artist.name;

  const details = document.createElement("p");
  details.textContent = `${artist.genre} — ${artist.total}`;

  card.append(name);
  card.append(details);

  cards.append(card);
}

for (const artist of artists) {
  addArtistCard(artist);
}

// TODO: Save deliberately, commit with a clear message, push the branch, and open a pull request
// into main. This is the final exercise of the course, and the reviewed merge closes it.
// TODO: Submit the link to the pull request for review.
