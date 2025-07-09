const menu = [
  {
    id: 1,
    title: "Broccolli & Sun-dried Omelette",
    category: "Breakfast",
    price: 120.0,
    img: "./menuItems/brocolliomlette.png",
    desc: `Broccoli, sun-dried tomatoes, omelette with a side of homemade fries. `,
    rating: "★★★☆☆",
  },
  {
    id: 2,
    title: "Eggs Florentine Sandwich",
    category: "Breakfast",
    price: 110.0,
    img: "./menuItems/eggflorentinesand.jpg",
    desc: `Poached eggs, hollandaise sauce, beef bacon and spinach on a sour dough bun with a side of mix greens and homemade fries.`,
    rating: "★★★★☆",
  },
  {
    id: 3,
    title: "Broccolli Soup",
    category: "Soup",
    price: 60.0,
    img: "./menuItems/brocollisoup.png",
    desc: `Broccoli, ginger, miso paste, peas and pumpkin seeds, giving a tasty`,
    rating: "★★☆☆☆",
  },
  {
    id: 4,
    title: "Chicken Soup",
    category: "Soup",
    price: 70.0,
    img: "./menuItems/chickensoup.jpg",
    desc: `Diced chicken and cream served with a lemon wedge, croutons, and some chopped Parsely.`,
    rating: "★★★★☆",
  },
  {
    id: 5,
    title: "Chicken Picatta",
    category: "Lunch",
    price: 240.0,
    img: "./menuItems/chickenpicatta.png",
    desc: `Chicken cutlet in creamy mushroom and caramelized onion sauce served with fettuccine cream pasta and a freshly cooked sauteed . `,
    rating: "★★★★★",
  },
  {
    id: 6,
    title: "Mongolian Beef",
    category: "Lunch",
    price: 270.0,
    img: "./menuItems/mongolianbeef.jpg",
    desc: `Thin slices of caramelized beef in a soy ginger sauce tossed with nipped green onion served with white basmati rice.`,
    rating: "★★★☆☆",
  },
  {
    id: 7,
    title: "Grilled Salmon Steak",
    category: "Lunch",
    price: 350.0,
    img: "./menuItems/salmonsteak.jpg",
    desc: `Marinated Norwegian grilled salmon with your choice of butter, lemon sauce or teriyaki sauce served with white basmati rice.`,
    rating: "★★★★☆",
  },
  {
    id: 8,
    title: "Roasted Peaches and Honey Comb",
    category: "Desserts",
    price: 185.0,
    img: "./menuItems/roastedpeach.png",
    desc: `Roasted peaches with honeycomb crumbles and vanilla ice cream.`,
    rating: "★★★★☆",
  },
  {
    id: 9,
    title: "Lotus French Toast",
    category: "Desserts",
    price: 170.0,
    img: "./menuItems/lotusfrenchtoast.png",
    desc: `Lotus biscuit spread on French toast topped with vanilla ice cream.`,
    rating: "★★★☆☆",
  },
  {
    id: 10,
    title: "Moroccan Tea",
    category: "Drinks",
    price: 70.0,
    img: "./menuItems/moroccantea.png",
    desc: `Refreshing imported Moroccan Tea with mint leaves, served with sugar to your taste.`,
    rating: "★★★★☆",
  },
  {
    id: 11,
    title: "Spanish Latte",
    category: "Drinks",
    price: 95.0,
    img: "./menuItems/latte.jpg",
    desc: `Freshly brewed coffee slowly poured onto a layer of sweetened 
    condensed milk and topped with frothed milk. Flavour added to your taste.
    `,
    rating: "★★★★★",
  },
  {
    id: 12,
    title: "Water",
    category: "Drinks",
    price: 30.0,
    img: "./menuItems/water.jpg",
    desc: `Refreshing coldwater from our elite sources. Tip: ask for a lemon wedge and a mint leaf for extra freshness and a good detox!`,
    rating: "☆☆☆☆☆",
  },
];

const sectionCenter = document.querySelector(".section-center");
const btnContainer = document.querySelector(".btn-container");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(menuItems) {
  let displayMenu = menuItems.map((item) => {
    // in the last project we had only one index to be shown but here all of them
    // and item  holds every object index has been looped
    return `                                   
      <article class="menu-items">
            <img src="${item.img}" alt="${item.title}" class="photo">

            <div class="item-info">
                <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">${item.price.toFixed(2)}</h4>
                </header>
               <p class="item-text">
  ${item.desc}
</p>
<p class="rating">${item.rating}</p>

            </div>
        </article>
        `;
  });

  displayMenu = displayMenu.join(""); //string and make separated space because if not it won't be shown
  sectionCenter.innerHTML = displayMenu; // enter new things to the section the parent
}
//in any function that is loopping over make the parameter singular
function displayMenuButtons() {
  const categories = menu.reduce(
    (values, item) => {
      // imagine you have box named values or acc and your changable hand that is named item or currentItem

      if (!values.includes(item.category)) {
        //fa ana ba2ool law ma3esh fel box haga mn ely balf 3aleha e3malha add!!!
        values.push(item.category);
      }
      return values; //to do it again and again
    },
    ["All"] //initail value of all     categories = ["all", "lunch", "breakfast", "shakes", ...]
  );

  const categoryBtns = categories
    .map((category) => {
      // category meaning is like the first time is all the second time is breakfast
      //["all", "breakfast", "lunch", "shakes"] it's with me but array not html or string
      return `<button type="button" class="filter-btn" data-id="${category}">  ${category} </button>`;
    }) //html  (data-id howa filter ely be filter shewyat htmls ma3 ba3d)
    .join(""); // string
  btnContainer.innerHTML = categoryBtns; // to make have the buttons inside the main html element

  //بدل كل دوكيمنت
  const filterBtns = btnContainer.querySelectorAll(".filter-btn");
  // we put the the btnContainer that have all btns and we put them in filterBtns to loop one by one

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id; // current target betos 3ala target---data-id ely 3amelnaha fo2

      const menuCategory = menu.filter((menuItem) => {
        // function that also loops on menu on every food
        if (menuItem.category === category) {
          // if the food had the same category return them together
          return menuItem; //and to make sure that they loop
        }
      });
      if (category === "All") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
