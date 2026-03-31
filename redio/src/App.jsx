import React, { useState } from "react";

function FormExample() {
  // State for radio button (Gender)
  const [gender, setGender] = useState("Male");

  // State for dropdown (City)
  const [city, setCity] = useState("Delhi");

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gender: ${gender}, City: ${city}`);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Form Example</h2>

      <form onSubmit={handleSubmit}>
        {/* Radio Buttons */}
        <h3>Select Gender:</h3>

        <input
          type="radio"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />
        Male

        <br />

        <input
          type="radio"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />
        Female

        <br /><br />

        {/* Dropdown */}
        <h3>Select City:</h3>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
        >
          <option value="Delhi">Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Kolkata">Kolkata</option>
        </select>

        <br /><br />

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormExample;