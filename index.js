const express = require('express');
const app = express();
const port = 3000;

const coffeeData = [
  {
    coffee_id: 1,
    coffee_title: "Caffè Latte",
    coffee_detail: "Rich full-bodied espresso in steamed milk lightly topped with foam. A caffè latte is simply a shot or two of bold tasty espresso with fresh sweet steamed milk over it.",
    coffee_thumbnails: "caffe_latte_thumbnail.png",
    coffee_poster: "caffe_latte_poster.jpg"
  },
  {
    coffee_id: 2,
    coffee_title: "Cappuccino",
    coffee_detail: "Espresso with steamed milk topped with a deep layer of foam.",
    coffee_thumbnails: "cappuccino_thumbnail.png",
    coffee_poster: "cappuccino_poster.jpg"
  },
  {
    coffee_id: 3,
    coffee_title: "Caffè Mocha",
    coffee_detail: "Espresso with bittersweet mocha sauce and steamed milk topped with sweetened whipped cream. Delightful.",
    coffee_thumbnails: "caffe_mocha_thumbnail.png",
    coffee_poster: "caffe_mocha_poster.jpg"
  },
  {
    coffee_id: 4,
    coffee_title: "Caramel Macchiato",
    coffee_detail: "Espresso combined with vanilla-flavoured syrup, milk and caramel sauce over ice. A Starbucks classic, chilled for a classic summer’s day. To our signature espresso we add a creamy mix of vanilla syrup and cold milk poured over ice; it’s then topped with our proprietary buttery caramel sauce. Sweet!",
    coffee_thumbnails: "caramel_macchiato_thumbnail.png",
    coffee_poster: "caramel_macchiato_poster.jpg"
  },
  {
    coffee_id: 5,
    coffee_title: "Vanilla Sweet Cream Cold Brew",
    coffee_detail: "Just before serving, our slow-steeped Cold Brew is topped with a delicate float of house-made vanilla sweet cream that cascades throughout the cup.",
    coffee_thumbnails: "vanilla_sweet_cream_cold_brew_thumbnail.png",
    coffee_poster: "vanilla_sweet_cream_cold_brew_poster.jpg"
  },
  {
    coffee_id: 6,
    coffee_title: "Cold Brew",
    coffee_detail: "Slow-steeped, small-batch and super smooth. To create our signature recipe, our team spent months experimenting with different brew times and coffee varietals. We specifically developed the Starbucks® Cold Brew Blend to heighten the rich, naturally sweet flavor created during the cold brewing process.",
    coffee_thumbnails: "cold_brew_thumbnail.png",
    coffee_poster: "cold_brew_poster.jpg"
  },
  {
    coffee_id: 7,
    coffee_title: "Mango Passion Frappuccino",
    coffee_detail: "A tropical mango and passionfruit infusion, perfectly blended with a fruity hibiscus tea and ice.",
    coffee_thumbnails: "mango_passion_frappuccino_thumbnail.png",
    coffee_poster: "mango_passion_frappuccino_poster.jpg"
  },
  {
    coffee_id: 8,
    coffee_title: "Raspberry Currant Frappuccino",
    coffee_detail: "Made with freshly brewed Teavana® tea, blended juice and ice.",
    coffee_thumbnails: "raspberry_currant_frappuccino_thumbnail.png",
    coffee_poster: "raspberry_currant_frappuccino_poster.jpg"
  },
  {
    coffee_id: 9,
    coffee_title: "Coffee Frappuccino",
    coffee_detail: "Starbucks® coffee is blended with nonfat milk and ice for a sip on the light side.",
    coffee_thumbnails: "coffee_frappuccino_thumbnail.png",
    coffee_poster: "coffee_frappuccino_poster.jpg"
  },
  {
    coffee_id: 10,
    coffee_title: "Mocha Frappuccino",
    coffee_detail: "Mocha sauce, Frappuccino® roast coffee, milk and ice all come together for a mocha flavor that'll leave you wanting more.",
    coffee_thumbnails: "mocha_frappuccino_thumbnail.png",
    coffee_poster: "mocha_frappuccino_poster.jpg"
  }
];

app.get('/coffees', (req, res) => {
  res.json(coffeeData);
});

app.listen(port, () => {
  console.log(`Coffee API is running on http://localhost:${port}`);
});
