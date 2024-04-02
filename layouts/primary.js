// Primary layout
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react"
import { GoogleAnalytics } from "@next/third-parties/google"

// Import custom components
import FaviconComponent from "../components/favicon_component"
import MetaComponent from "../components/meta_component";
import BrandComponent from "../components/brand_component"
import CopyrightComponent from "../components/copyright_component"
import StatementComponent from "../components/statement_component"

export default function Primary({ children }) {
  return (
    <div className="primary" id="primary">
      <FaviconComponent />
      <MetaComponent />

      {/* Header */}
      <header className="universal header" id="header">
        <div className="universal-box">
          <div className="universal-row">
            <BrandComponent />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="universal main" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="universal footer" id="footer">
        <div className="universal-box">
          <div className="universal-row">
            <StatementComponent />
            <CopyrightComponent />
          </div>
        </div>
      </footer>
      <GoogleAnalytics gaId="AW-16510008621" />
    </div>
  )
}
