// Menu Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"

export default function MenuComponent() {
  const scrollToForm = () => {
    document.getElementById("form").scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <div className="menu">
      <div className="menu-box">
        <div className="menu-item">
          <button onClick={scrollToForm}>Join Our Invitation List</button>
        </div>
      </div>
    </div>
  )
}
