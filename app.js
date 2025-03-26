const all_products = [
  {
    id: 1,
    image: "assets/card/card1.avif",
    title: "Chocolate Fudge Cake",
    desc: " A rich and decadent chocolate fudge cake with a moist interior, topped with glossy chocolate ganache and chocolate shavings.",
    price: 25,
  },
  {
    id: 2,
    image: "assets/card/card2.jpg",
    title: "Red Velvet Cupcakes",
    desc: " Soft and moist red velvet cupcakes topped with creamy cream cheese frosting and a sprinkle of red crumbs.",
    price: 18,
  },
  {
    id: 3,
    image: "assets/card/card3.jpg",
    title: "Strawberry Shortcake",
    desc: " A light and fluffy strawberry shortcake layered with whipped cream and fresh strawberry slices, topped with a dusting of powdered sugar.",
    price: 30,
  },
  {
    id: 4,
    image: "assets/card/card4.jpg",
    title: "Blueberry Cheesecake",
    desc: " A creamy and rich blueberry cheesecake with a graham cracker crust, topped with a glossy blueberry compote and fresh berries.",
    price: 28,
  },
  {
    id: 5,
    image: "assets/card/card5.jpg",
    title: "Tiramisu",
    desc: " A classic Italian tiramisu with layers of coffee-soaked ladyfingers, mascarpone cream, and cocoa powder dusting.",
    price: 35,
  },
  {
    id: 6,
    image: "assets/card/card6.jpg",
    title: "Lemon Tart",
    desc: " A zesty lemon tart with a buttery shortbread crust, topped with powdered sugar and fresh mint leaves.",
    price: 22,
  },
  {
    id: 7,
    image: "assets/card/card7.jpg",
    title: "Chocolate Eclairs",
    desc: " Light choux pastry filled with silky vanilla cream, topped with a rich chocolate glaze.",
    price: 20,
  },
  {
    id: 8,
    image: "assets/card/card8.jpg",
    title: "Raspberry Macarons",
    desc: " Delicate and colorful raspberry-flavored macarons with a smooth buttercream filling.",
    price: 15,
  },
  {
    id: 9,
    image: "assets/card/card9.jpg",
    title: "Carrot Cake",
    desc: " A moist carrot cake with spiced flavors, layered with cream cheese frosting and topped with walnuts.",
    price: 27,
  },
  {
    id: 10,
    image: "assets/card/card10.jpg",
    title: "Coconut Cream Pie",
    desc: " A flaky pie crust filled with creamy coconut custard, topped with whipped cream and toasted coconut flakes.",
    price: 30,
  },
  {
    id: 11,
    image: "assets/card/card11.jpg",
    title: "Matcha Green Tea Cake",
    desc: " A light and fluffy cake infused with matcha green tea, layered with matcha-flavored cream frosting.",
    price: 32,
  },
  {
    id: 12,
    image: "assets/card/card12.avif",
    title: "Black Forest Cake",
    desc: " A classic Black Forest cake with layers of chocolate sponge, whipped cream, and cherry filling, topped with chocolate shavings.",
    price: 34,
  },
  {
    id: 13,
    image: "assets/card/card13.jpg",
    title: "Fruit Tart",
    desc: " A buttery tart crust filled with vanilla custard and topped with an assortment of fresh fruits.",
    price: 26,
  },
  {
    id: 14,
    image: "assets/card/card14.jpg",
    title: "Mocha Mousse Cake",
    desc: " A creamy and decadent mocha mousse cake with layers of chocolate and coffee-flavored mousse.",
    price: 29,
  },
  {
    id: 15,
    image: "assets/card/card15.jpg",
    title: "Vanilla Bean Cupcakes",
    desc: " Fluffy vanilla bean cupcakes topped with smooth vanilla buttercream and decorative sprinkles.",
    price: 18,
  },
  {
    id: 16,
    image: "assets/card/card16.jpg",
    title: "Salted Caramel Brownies",
    desc: " Fudgy chocolate brownies with a gooey salted caramel swirl, topped with sea salt flakes.",
    price: 24,
  },
  {
    id: 17,
    image: "assets/card/card17.jpg",
    title: "Peanut Butter Cheesecake",
    desc: " A rich and creamy peanut butter cheesecake with a chocolate cookie crust, topped with peanut butter drizzle.",
    price: 33,
  },
  {
    id: 18,
    image: "assets/card/card18.jpg",
    title: "Apple Crumble Pie",
    desc: " A warm apple pie with a flaky crust, filled with cinnamon-spiced apples and topped with a buttery crumble.",
    price: 28,
  },
  {
    id: 19,
    image: "assets/card/card19.jpg",
    title: "Mango Mousse Cake",
    desc: " A light and creamy mango mousse cake with layers of mango puree and sponge cake.",
    price: 31,
  },
  {
    id: 20,
    image: "assets/card/card20.jpg",
    title: "Chocolate Lava Cake",
    desc: " A warm and gooey chocolate lava cake with a molten chocolate center, served with vanilla ice cream.",
    price: 25,
  },
];

