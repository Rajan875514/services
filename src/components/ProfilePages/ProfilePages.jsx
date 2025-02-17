import React from "react";
import { useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProfilePage.scss";
import serviceProviders from "../Features/serviceProvider";

const ProfilePage = () => {
  const { id } = useParams();
  const provider = serviceProviders.find((p) => p.id === parseInt(id));

  if (!provider) {
    return <h2 className="text-center mt-5">Service Provider Not Found</h2>;
  }

  return (
    <section className="profile-section container mt-5">
      <div className="profile-container">
        <aside className="profile-img-container">
          <img
            src={provider.image}
            alt={provider.name}
            className="profile-img rounded-circle"
          />
        </aside>
        <div className="profile-text">
          <h1>{provider.name}</h1>
          <p><strong>Category:</strong> {provider.category}</p>
          <p><strong>Location:</strong> {provider.location}</p>
          <p><strong>Rating:</strong> ⭐ {provider.rating} / 5</p>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
          </p>
          <button className="btn btn-primary mt-3">Contact Now</button>
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
