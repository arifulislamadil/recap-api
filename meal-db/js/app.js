const searchBtn = ()=>{
    const searchField = document.getElementById("search-field");
    const searchFieldValue = searchField.value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldValue}`)
    .then(res=>res.json())
    .then(data=>displayMeal(data.meals))
}

const displayMeal=(meals)=>{
    const mealsContainer = document.getElementById("meals-container");
    mealsContainer.innerHTML=""
    for(const meal of meals){
        const div=document.createElement("div");
        div.classList.add("single-div")
        div.innerHTML=`
        <h3>Id: ${meal.idMeal}</h3>
        <h3>Title: ${meal.strMeal}</h3>
        <img class="meal-thumb" src=${meal.strMealThumb}>
        `

        mealsContainer.appendChild(div);
        
    }
    
}

