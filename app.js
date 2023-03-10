
const createMealInfo = (meal,mealInput) =>{

    const mealTitle = meal.strMeal;
    const mealPic = meal.strMealThumb;
    // console.log(mealTitle);

    const mealInfo = `
    <a href="#meal-fullInfo-section" id="meal-fullInfo">
        <div class="card border-0" onclick="MealDetails(${meal.idMeal})" >
            <img class="card-pic" style="width: 18rem; border-radius: 10px 10px 0 0" src="${mealPic}" alt="">
            <div class="card-body">
                <h5 class="card-title text-center">${mealTitle}</h5>
            </div>
        </div> 
    </a>
    `
    
    const mealInfoSection = document.getElementById("meal-info-section");
    const mealInfoDiv = document.createComment('div');
    mealInfoDiv.innerText = mealInfo;
    mealInfoDiv.className = 'justify-content-center d-flex p-3 col-xm-1 col-sm-1 col-md-3';
    mealInfoSection.appendChild(mealInfoDiv);
};

const showMatchingMealInfo =(data,mealInput) =>{
    const meal = data.meals;
    console.log(meal);

    if(meal){
        meal.forEach(element => {
            createMealInfo(element,mealInput)
        });
    }
    else{
        const noMealFound = document.getElementById('no-meal-found');
        noMealFound.innerText = `Sorry! No meal found.`;
    }
}


const searchMeal = () => {
    const mealInput = document.getElementById("meal-input").value;
    
    if(mealInput){
        const noMealFound = document.getElementById('no-meal-found');
        noMealFound.innerText = ``;
        const mealInfoSection = document.getElementById('meal-info-section');
        mealInfoSection.innerHTML = ``;
        const mealDetailsSection = document.getElementById('meal-details-section');
        mealDetailsSection.innerHTML = ``;

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${mealInput}`
        fetch(url)
        .then(res => res.json())
        .then(data => {
            showMatchingMealInfo(data,mealInput);
        })
    }
    else{
        const noMealFound = document.getElementById("no-meal-found");
        noMealFound.innerText = `Type something inside the search bar`;
    }
}

document.getElementById("meal-submit").addEventListener("click",searchMeal);


/** */

const MealDetails = mealID =>{
    const mealClear = document.getElementById("meal-fullInfo-section");
    mealClear.innerHTML = ``;

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`
    fetch(url)
    .then(res => res.json())
    .then(data => MealDetailsDiv(data));
};

const MealDetailsDiv = data =>{
    
}