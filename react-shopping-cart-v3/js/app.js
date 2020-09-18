const PRODUCTS = [
  {
    id: 1,
    name: "Iphone 12",
    description: "Description 1",
    image: "https://via.placeholder.com/200x150",
    price: 1000,
    quantity: 20,
  },
  {
    id: 2,
    name: "Laptop DELL",
    description: "Description 2",
    image: "https://via.placeholder.com/200x150",
    price: 7,
    quantity: 1,
  },
];
let valueConfirm=false;
function App() {
  const [products, setProducts] = React.useState(PRODUCTS);
  const [isShowModal,setShowModal]=React.useState(false);
  const [showName,setShowName]=React.useState("");
  const [deleteProduct,setDeleteProduct]=React.useState({});

  const taxPercent = 0.1; // Thuế = 10% subTotal
  let numberItems = 0;
  let subTotal = 0;


  // Tính tổng số sản phẩm và tổng tiền
  for (const product of products) {
    numberItems += product.quantity;
    subTotal += product.price * product.quantity;
  }
  let tax = subTotal * taxPercent;


  function change() {
    setProducts([
      {
        id: 1,
        name: "Laptop DELL 1 ",
        description: "Description 1",
        image: "https://via.placeholder.com/200x150",
        price: 9999,
        quantity: 99,
      },
      {
        id: 2,
        name: "Laptop DELL 2",
        description: "Description 2",
        image: "https://via.placeholder.com/200x150",
        price: 7777,
        quantity: 11,
      },
    ]);
  }
  function add() {
    let newProduct = [...products]
    newProduct.push(
      {
        id: 3,
        name: "Laptop DELL",
        description: "Description 2",
        image: "https://via.placeholder.com/200x150",
        price: 7,
        quantity: 1,
      }
    )
    setProducts(newProduct);
  }

  function showModal(product){
    setShowModal(true);
    setDeleteProduct(product);
    setShowName(product.name);
  }

  function handleChangeQuantity(productId,event){
    let eventValue=event.target.value;
    let newProduct=[...products];
    let findProduct=products.findIndex(product=>product.id==productId);
    newProduct[findProduct].quantity=parseInt(eventValue);
    setProducts(newProduct);
  }

  function removeProduct(remove){
    remove=deleteProduct;
    let newProduct=products.filter(product=>product.id!=remove.id)
    setProducts(newProduct);
    setShowModal(false)
  }
  



  return (
    <main>
      <CartHeader numberItems={numberItems} title="Shopping Cart" add={add} />

      <CartBody products={products} showModal={showModal} handleChangeQuantity={handleChangeQuantity}/>

      <CartFooter subTotal={subTotal} tax={tax} numberItems={numberItems}/>

      <CartModal products={products} isVisible={isShowModal} showName={showName} handDelete={removeProduct} handCancel={()=>setShowModal(false)}/>

      <button onClick={change}>Change Cart</button><br />

    </main>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
