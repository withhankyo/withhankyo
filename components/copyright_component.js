// Copyright Component
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"

export default function CopyrightComponent() {
  // Effect
  useEffect(() => {
    var date = new Date()
    var fullYear = date.getFullYear()
    document.getElementsByClassName("year")[0].innerHTML = fullYear
  }, [])

  return (
    <div className="copyright" data-nosnippet>
      <div className="copyright-box">
        <div className="copyright-item">
          <p className="font-size-xxs">hankyō &copy; <span className="year"></span></p>
        </div>
      </div>
    </div>
  )
}
