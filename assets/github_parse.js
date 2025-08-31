 const username = "pasichDev";
      const year = "2025"; // рік для підрахунку

      fetch(`https://github-contributions-api.jogruber.de/v4/${username}`)
        .then((res) => res.json())
        .then((data) => {
          let total = 0;

          data.contributions.forEach((day) => {
            if (day.date.startsWith(year)) {
              total += day.count;
            }
          });

          document.getElementById("contributions").textContent = `${total}`;
          document.getElementById(
            "contributions-label"
          ).textContent = `Внесків у ${year} році`;
        })
        .catch((err) => {
          document.getElementById("contributions").textContent =
            "Помилка завантаження 😢";
          document.getElementById("contributions-card").style.display = "none";
          console.error(err);
        });