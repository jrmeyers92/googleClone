export async function search() {
  const searchBar = document.getElementById("searchBar");

  const response = await fetch(
    `https://google-search3.p.rapidapi.com/api/v1/search/q=${searchBar.value}&num=100`,
    {
      method: "GET",
      headers: {
        "x-user-agent": "desktop",
        "x-rapidapi-host": "google-search3.p.rapidapi.com",
        "x-rapidapi-key": "4a223f6d75msh4e6bd23fc56d7aap16fb9ajsn521a20d036db",
      },
    }
  );
  let array = await response.json();
  console.log(array);
  return array.results;

  // data.results.map(res => {

  //     let link = document.createElement('a');
  //     link.classList.add('search__link');
  //     link.href = res.link;
  //     link.innerHTML = res.title;

  //     let title = document.createElement('h2');
  //     title.appendChild(link);
  //     title.classList.add('search__title');

  //     let desc = document.createElement('span');
  //     desc.innerHTML = res.description;
  //     desc.classList.add('search__desc');

  //     let searchResultDiv = document.createElement('div')
  //     searchResultDiv.appendChild(title);
  //     searchResultDiv.appendChild(desc);
  //     searchResultDiv.classList.add('search__div');

  //     resultsDiv.appendChild(searchResultDiv);
  //     console.log(res.title);

  // })
}
