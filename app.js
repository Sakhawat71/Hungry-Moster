

const searchItem = () => {
    const mealName = document.getElementById("search-input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`;
    fetch(url)
    .then(res => res.json())
    .then(meals => displayMealItem(meals.meals));
}

const displayMealItem = meals =>{

    const showSection = document.getElementById("show-search-item");
    showSection.innerText = ``;
    const MealDetails = document.getElementById("Meal-details-section");
    MealDetails.innerText = ``;

    meals.forEach(meals => {
        const mealName = meals.strMeal;
        const mealPic =  meals.strMealThumb;
        const mealID = meals.idMeal;
        const mealInfo = `
        <a href="#Meal-details-section">
        <div onclick="showItemDetails('${mealID}')" class="card cursor costom-card shadow">
          <img class="card-pic" style="width: 260px; height: 200px; border-radius: 10px 10px 0 0" src="${mealPic}">
          <div class="card-body">
            <h5 class="card-title text-center">${mealName}</h5>
          </div>
        </div>
      </a>
        `;

        const searchResultDiv = document.createElement("div");
        searchResultDiv.className = 'search-div justify-content-center mb-3 p-0 d-flex col-xm-1 col-sm-1 col-md-3';
        searchResultDiv.innerHTML = mealInfo;
        showSection.appendChild(searchResultDiv);
    });
}





// ---------------------- Show meal details --------------------





const showItemDetails = mealID => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
    fetch(url)
    .then(res => res.json())
    .then(mealArray => showMealDetails(mealArray.meals));

}

const showMealDetails = mealsingel =>{

    const meal = mealsingel[0];
    const mealPic = meal.strMealThumb;
    const mealName = meal.strMeal;
    
    const mealDetails = document.getElementById("Meal-details-section");
    mealDetails.innerHTML = `
    <div id="meal-info" class="card px-0 pb-1 border-0 shadow col-xm-12 col-sm-12 col-md-6">
            
    <img id="meal-img" src="${mealPic}" class="card-img-top" style="border-radius: 10px 10px 0 0;">
    
    <div class="card-body">
        <h2 class="card-title text-center my-3">${mealName}</h2>
        <hr>
        <h4 class="card-title mt-4">Meal Ingredients</h4>
        <div id="meal-ingredients"></div>
    </div>
  </div>
    `;

    const Ingredients = document.getElementById("meal-ingredients");
    // meal.forEach(element => {
    //     console.log(element);
    // });
    const x = meal.strIngredient1;
    const y = meal.strMeasure1;
    console.log(y,x);
};