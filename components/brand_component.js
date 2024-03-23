// Brand Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"

// Import SVGs
import BrandIcon from "../svgs/brand-icon";

export default function BrandComponent() {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <BrandIcon />
        </div>
      </div>
    </div>
  )
}
