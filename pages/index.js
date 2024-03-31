// Index Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react";
import FormComponent from "../components/form_component"

// Import the layout
import Layout from "../layouts/primary";

export default function Index() {
  return (
    <Layout>
      <div className="page writer">
        <h1>The Headless CMS that stands for Content Managed Simply</h1>
        <p>
          Managing digital content can often feel more complicated than it needs to be. That&apos;s where hankyō comes in. We&apos;re not here to revolutionise the world of Headless CMS. Instead, we&apos;re bringing something maybe even more important: simplicity and efficiency.
        </p>
        <p>
          Designed specifically for micro to small projects, hankyō is about cutting through the clutter. It&apos;s crafted for those who believe in the power of focus and minimalism — be they web designers, startup founders, developers, or anyone driving digital projects forward. With hankyō, you&apos;re not just managing content; you&apos;re effortlessly aligning your projects with your vision—without all the unnecessary frills.
        </p>
        <p>
          As we prepare for our early summer 2024 launch, we invite you to join our waitlist. Get notified when we go live and secure your place for early access.
        </p>
      </div>
      <FormComponent />
      <div className="page writer" data-nosnippet>
        <p className="small">
          We value your privacy and trust above all. The information you provide will solely be used to keep you informed about our roadmap updates and to notify you when hankyō is ready for onboarding. We stand firmly against clutter – your inbox will remain free from unsolicited advertising, and your details will never be sold to third-party partners. Your digital peace is our promise.
        </p>
      </div>
    </Layout>
  );
}
