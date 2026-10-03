function MenuItemCard() {
  const item = {
    name: "Nasi Ayam",
    description: "Rice served with chicken and sauce",
    price: 7.5,
    available: true
  };

  return (
    <article className="menu-item-card">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>RM {item.price.toFixed(2)}</p>

      <button className="btn" disabled={!item.available}>
        {item.available ? "Add to cart" : "Sold out"}
      </button>
    </article>
  );
}

export default MenuItemCard;