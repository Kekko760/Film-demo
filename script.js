const films = [
  {
    title: "Everything Everywhere All at Once",
    category: "oscar",
    year: 2022,
  },
  {
    title: "Doctor Strange",
    category: "directors",
    director: "Sam Raimi",
    year: 2016,
  },
  {
    title: "500 Days of Summer",
    category: "directors",
    director: "Marc Webb",
    year: 2009,
  },
  {
    title: "Clown",
    category: "directors",
    director: "Jon Watts",
    year: 2014,
  },
  {
    title: "Dune: Part Two",
    category: "upcoming",
    year: 2024,
  },
  {
    title: "Oppenheimer",
    category: "hype",
    year: 2023,
  },
{ title: "Oppenheimer", category: "oscar", year: 2023 },
  { title: "Dune: Part One", category: "upcoming", year: 2021 },
  { title: "Everything Everywhere All at Once", category: "oscar", year: 2022 },
  { title: "The Batman", category: "hype", year: 2022 },
  { title: "The Grand Budapest Hotel", category: "hype", year: 2014 },
  { title: "The Whale", category: "oscar", year: 2022 },
  { title: "La La Land", category: "oscar", year: 2016 },
  { title: "Parasite", category: "oscar", year: 2019 },
  { title: "Interstellar", category: "hype", year: 2014 },
  { title: "Whiplash", category: "directory", year: 2014 },
  { title: "Joker", category: "hype", year: 2019 },
  { title: "The Prestige", category: "directory", year: 2006 },
  { title: "1917", category: "hype", year: 2019 },
  { title: "The Revenant", category: "oscar", year: 2015 },
  { title: "Mad Max: Fury Road", category: "hype", year: 2015 },
  { title: "Inception", category: "hype", year: 2010 },
  { title: "Arrival", category: "directory", year: 2016 },
  { title: "Birdman", category: "oscar", year: 2014 },
  { title: "Tenet", category: "upcoming", year: 2020 },
  { title: "The Social Network", category: "hype", year: 2010 }


];

function renderFilms(list) {
  const container = document.getElementById("film-list");
  container.innerHTML = "";
  list.forEach((film) => {
    container.innerHTML += `
      <div class="card">
        <h3>${film.title}</h3>
        <p><strong>Anno:</strong> ${film.year}</p>
        ${film.director ? `<p><strong>Regia:</strong> ${film.director}</p>` : ""}
      </div>
    `;
  });
}

function filter(category) {
  if (category === "all") {
    renderFilms(films);
  } else {
    renderFilms(films.filter(f => f.category === category));
  }
}

window.onload = () => {
  renderFilms(films);
};
