function changeContent(){
    var i = Math.floor(Math.random() * recipes.length);
    document.getElementById("demo").innerHTML=`

    <div class="container shadow-lg py-4">
        <div class="caard min-vh-100 row bg-white">

          <div class="image col-md-4 position-relative bg-danger">
            <span class="position-absolute bg-white px-2 py-1 mt-3 rounded-5">
              <i class="fa-solid fa-star" style="color: #ffd43b"></i> 4.6
              (289reviews)
            </span>
            <div class="position-absolute span-image bg-white rounded-3 shadow-lg">
              <div class="text-center justify-content-around d-flex gap-3">
                <div>
                <i class="fa-regular fa-clock" style="color: #e16900;"></i>
                <p>Prep Time</p>
                <p class="fw-bold">20 min</p>
              </div>
              <div>
                <i class="fa-solid fa-fire-burner" style="color: #fb2c26;"></i>
                <p>Cook Time</p>
                <p class="fw-bold">30 min</p>
              </div>
              <div>
                <i class="fa-solid fa-users" style="color: #2b7fff;"></i>
                <p>Servings</p>
                <p class="fw-bold">4 people</p>
              </div>
              </div>
            </div>
            <img class="w-100 h-100 object-fit-cover" src=${recipes[i].img}/>
          </div>

          <div class="content col-md-8 py-4">
            <span class="Intermediate px-2 py-1 rounded-4 me-2"
              >Intermediate</span
            >
            <span class="Asian px-2 py-1 rounded-4">Asian</span>

            <div class="card-header d-flex">
              <div>
                <h2 class="mt-3 text-black fw-bolder">Chicken Tikka Masala</h2>
                <p>Rich and creamy Indian curry with tender chicken pieces</p>
              </div>
              <div class="two-icons ms-auto pe-4 d-flex gap-3 bg-transparent">
                <i
                  class="icon-bookmark fa-solid fa-bookmark fa-rotate-by rounded-3 py-2 px-3"
                  style="color: #f54a00; --fa-rotate-angle: 0deg"
                ></i>
                <i
                  class="icon-share fa-solid fa-share-nodes rounded-3 py-2 px-3"
                  style="color: #f54a00"
                ></i>
              </div>
            </div>

            <div class="warning p-3 rounded-3 d-flex gap-3">
              <div class="warning-icon pt-2">
                <i
                  class="fa-solid fa-triangle-exclamation"
                  style="color: #fb2c36"
                ></i>
              </div>

              <div class="warning-header">
                <span class="warning-h">Extended Preparation Time</span><br />
                <span class="warning-p"
                  >This recipe requires more than 45 minutes to prepare. Plan
                  accordingly!</span
                >
              </div>
            </div>

            <!-- mn bootstrap -->
    <ul class="nav nav-tabs py-4" id="myTab" role="tablist">
  <li class="nav-item" role="presentation">
    <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true"><i class="fa-solid fa-list-check"></i> Ingredients</button>
  </li>


  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Instructions-tab" data-bs-toggle="tab" data-bs-target="#Instructions-tab-pane" type="button" role="tab" aria-controls="Instructions-tab-pane" aria-selected="false"><i class="fa-brands fa-readme"></i> Instructions</button>
  </li>


  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Nutrition-tab" data-bs-toggle="tab" data-bs-target="#Nutrition-tab-pane" type="button" role="tab" aria-controls="Nutrition-tab-pane" aria-selected="false"><i class="fa-solid fa-chart-pie"></i> Nutrition</button>
  </li>

  <li class="nav-item" role="presentation">
    <button class="nav-link" id="Chefis-Tips-tab" data-bs-toggle="tab" data-bs-target="#Chefis-Tips-tab-pane" type="button" role="tab" aria-controls="Chefis-Tips-tab-pane" aria-selected="false" Chefis-Tips><i class="fa-solid fa-lightbulb"></i> Chef's Tips</button>
  </li>
</ul>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
    <ul class="ul-section overflow-auto">
      <li class="d-flex gap-2 align-items-start pt-4 pb-2">
        <div class="li-section rounded-circle">1</div>
        <span class="span-font">600g chicken breast, cubed</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">2</div>
        <span class="span-font">1 cup plain yogurt</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">3</div>
        <span class="span-font">2 tablespoons tikka masala paste</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">4</div>
        <span class="span-font">400ml coconut cream</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">5</div>
        <span class="span-font">1 onion, diced</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">6</div>
        <span class="span-font">4 cloves garlic, minced</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">7</div>
        <span class="span-font">2 tablespoons ginger, grated</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">8</div>
        <span class="span-font">400g canned tomatoes</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-circle">9</div>
        <span class="span-font">Fresh cilantro for garnish</span>
      </li>
    </ul>
  </div>


  <div class="tab-pane fade" id="Instructions-tab-pane" role="tabpanel" aria-labelledby="Instructions-tab" tabindex="0">
    <li class="d-flex gap-2 align-items-start pt-4 pb-2">
        <div class="li-section rounded-3 px-3 py-2">1</div>
        <span class="span-font">Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-3 px-3 py-2">2</div>
        <span class="span-font">Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-3 px-3 py-2">3</div>
        <span class="span-font">In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-3 px-3 py-2">4</div>
        <span class="span-font">Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes.</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-3 px-3 py-2">5</div>
        <span class="span-font">Stir in coconut cream and remaining yogurt. Add chicken back to the pan.</span>
      </li>
      <li class="d-flex gap-2 align-items-start py-2">
        <div class="li-section rounded-3 px-3 py-2">6</div>
        <span class="span-font">Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.</span>
      </li>
  </div>


  <div class="tab-pane fade" id="Nutrition-tab-pane" role="tabpanel" aria-labelledby="Nutrition-tab" tabindex="0">

    <div class="container">
<div class="row g-5 pt-3">

<div class="col-6">
<div class="nutri-card d-flex justify-content-lg-between align-items-center p-3 shadow-sm rounded-3">
<span class="icon-c">🔥</span>
<div class="label">Calories</div>
<div>
<div class="value fw-bold">450 kcal</div>
</div>
</div>
</div>

<div class="col-6">
<div class="nutri-card d-flex justify-content-between align-items-center p-3 shadow-sm rounded-3">
<span class="icon-c">🏋️‍♂️</span>
<div class="label">Protein</div>
<div>
<div class="value fw-bold">38g</div>
</div>
</div>
</div>

<div class="col-6">
<div class="nutri-card d-flex justify-content-between align-items-center p-3 shadow-sm rounded-3">
<span class="icon-c">🌾</span>
<div class="label">Carbs</div>
<div>
<div class="value fw-bold">24g</div>
</div>
</div>
</div>

<div class="col-6">
<div class="nutri-card d-flex justify-content-between align-items-center p-3 shadow-sm rounded-3">
<span class="icon-c">🩸</span>
<div class="label">Fat</div>
<div>
<div class="value fw-bold">22g</div>
</div>
</div>
</div>

<div class="col-6">
<div class="nutri-card d-flex justify-content-between align-items-center p-3 shadow-sm rounded-3">
<span class="icon-c">🌿</span>
<div class="label">Fiber</div>
<div>
<div class="value fw-bold">4g</div>
</div>
</div>
</div>

<div class="col-6">
<div class="nutri-card d-flex justify-content-between align-items-center p-3 rounded-3">
<span class="icon-c">🍬</span>
<div class="label">Sodium</div>
<div>
<div class="value fw-bold">760mg</div>
</div>
</div>
</div>

</div>
</div>

  </div>


  <div class="tab-pane fade" id="Chefis-Tips-tab-pane" role="tabpanel" aria-labelledby="Chefis-Tips-tab" tabindex="0">
                <div class="chefteps p-3 rounded-3 mt-4 d-flex gap-3">
              <div class="chefteps-icon pt-2">
                <i class="fa-solid fa-check px-2 py-1" style="color: #ffffff;"></i>
              </div>

              <div class="chefteps-header">
                <span class="chefteps-p"
                  >Marinate chicken overnight for deeper flavor</span
                >
              </div>
            </div>

            <div class="chefteps p-3 rounded-3 mt-4 d-flex gap-3">
              <div class="chefteps-icon pt-2">
                <i class="fa-solid fa-check px-2 py-1" style="color: #ffffff;"></i>
              </div>

              <div class="chefteps-header">
                <span class="chefteps-p"
                  >Marinate chicken overnight for deeper flavor</span
                >
              </div>
            </div>

            <div class="chefteps p-3 rounded-3 mt-4 d-flex gap-3">
              <div class="chefteps-icon pt-2">
                <i class="fa-solid fa-check px-2 py-1" style="color: #ffffff;"></i>
              </div>

              <div class="chefteps-header">
                <span class="chefteps-p"
                  >Marinate chicken overnight for deeper flavor</span
                >
              </div>
            </div>

            <div class="chefteps p-3 rounded-3 mt-4 d-flex gap-3">
              <div class="chefteps-icon pt-2">
                <i class="fa-solid fa-check px-2 py-1" style="color: #ffffff;"></i>
              </div>

              <div class="chefteps-header">
                <span class="chefteps-p"
                  >Marinate chicken overnight for deeper flavor</span
                >
              </div>
            </div>
  </div>
</div>

<button onclick="changeContent()" class="try ms-4 mt-3 rounded-3 shadow-lg">Try Another Recipe</button>
          </div>
        </div>
      </div>

`
}

