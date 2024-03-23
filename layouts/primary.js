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
import SocialNetworksComponent from "../components/social_networks_component"
import CopyrightComponent from "../components/copyright_component"

export default function Primary({ children }) {
  // Effect
  // useEffect(() => {
  //   (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
  //     .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
  //     n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
  //     (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
  //     ml('account', '614948');
  // }, [])

  return (
    <div className="primary" id="primary">
      <FaviconComponent />
      <MetaComponent />
      <header className="universal header" id="header">
        <div className="universal-box">
          <div className="universal-row">
            <BrandComponent />
          </div>
        </div>
      </header>
      <main className="universal main" id="main">
        <div className="universal-box">
          <div className="universal-row">
            {children}
          </div>
        </div>
      </main>
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
