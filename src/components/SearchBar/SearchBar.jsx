// import "../SearchBar/SearchBar.scss"; // Ensure correct spelling of the file name
// import { useState } from "react";

// const SearchBar = ({ onSearch }) => {
//   const [selectedCategory, setSelectedCategory] = useState("");
//   const [location, setLocation] = useState("");

//   const handleSearch = () => {
//     onSearch({ category: selectedCategory, location });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         gap: "20px",
//         flexWrap: "wrap", // Makes it responsive on smaller screens
//         padding: "20px",
//         backgroundColor: "#f8f9fa",
//         borderRadius: "8px",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         width: "100%", // Allows responsiveness
//         maxWidth: "1400px", // Ensures a max width
//         margin: "0 auto", // Centers the container
//       }}
//     >
//       {/* Category Dropdown */}
//       <select
//         value={selectedCategory}
//         onChange={(e) => setSelectedCategory(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "250px", // Fixed width for consistency
//           maxWidth: "100%", // Makes it responsive
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//           fontSize: "1rem",
//           transition: "border-color 0.3s",
//         }}
//       >
//         <option value="">Select Category</option>
//         <option value="Plumbing">Plumbing</option>
//         <option value="Electrician">Electrician</option>
//         <option value="Cleaning">Cleaning</option>
//         <option value="Carpentry">Carpentry</option>
//       </select>

//       {/* Location Input */}
//       <input
//         type="text"
//         placeholder="Enter Location..."
//         value={location}
//         onChange={(e) => setLocation(e.target.value)}
//         style={{
//           padding: "10px",
//           width: "250px", // Fixed width for uniformity
//           maxWidth: "100%", // Prevents overflow
//           borderRadius: "5px",
//           border: "1px solid #ccc",
//           fontSize: "1rem",
//           transition: "border-color 0.3s",
//         }}
//       />

//       {/* Search Button */}
//       <button
//         onClick={handleSearch}
//         style={{
//           padding: "10px 20px",
//           background: "#007bff",
//           color: "white",
//           border: "none",
//           borderRadius: "5px",
//           cursor: "pointer",
//           fontSize: "1rem",
//           transition: "background-color 0.3s",
//         }}
//         onMouseOver={(e) => (e.target.style.background = "#0056b3")}
//         onMouseOut={(e) => (e.target.style.background = "#007bff")}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchBar;



import "../SearchBar/SearchBar.scss";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [location, setLocation] = useState("");

  const handleSearch = () => {
    onSearch({ category: selectedCategory, location });
  };

  return (
    <div className="search-bar-container">
      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="search-input"
      >
        <option value="">Select Category</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Electrician">Electrician</option>
        <option value="Cleaning">Cleaning</option>
        <option value="Carpentry">Carpentry</option>
      </select>

      {/* Location Input */}
      <input
        type="text"
        placeholder="Enter Location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="search-input"
      />

      {/* Search Button */}
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
