// Brand Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"
import Link from "next/link"

// Import SVGs
import BrandIcon from "../svgs/brand-icon";

export default function BrandComponent() {
  return (
    <div className="brand">
      <div className="brand-box">
        <div className="brand-item">
          <Link href="/" class="brand-link"><BrandIcon /></Link>
        </div>
      </div>
    </div>
  )
}
