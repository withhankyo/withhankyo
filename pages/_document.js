// Document
// // // // // // // // // // // // //
// // // // // // // // // // // // //
// // // // // // // // // // // // //

// Built-in Components
import Document, { Html, Head, Main, NextScript } from "next/document"
import Script from "next/script"

class MyDocument extends Document {
  // Initial Props
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
            id="cabin"
            src="https://cabin.hankyo.app/hello.js"
            strategy="beforeInteractive"
          />
        </Head>
        <body className="lock-menu scroll body" id="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
