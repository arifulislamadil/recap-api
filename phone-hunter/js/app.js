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
    phonesContainer.innerHTML="";

    //not found message
    if(phones.length==0){
        displayNotFound.classList.remove("d-none");
        
        
    }else{
        displayNotFound.classList.add("d-none")
     
    }
        // display 20 phones only 
  phones = phones.slice(0,20)
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
      phonesContainer.appendChild(div)
  });
};

document.getElementById("search-btn").addEventListener("click",function(){
    const searchfield = document.getElementById('search-field');
    const searchFildvalue = searchfield.value;
    loadPhone(searchFildvalue);

    searchfield.value = ''
})