document.addEventListener("DOMContentLoaded", function () {
  const cities = [
    {
      name: "Bangkok, Thailand",
      image: "https://images.unsplash.com/photo-1518391846015-55a9cc003b25",
      imageAlt: "Cityscape of Bangkok, Thailand",
      tags: ["Asia", "Affordable"],
      score: "4.8",
      scoreClass: "good",
      featured: true,
      stats: {
        "Cost/mo": "$1,200",
        Internet: "35Mbps",
        Weather: "32°C",
        Safety: "Good",
        "Air Quality": "Moderate",
        Walkability: "Good",
        Food: "Excellent",
        Healthcare: "Good",
      },
    },
    {
      name: "Bali, Indonesia",
      image: "https://images.unsplash.com/photo-1555400038-63f5ba517a47",
      imageAlt: "Scenic view of Bali, Indonesia",
      tags: ["Asia", "Beach"],
      score: "4.7",
      scoreClass: "good",
      stats: {
        "Cost/mo": "$1,400",
        Internet: "20Mbps",
        Weather: "29°C",
        Safety: "Good",
        "Air Quality": "Good",
        Walkability: "Moderate",
        Food: "Excellent",
        Healthcare: "Good",
      },
    },
    {
      name: "Lisbon, Portugal",
      image: "https://images.unsplash.com/photo-1592332280537-70d3142bd01a",
      imageAlt: "Historic streets of Lisbon, Portugal",
      tags: ["Europe", "Culture"],
      score: "4.6",
      scoreClass: "good",
      stats: {
        "Cost/mo": "$2,100",
        Internet: "100Mbps",
        Weather: "22°C",
        Safety: "Very Good",
        "Air Quality": "Excellent",
        Walkability: "Excellent",
        Food: "Excellent",
        Healthcare: "Excellent",
      },
    },
    {
      name: "Mexico City, Mexico",
      image: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396",
      imageAlt: "Colorful buildings in Mexico City",
      tags: ["Americas", "Culture"],
      score: "4.5",
      scoreClass: "good",
      stats: {
        "Cost/mo": "$1,500",
        Internet: "50Mbps",
        Weather: "25°C",
        Safety: "Moderate",
        "Air Quality": "Moderate",
        Walkability: "Good",
        Food: "Excellent",
        Healthcare: "Good",
      },
    },
    {
      name: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1560969184-10fe8719e047",
      imageAlt: "Berlin cityscape with TV tower",
      tags: ["Europe", "Tech Hub"],
      score: "4.4",
      scoreClass: "good",
      stats: {
        "Cost/mo": "$2,500",
        Internet: "100Mbps",
        Weather: "20°C",
        Safety: "Very Good",
        "Air Quality": "Good",
        Walkability: "Excellent",
        Food: "Very Good",
        Healthcare: "Excellent",
      },
    },
    {
      name: "Cape Town, South Africa",
      image: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99",
      imageAlt: "Cape Town with Table Mountain",
      tags: ["Africa", "Nature"],
      score: "4.3",
      scoreClass: "good",
      stats: {
        "Cost/mo": "$1,800",
        Internet: "40Mbps",
        Weather: "24°C",
        Safety: "Moderate",
        "Air Quality": "Good",
        Walkability: "Good",
        Food: "Very Good",
        Healthcare: "Good",
      },
    },
  ];

  function generateCityButtons() {
    const container = document.getElementById("city-buttons-container");
    if (!container) {
      return;
    }

    cities.forEach((city, index) => {
      const button = document.createElement("button");
      button.className = "destination-button";

      if (index === 0) {
        button.classList.add("big-button");
      } else if (index === 1) {
        button.classList.add("half-button");
      } else {
        button.classList.add("third-button");
      }

      const img = document.createElement("img");
      img.src = city.image;
      img.alt = city.imageAlt;
      img.style.width = "100%";
      img.style.height = "300px";

      const cityName = document.createElement("p");
      cityName.innerText = city.name;
      cityName.className = "city-name";

      const infoContainer = document.createElement("div");
      infoContainer.className = "info-container";

      const cityTags = document.createElement("span");
      cityTags.innerText = city.tags.join(" ");
      cityTags.className = "tags";
      cityTags.style.display = "inline";

      const cityScore = document.createElement("span");
      cityScore.innerText = `${city.score}`;
      cityScore.className = "city-score";
      cityScore.style.color = "darkgreen";
      cityScore.style.textShadow = "0 0 5px lightgreen";
      cityScore.style.display = "inline";

      infoContainer.appendChild(cityTags);
      infoContainer.appendChild(cityScore);

      const statsContainer = document.createElement("div");
      statsContainer.className = "city-stats";

      for (const [key, value] of Object.entries(city.stats)) {
        const statItem = document.createElement("div");
        statItem.className = "stat-item";

        const label = document.createElement("span");
        label.innerText = `${key}: `;

        const statValue = document.createElement("span");
        statValue.className = "stat-item-label";
        statValue.innerText = `${value}`;

        statItem.appendChild(label);
        statItem.appendChild(statValue);
        statsContainer.appendChild(statItem);
      }

      button.appendChild(img);
      button.appendChild(cityName);
      button.appendChild(infoContainer);
      button.appendChild(statsContainer);

      button.addEventListener("click", () => openCityDialog(city));

      container.appendChild(button);
    });
  }

  function openCityDialog(city) {
    const dialog = document.getElementById("city-dialog");
    const dialogCityName = document.getElementById("dialog-city-name");
    const dialogCityImage = document.getElementById("dialog-city-image");
    const dialogStats = document.getElementById("dialog-stats");
    const dialogTags = document.getElementById("dialog-tags");
    const dialogScore = document.getElementById("dialog-score");

    dialogCityName.innerText = city.name;
    dialogCityImage.src = city.image;
    dialogTags.innerText = city.tags.join(" • ");
    dialogScore.innerText = city.score;

    dialogStats.innerHTML = "";
    for (const [key, value] of Object.entries(city.stats)) {
        const li = document.createElement("li");

        const statKey = document.createElement("span");
        statKey.className = "stat-key";
        statKey.innerText = `${key}:`;

        const statValue = document.createElement("span");
        statValue.className = "stat-value";
        statValue.innerText = value;

        li.appendChild(statKey);
        li.appendChild(statValue);
        dialogStats.appendChild(li);
    }

    dialog.showModal();
}


  document.getElementById("close-dialog").addEventListener("click", () => {
    const dialog = document.getElementById("city-dialog");
    dialog.close();
  });

  generateCityButtons();
});
