export function pagintaion(array, itemsPerPage) {
  const numOfPages = Math.ceil(array.length / itemsPerPage);
  let currentPage = 1;
  let firstSlicer = 0;
  let secondSlicer = itemsPerPage;
  let negItemsPerPage = itemsPerPage - itemsPerPage * 2;

  // DOM Variables
  const nextButton = document.getElementById("next");
  const lastButton = document.getElementById("last");
  const prevButton = document.getElementById("prev");
  const firstButton = document.getElementById("first");
  const ul = document.getElementById("results__list");
  const para = document.getElementById("pages");

  const sliceArray = (array, slicer1, slicer2) => {
    return array.slice(slicer1, slicer2);
  };

  const outputArray = (arr) => {
    console.log(arr);
    const ul = document.getElementById("results__list");
    arr.map((ar) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      const h2 = document.createElement("h2");
      const span = document.createElement("span");

      li.classList.add("search__list");
      a.classList.add("search__link");
      h2.classList.add("search__title");
      span.classList.add("search__desc");

      a.innerHTML = ar.title;
      h2.appendChild(a);
      span.innerHTML = ar.description;
      li.appendChild(h2);
      li.appendChild(span);
      ul.appendChild(li);
    });
  };

  const buttonDisabled = (element, bool) => {
    element.disabled = bool;
  };

  const updateSlicers = (num) => {
    firstSlicer += num;
    secondSlicer += num;
  };

  const removeChildren = () => {
    const children = ul.childNodes;
    children.forEach((child) => (child.innerText = ""));
  };

  const setPara = () => {
    para.textContent = `page ${currentPage} of  ${Math.ceil(numOfPages)}`;
  };

  const init = () => {
    outputArray(sliceArray(array, firstSlicer, secondSlicer));
    buttonDisabled(prevButton, true);
    buttonDisabled(firstButton, true);
    setPara();
  };

  const nextButtonClicked = () => {
    console.log(currentPage, numOfPages);
    if (currentPage === numOfPages - 1) {
      buttonDisabled(nextButton, true);
      buttonDisabled(lastButton, true);
    }

    if (currentPage === 1) {
      buttonDisabled(prevButton, false);
      buttonDisabled(firstButton, false);
    }
    removeChildren();
    updateSlicers(itemsPerPage);
    const slicedArray = sliceArray(array, firstSlicer, secondSlicer);

    outputArray(slicedArray);
    currentPage++;
    buttonDisabled(prevButton, false);
    buttonDisabled(firstButton, false);
    setPara();
  };

  const prevButtonClicked = () => {
    if (currentPage === 2) {
      buttonDisabled(prevButton, true);
      buttonDisabled(firstButton, true);
    }
    if (currentPage === numOfPages) {
      buttonDisabled(nextButton, false);
      buttonDisabled(lastButton, false);
    }

    removeChildren();
    updateSlicers(negItemsPerPage);
    outputArray(sliceArray(array, firstSlicer, secondSlicer));
    currentPage--;
    setPara();
  };

  const firstButtonClicked = () => {
    removeChildren();
    currentPage = 1;
    buttonDisabled(prevButton, true);
    buttonDisabled(firstButton, true);
    buttonDisabled(nextButton, false);
    buttonDisabled(lastButton, false);

    firstSlicer = 0;
    secondSlicer = 5;
    outputArray(sliceArray(array, firstSlicer, secondSlicer));
    setPara();
  };

  const lastButtonClicked = () => {
    removeChildren();
    currentPage = numOfPages;
    buttonDisabled(nextButton, true);
    buttonDisabled(lastButton, true);
    buttonDisabled(prevButton, false);
    buttonDisabled(firstButton, false);
    firstSlicer = array.length - 5;
    secondSlicer = array.length;
    outputArray(sliceArray(array, firstSlicer, secondSlicer));
    setPara();
  };

  init();

  nextButton.addEventListener("click", nextButtonClicked);
  prevButton.addEventListener("click", prevButtonClicked);
  lastButton.addEventListener("click", lastButtonClicked);
  firstButton.addEventListener("click", firstButtonClicked);
}
