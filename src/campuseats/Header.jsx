function Header() {
  const cartCount = 0;

  return (
    <header>
      <h1>CampusEats</h1>

      <nav>
        <a href="#">Vendors</a>
        <a href="#">My Orders</a>
        <a href="#">
          Cart <span>{cartCount}</span>
        </a>
      </nav>
    </header>
  );
}

export default Header;