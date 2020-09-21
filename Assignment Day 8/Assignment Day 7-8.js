let products = [
  {
    name: "Black T-Shirt",
    size: "L",
    color: "Black",
    price: 1200,
    image: "image1.jpg",
    description: "Good looking Black tshirt",
  },
  {
    name: "Gray Shirt",
    size: "L",
    color: "Gray",
    price: 1600,
    image: "image2.jpg",
    description: "Good looking Gray tshirt",
  },
  {
    name: "Black Trouser",
    size: "L",
    color: "Black",
    price: 2400,
    image: "image3.jpg",
    description: "Good looking Black Trouser",
  },
  {
    name: "Blue Jeans",
    size: "L",
    color: "Blue",
    price: 1700,
    image: "image4.jpg",
    description: "Good looking Blue Jeans",
  },
  {
    name: "Blue T-Shirt",
    size: "L",
    color: "Blue",
    price: 2200,
    image: "image5.jpg",
    description: "Good looking Bluetshirt",
  },
  {
    name: "Avenger Hoodie",
    size: "L",
    color: "Yellow",
    price: 3500,
    image: "image6.jpg",
    description: "Good looking Avenger Hoodie",
  },
  {
    name: "Wedding wear",
    size: "L",
    color: "Dark Blue",
    price: 4500,
    image: "image7.jpg",
    description: "Good looking Blue Shirt",
  },
  {
    name: "Gray T-Shirt",
    size: "L",
    color: "Gray",
    price: 2400,
    image: "product3.jpeg",
    description: "Good looking Gray Shirt",
  },
  {
    name: "Black office wear",
    size: "L",
    color: "Black",
    price: 4500,
    image: "image9.jpg",
    description: "Good looking Black Pant",
  },
  {
    name: "Blue Trouser",
    size: "L",
    color: "Blue",
    price: 2600,
    image: "image10.jpg",
    description: "Good looking Blue Trouser",
  },
  {
    name: "Black lining",
    size: "L",
    color: "Black",
    price: 3700,
    image: "product6.jpeg",
    description: "Good looking Red Top",
  },
  {
    name: "Black Top",
    size: "L",
    color: "Black",
    price: 1200,
    image: "image12.jpg",
    description: "Good looking Black top",
  },
 
];

cart = [];

function displayProducts(products, who = "productwrapper") {
  let productsString = "";

  products.forEach(function (product, index) {
    let { name, image, color, description, price, size } = product;

    if (who == "productwrapper") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="addToCart(${index})">Add to Cart</button>
        </p>
      </div>`;
    } else if (who == "cart") {
      productsString += ` <div class="product">
        <div class="prodimg">
          <img src="productimages/${image}" width="100%" />
        </div>
        <h3>${name}</h3>
        <p>Price : ${price}$</p>
        <p>Size : ${size}</p>
        <p>Color : ${color}</p>
        <p>${description}</p>
        <p>
          <button onclick="removeFromCart(${index})">Remove from Cart</button>
        </p>
      </div>`;
    }
  });

  document.getElementById(who).innerHTML = productsString;
}

displayProducts(products);

function searchProduct(searchValue) {
  let searchedProducts = products.filter(function (product, index) {
    let searchString =
      product.name + " " + product.color + " " + product.description;

    return searchString.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  displayProducts(searchedProducts);
}

function addToCart(index){
  cart.push(products[index]);
  displayProducts(cart, "cart");
}

function removeFromCart(index){
  cart.splice(index,1);
  displayProducts(cart, "cart");
}