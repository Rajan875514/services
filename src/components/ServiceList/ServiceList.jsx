
import { useEffect, useState } from "react";

const ServiceList = ({ searchQuery }) => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/services") // ✅ Correct URL
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("Fetched Data:", data);  // Debugging
        setServices(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  // Filter services based on search query (Category & Location)
  const filteredServices = services.filter((service) => {
    const matchesCategory = searchQuery.category
      ? service.category.toLowerCase().includes(searchQuery.category.toLowerCase())
      : true;

    const matchesLocation = searchQuery.location
      ? service.location.toLowerCase().includes(searchQuery.location.toLowerCase())
      : true;

    const matchesTitle = service.title.toLowerCase().includes(searchQuery.title.toLowerCase());

    return matchesCategory && matchesLocation && matchesTitle;
  });

  return (
    <div>
      <h2>Available Services</h2>
      {loading && <p>Loading services...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {filteredServices.length > 0 ? (
        filteredServices.map((service) => (
          <div key={service._id}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p><strong>Location:</strong> {service.location}</p>
            <p><strong>Category:</strong> {service.category}</p>
          </div>
        ))
      ) : (
        <p>No services found.</p>
      )}
    </div>
  );
};

export default ServiceList;
