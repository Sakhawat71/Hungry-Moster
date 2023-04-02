
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
        const mealPic =  meals.strMealThumb;

        const mealInfo = `
        <a href="">
        <div class="card cursor shadow">
          <img class="card-pic" style="width: 250px; height: 200px; border-radius: 10px 10px 0 0" src="${mealPic}">
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