
// function test(){
//     const click = document.getElementById("meal-submit");
//     const value = document.getElementById("meal-input").value;
//     click.addEventListener("click", function(){
//         console.log(value);
//         console.log("clicked");
//     })
// };

// test();

// const url = `https://www.themealdb.com/api/json/v1/1/search.php?s= ${mealInput}`
//         fetch(url)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//         })
const showMatchingMealInfo =(data,mealInput) =>{

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
