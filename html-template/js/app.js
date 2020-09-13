const PRODUCTS= [
  {
  id:1,
  name:"Product 1",
  description: "Description 1",
  image: "https://via.placeholder.com/200x150",
  price: 100,
  quantity: 13
  },
  {
    id:2,
    name:"Product 2",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 20,
    quantity: 2 
  }
]
ReactDOM.render(
<main>
  <CartHeader/>
  <CartBody products={PRODUCTS} />
  <CartFooter products={PRODUCTS} />
</main>,
    document.getElementById("root")
);