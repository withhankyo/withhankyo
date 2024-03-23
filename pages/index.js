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
        <h1>A New Approach to Content Management</h1>
        <p>
          In today's fast-paced world, managing digital content shouldn’t be a hurdle—it should be a pleasure. That’s the core belief driving hankyō, your new partner in the world of Headless CMS.
        </p>
        <p>
          Unlike traditional CMS platforms that overwhelm with complexity, hankyō embraces minimalism. By streamlining the content management process, hankyō enables you to concentrate on what truly matters: your vision, your content, your peace.
        </p>
        <p>
          Designed for micro- to small-scale projects, hankyō is for everyone who craves simplicity without sacrificing their project goals. Whether you're a web designer, a startup founder, or a developer, hankyō empowers you to achieve more with less.
        </p>
        <p>
          The upcoming launch of hankyō is in early summer 2024. We invite you to join our invitation list today for early access.
        </p>
        <p className="font-size-m">By the way, &lsquo;hankyō&rsquo; (反響) means &lsquo;echo&rsquo; or &lsquo;resonance&rsquo; in Japanese.</p>
      </div>

      <FormComponent />

    </Layout>
  );
}
