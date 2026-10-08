function VendorCard() {
  const vendor = {
    name: "Mahallah Cafe",
    location: "Mahallah Dining Area",
    openHours: "8:00 AM - 8:00 PM",
    isOpen: true
  };

  return (
    <article className="vendor-card">
      <div className="vendor-logo">
        {vendor.name.charAt(0)}
      </div>

      <h3>{vendor.name}</h3>
      <p>{vendor.location}</p>
      <p>{vendor.openHours}</p>

      <span className={vendor.isOpen ? "status open" : "status closed"}>
        {vendor.isOpen ? "Open now" : "Closed"}
      </span>
    </article>
  );
}

export default VendorCard;