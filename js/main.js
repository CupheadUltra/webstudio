// Фільтр проектів в порфтоліо
const list = document.querySelector(".port-list");
const items = document.querySelectorAll(".port-item");

function filter() {
  const filters = document.querySelectorAll(".filters-item");

  filters.forEach((filter) => {
    filter.addEventListener("click", (event) => {
      const targetId = event.currentTarget.dataset.id;
      console.log(targetId);

      items.forEach((item) => {
        if (targetId === "all" || item.classList.contains(targetId)) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
}

filter();
