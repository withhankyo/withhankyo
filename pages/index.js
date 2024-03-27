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
      <div className="universal-left">
        <div className="page writer">
          <h1>A Fresh Perspective on Content Management</h1>
          <p>
            In today&apos;s fast-paced world, managing digital content shouldn&apos;t be a challenge—it should be enjoyable. This belief underpins <strong>hankyō</strong>, a new player in the Headless CMS arena.
          </p>
          <p>
            Tailored for micro- to small-scale projects, <strong>hankyō</strong> is designed for those seeking simplicity without compromising their project goals. Whether you&apos;re a web designer, a startup founder, or a developer, <strong>hankyō</strong> empowers you to achieve more with less.
          </p>
          <p>
            The launch of <strong>hankyō</strong> is scheduled for early summer 2024. Join our waiting list now to receive notification when we go live and secure your early access.
          </p>
          <p className="small">
            Fun fact, &lsquo;hankyō&rsquo; (反響) means &lsquo;echo&rsquo; or &lsquo;resonance&rsquo; in Japanese.
          </p>
        </div>
      </div>
      <div className="universal-right">
        <FormComponent />
        <div className="page writer" data-nosnippet>
          <p className="small">
            We value your privacy and trust above all. The information you provide will solely be used to keep you informed about our roadmap updates and to notify you when hankyō is ready for onboarding. We stand firmly against clutter – your inbox will remain free from unsolicited advertising, and your details will never be sold to third-party partners. Your digital peace is our promise.
          </p>
        </div>
      </div>
    </Layout>
  );
}