const recipes = [
  {
    title: "French Onion Soup",
    img:"./images/image2.avif",
    rating: 4.7,
    reviews: 267,
    prepTime: "15 min",
    cookTime: "60 min",
    servings: 4,
    level: "Intermediate",
    cuisine: "Mediterranean",
    ingredients: [
      "4 large onions, thinly sliced",
      "1/2 cup white wine",
      "1 liter beef broth",
      "4 tablespoons butter"
    ],
    instruction: [
      "Melt butter in a large pot and caramelize onions for 40 minutes.",
      "Add white wine and deglaze the pot.",
      "Add beef broth, bay leaves, and thyme. Simmer 20 minutes.",
      "Toast baguette slices.",
      "Top soup with bread and cheese, then broil 3-5 minutes."
    ],
    nutrition: {
      calories: 380,
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg"
    }
  },

  {
    title: "Chicken Alfredo Pasta",
    rating: 4.8,
    reviews: 421,
    img:"./images/imgi2_photo.webp",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: 3,
    level: "Easy",
    cuisine: "Italian",
    ingredients: [
      "250g fettuccine pasta",
      "2 chicken breasts, sliced",
      "1 cup heavy cream",
      "1 cup grated parmesan",
      "2 tablespoons butter"
    ],
    instruction: [
      "Cook pasta until al dente.",
      "Sauté chicken until golden.",
      "Melt butter, add cream and parmesan to form sauce.",
      "Mix pasta with sauce and chicken.",
      "Serve hot with parsley."
    ],
    nutrition: {
      calories: 520,
      protein: "32g",
      carbs: "45g",
      fat: "22g",
      fiber: "3g",
      sodium: "640mg"
    }
  },

  {
    title: "Beef Tacos",
    rating: 4.2,
    reviews: 310,
    img:"./images/imgi3_photo.webp",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: 4,
    level: "Easy",
    cuisine: "Mexican",
    ingredients: [
      "500g ground beef",
      "1 packet taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1 cup cheddar cheese"
    ],
    instruction: [
      "Brown beef in a skillet.",
      "Add taco seasoning and water; let simmer.",
      "Warm tortillas.",
      "Fill tortillas with beef, lettuce, and cheese.",
      "Serve immediately."
    ],
    nutrition: {
      calories: 290,
      protein: "20g",
      carbs: "28g",
      fat: "12g",
      fiber: "2g",
      sodium: "760mg"
    }
  },

  {
    title: "Vegetable Stir Fry",
    rating: 4.6,
    reviews: 189,
    img:"./images/imgi4_photo.webp",
    prepTime: "15 min",
    cookTime: "10 min",
    servings: 2,
    level: "Easy",
    cuisine: "Asian",
    ingredients: [
      "1 bell pepper, sliced",
      "1 carrot, sliced",
      "1 broccoli head, chopped",
      "2 tablespoons soy sauce",
      "1 tablespoon sesame oil"
    ],
    instruction: [
      "Heat oil in a wok.",
      "Add garlic then vegetables; stir fry 5 minutes.",
      "Add soy sauce and sesame oil.",
      "Cook another 2 minutes.",
      "Serve over rice or noodles."
    ],
    nutrition: {
      calories: 210,
      protein: "8g",
      carbs: "32g",
      fat: "6g",
      fiber: "5g",
      sodium: "540mg"
    }
  },

  {
    title: "Margherita Pizza",
    rating: 4.9,
    reviews: 502,
    img:"./images/imgi5_photo.webp",
    prepTime: "25 min",
    cookTime: "15 min",
    servings: 2,
    level: "Intermediate",
    cuisine: "Italian",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "200g fresh mozzarella",
      "Fresh basil leaves",
      "1 tablespoon olive oil"
    ],
    instruction: [
      "Spread pizza dough on a tray.",
      "Add tomato sauce evenly.",
      "Place mozzarella slices and basil.",
      "Bake at high heat for 12–15 minutes.",
      "Drizzle olive oil before serving."
    ],
    nutrition: {
      calories: 430,
      protein: "19g",
      carbs: "50g",
      fat: "14g",
      fiber: "3g",
      sodium: "720mg"
    }
  }
];




// console.log("hallooooooo");