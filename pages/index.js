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
          In today&apos;s fast-paced world, managing digital content shouldn&apos;t be a hurdle—it should be a pleasure. That&apos;s the core belief driving <strong>hankyō</strong>, your new partner in the world of Headless CMS.
        </p>
        <p>
          Unlike traditional CMS platforms that overwhelm with complexity, <strong>hankyō</strong> embraces minimalism. By streamlining the content management process, <strong>hankyō</strong> enables you to concentrate on what truly matters: your vision, your content, your peace.
        </p>
        <p>
          Designed for micro- to small-scale projects, <strong>hankyō</strong> is for everyone who craves simplicity without sacrificing their project goals. Whether you&apos;re a web designer, a startup founder, or a developer, <strong>hankyō</strong> empowers you to achieve more with less.
        </p>
        <p>
          The upcoming launch of <strong>hankyō</strong> is in early summer 2024. We invite you to join our invitation list today for early access.
        </p>
      </div>

      <FormComponent />
    </Layout>
  );
}
