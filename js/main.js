// NAVIGATION

import { hambuger } from "./hambuger.js";
import { search } from "./search.js";
import { pagintaion } from "./pagination.js";

async function SearchFormSubmit() {
  const response = await search();
  console.log(response);
}

(function () {
  const searchForm = document.getElementById("searchForm");

  hambuger();

  // pagintaion(response, 10);
  searchForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    let array = await search();
    await pagintaion(array, 10);
  });
})();
