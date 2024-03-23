// Brand Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"

// Import SVGs
import Brand from "../svgs/brand";

export default function BrandComponent() {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <Brand />
        </div>
      </div>
    </div>
  )
}
