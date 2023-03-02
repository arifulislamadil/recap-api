const loadPhone = async (phones) => {
  const url = `https://openapi.programming-hero.com/api/phones?search=${phones}`;
  const res = await fetch(url);
  const data = await res.json();
  displayPhone(data.data);
};
// loadPhone();

const displayPhone = (phones) => {
  const phonesContainer = document.getElementById("phones-container");
  const displayNotFound = document.getElementById("not-found");
  const addLoader = document.getElementById("add-loader");
  // clear past history
  phonesContainer.innerHTML = "";

  //not found message
  if (phones.length == 0) {
    displayNotFound.classList.remove("d-none");
    // toggleSpinner(false);
    const showAll= document.getElementById("show-all");
    showAll.classList.add("d-none");
  } else {
    displayNotFound.classList.add("d-none");
    toggleSpinner(true);
    const showAll= document.getElementById("show-all");
    showAll.classList.remove("d-none");
  }
  const showAll= document.getElementById("show-all");
  // display 20 phones only
  if (phones.length > 10) {
    phones = phones.slice(0, 10);
   showAll.classList.remove("d-none");
  }else{
    showAll.classList.add("d-none");
  }

  //display all phones
  phones.map((phone) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card" style="width: 18rem;">
    <img  src=${phone.image} class="card-img-top img-fluid" alt="...">
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
      `;
    phonesContainer.appendChild(div);
  });
  toggleSpinner(false);
};

document.getElementById("search-btn").addEventListener("click", function () {
  //Start loader
  toggleSpinner(true);
  const searchfield = document.getElementById("search-field");
  const searchFildvalue = searchfield.value;
  loadPhone(searchFildvalue);
  searchfield.value = "";
});

const toggleSpinner = (isLoading) => {
  const loaderSection = document.getElementById("loader");
  if (isLoading) {
    loaderSection.classList.remove("d-none");
  } else {
    loaderSection.classList.add("d-none");
  }
};