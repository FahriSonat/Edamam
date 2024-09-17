async function searchrecipes(){
    const searchInput = document.getElementById('searchInput').value;
    const recipesContainer = document.getElementById('recipesContainer');
    recipesContainer.innerHTML = "";

    try{ 
        
        const response = await fetch(`https://api.edamam.com/search?q=${searchInput}&app_id=7b39e3ea&app_key=
afc82b79a62afe75900f006aecc84ade`);
        if(!response.ok){
            throw new Error(`Http error! status : ${response.status}`);
        }
        wind
        const data = await response.json();
        console.log(data);

        data.hits.forEach(recipe => {
            const recipeHTML = 
            `<div class="recipe">
                <h2>${recipe.recipe.label}</h2>
                <img src="${recipe.recipe.image}" alt="{recipe.recipe.label}"></img>
                <p>Calories:${Math.round(recipe.recipe.calories)}</p>
                <p>Servings: ${recipe.recipe.yield}</p>
                <a href= "${recipe.recipe.url}" target="_blank">View Recipe</a>
                </div>
                `;

                recipesContainer.innerHTML += recipeHTML;
        });
    } catch (error) {
        console.log("Error fetching recipes:", error);
    }
}
