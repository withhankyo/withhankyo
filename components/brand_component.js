// Brand Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"
import Link from "next/link"

// Import SVGs
import Brand from "../svgs/brand";

export default function BrandComponent() {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <Link href="/" className="brand-link" aria-label="Homepage"><Brand /></Link>
        </div>
      </div>
    </div>
  )
}