const fun = (data) => {
  var products = "";
  data.map((value) => {
    products += `
    <div class="col-lg-3 col-md-6 py-2 ">
                <div class="card h-100 align-item-center">
                <div class="card-img">
                    <img id="cimg" src= ${value.image}>
                    </div>
                        <div class="card-body">
                            <h2 class="py-2">${value.title}</h2>
                            <p>${value.desc}</p>
                            <h5 class="position-absolute text-success Rs mt-5 bottom-0">Price:$${value.price}</h5>
                            <i class="fa-solid fa-cart-shopping"  id="fav-cart" onclick="Click(cartFun)"  ></i>
                            <i class="fa-solid fa-heart" id="fav-wish"></i>
                            <span class="badge bg-success badge"><i class="fa-solid fa-star"></i>4.9</span>
                        </div>
                </div>
            </div>
        `;
  });
  document.getElementById("cardRow").innerHTML = products;
};
fun(all_products);

function searchProducts() {
  var searchList = document.getElementById("searchInput").value.toUpperCase();

  if (searchList.length === 0) {
    document.getElementById("searchProduct").innerHTML = "";
  } else {
    var filterdata = all_products.filter((value) =>
      value.title.toUpperCase().includes(searchList)
    );

    var searchProducts = "";
    filterdata.map((value) => {
      searchProducts += `
      <div class="col-lg-3 col-md-6 py-2 ">
                <div class="card h-100 align-item-center">
                <div class="card-img">
                    <img id="cimg" src= ${value.image} >
                    </div>
                        <div class="card-body">
                            <h2 class="py-2">${value.title}</h2>
                            <p>${value.desc}</p>
                            <h5 class="position-absolute text-success Rs mt-5 bottom-0">Price:$${value.price}</h5>
                            <i class="fa-solid fa-cart-shopping"  id="fav-cart" onclick="Click(cartFun)"  ></i>
                            <i class="fa-solid fa-heart" id="fav-wish"></i>
                            <span class="badge bg-success badge"><i class="fa-solid fa-star"></i>4.9</span>
                        </div>
                </div>
            </div>
      `;
    });
  }

  document.getElementById("searchProduct").innerHTML = searchProducts;
}

const display_products = () => {
  product_list = "";
  all_products.map((value) => {
    product_list += `
  <div class="col-lg-3 col-md-6 py-2 ">
                <div class="card h-100 align-item-center">
                <div class="card-img">
                    <img id="cimg" src= ${value.image}>
                    </div>
                        <div class="card-body">
                            <h2 class="py-2">${value.title}</h2>
                            <p>${value.desc}</p>
                            <h5 class="position-absolute text-success Rs mt-5 bottom-0">Price:$${value.price}</h5>
                            <i class="fa-solid fa-cart-shopping"  id="fav-cart" onclick="cartFun(${value.id})"  ></i>
                            <i class="fa-solid fa-heart" id="fav-wish" onclick="wishFun(${value.id})"></i>
                            <span class="badge bg-success badge"><i class="fa-solid fa-star"></i>4.9</span>
                        </div>
                </div>
            </div>
    `;
  });
  document.getElementById("cardRow").innerHTML = product_list;
};
display_products();

