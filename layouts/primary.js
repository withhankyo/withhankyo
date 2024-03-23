// Primary layout
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React, { useEffect } from "react"

// Import custom components
import FaviconComponent from "../components/favicon_component"
import MetaComponent from "../components/meta_component";
import BrandComponent from "../components/brand_component"
import MenuComponent from "../components/menu_component"
import SocialNetworksComponent from "../components/social_networks_component"
import CopyrightComponent from "../components/copyright_component"

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
            <MenuComponent />
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
            <SocialNetworksComponent />
            <div className="universal-row">
              <CopyrightComponent />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
