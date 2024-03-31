// Thank You Page
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Import built-in Next.js components and libraries
import React from "react";

// Import the layout
import Layout from "../layouts/primary";

export default function Index() {
  return (
    <Layout>
      <div className="page writer" data-nosnippet>
        <h1>Thank you! ツ</h1>
        <p>
          We&apos;ll keep you updated as we move towards launch day.
          <br />
          We can&apos;t wait for you to be part of our journey and discover the simplicity that hankyō offers, just as much as we enjoy it.
        </p>
        <p className="small">
          <strong>Fun fact:</strong> The name &apos;hankyō&apos; (反響) translates to &apos;echo&apos; or &apos;resonance&apos; in Japanese, inspired by our vision for your content. Just like echoes, we believe your content should reach and resonate with a wide audience, effortlessly distributed across the digital landscape.
        </p>
      </div>
    </Layout>
  );
}