var cart = [];

var wish = [];

var cartcount = 0;

var Totalamount = 0;

const countFun = () => {
  document.getElementById('cartcount').innerHTML = cartcount;
  document.getElementById('cartcount').style.display = (cartcount > 0) ? 'inline' : 'none'
}

const cartFun = (valueId) => {
  var product = all_products.find((a) => a.id === valueId);
  alert( "🎉 Sweet choice! Your dessert has been added to the cart!")

  var addon_products = cart.find((a) => a.id === valueId);
  if(addon_products){
    addon_products.quantity++;
  }
  else{
    Totalamount =Totalamount + product.price
    product.quantity = 1;
    cart.push(product);
  }
  document.getElementById('totalamount').innerHTML = `Totalamount.${Totalamount}`
  cartcount++;
  countFun();
  cart_products(cart);
};

const cart_products = (products) => {
  var cart_list = "";
  products.map((value) => {
    cart_list += `
    <tr>
      <td>${value.title}</td>
      <td>${value.price} </td>
      <td>${value.quantity}</td>
      <td>${value.price*value.quantity}</td>
      <td><button onclick='remove_cart(${value.id})' class="btn btn-danger">-</button></td>

    </tr>
    `;

  });

  document.getElementById('cartRow').innerHTML = cart_list ;

};
cart_products(cart)


const remove_cart = (valueId) => {
  var removal_product = all_products.find((a) => a.id === valueId);
    alert("🍰 Item removed! But there’s always room for more sweets!");

  
  if(removal_product.quantity > 1){
    removal_product.quantity--;
    Totalamount=Totalamount-product.price
  }
  else{
    Totalamount=Totalamount-removal_product.price*removal_product.quantity

    cart = cart.filter((a) => a.id !== valueId);
  }
  document.getElementById('totalamount').innerHTML = `Totalamount.${Totalamount}`
  cartcount--;
  countFun();
  cart_products(cart)
  
}

const wishcountFun = () => {
  document.getElementById("wishcount").innerHTML = wish.length;
  
  
  document.getElementById("wishcount").style.display =
    wish.length > 0 ? "inline" : "none";
};

const wishFun = (valueID) => {
  var product = all_products.find((a) => a.id === valueID)
  alert("💕 Craving saved! You can check it out anytime.")
  var addon_products = wish.find((a) => a.id === valueID)
  if(addon_products){
    addon_products.quantity
  }
  else{
    product.quantity = 1
    wish.push(product);
    wishcountFun();
    
  }
  
  wishlist_products(wish);
  
}

const wishlist_products = (product) => {
  var wish_List ='';
  if(product.length == 0){
    wish_List = `<tr>
    <td colspan='6' >Your wishlist is empty</td>
    </tr>`
  }
  else{

  
  product.map((value) => {
    wish_List += `
    <tr>
    <td><img id="cimg" src= ${value.image}></td>             
      <td>${value.title}</td>
      <td>${value.price} </td>
      <td>${value.quantity}</td>
      <td>${value.price * value.quantity}</td>
      <td><button onclick='removal_cart(${
        value.id
      })' class="btn btn-danger">-</button></td>

    </tr>
    `;
  })
}
  document.getElementById('wishRow').innerHTML = wish_List
  
}
wishlist_products(wish)

const removal_cart = (valueID) => {
  
  alert("💖 Dessert removed from your wishlist. Changed your mind?");
  wish = wish.filter((a) => a.id !== valueID)
  
  wishlist_products(wish);
  wishcountFun();
};

function SubmitFun(event){
  event.preventDefault()

  var Email = document.getElementById('Email').value;
  var Password = document.getElementById('Password').value;

  if(Email == 'Naveen@123' && Password == 'Naveen'){
    window.location.href='home.html'
  }
  else{
    document.getElementById("ptag").innerHTML = "inavlid username or password";
    document.getElementById("ptag").style.color = "red";
  }
}