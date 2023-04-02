
// const searchItem = async() => {
//     const searchInput = document.getElementById("search-input").value;
//     try{
//         const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealID}`;
//         const res = await fetch(url);
//         const allData =await res.json();
//         displayItem(allData.data);
//     }
//     catch(error){
//         errorShow("sorry something is worong !");
//     }

// }

const searchItem = () => {
    const mealID = document.getElementById("search-input").value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealID}`;
    fetch(url)
    .then(res => res.json())
    .then(meals => displayMealItem(meals.meals));
}

const displayMealItem = meals =>{

    const showSection = document.getElementById("show-search-item");
    showSection.innerText = ``;

    meals.forEach(meals => {
        const mealName = meals.strMeal;
        console.log(mealName);

        const pName = document.createElement("p");
        pName.innerText = mealName;
        showSection.appendChild(pName);

    });

}