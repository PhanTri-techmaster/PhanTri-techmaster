function CartHeader({add,title,numberItems,comfirm}) {
  return (
    <header className="container">
    <h1>{title}</h1>

    <ul className="breadcrumb">
      <li>Home</li>
      <li>{title}</li>
    </ul>
    <span className="count">{numberItems} items in the bag</span>

    <button onClick={add}>Add Product</button>
  </header>
  );
}