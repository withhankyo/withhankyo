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
      <div className="universal-left">
        <div className="page writer">
          <h1>Thank you! ツ</h1>
          <p>
            As things go forward we will keep in the loop until launch day.
            <br />
            We are looking forward to having you onboard and enjoy the simplicity of hankyō as we do.
          </p>
          <p>
            Fun fact, &lsquo;hankyō&rsquo; (反響) means &lsquo;echo&rsquo; or &lsquo;resonance&rsquo; in Japanese.
          </p>
        </div>
      </div>
    </Layout>
  );
}
