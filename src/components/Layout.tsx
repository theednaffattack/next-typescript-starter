import * as React from "react";
import Head from "next/head";

import MyLink from "./MyLink/MyLink";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <MyLink prefetch pathn href="/" name="home">
          <a>Home</a>
        </MyLink>{" "}
        |{" "}
        <MyLink prefetch pathn href="/cars" name="cars">
          <a>Cars</a>
        </MyLink>{" "}
        |{" "}
        <MyLink prefetch pathn href="/login" name="login">
          <a>Login</a>
        </MyLink>{" "}
      </nav>
    </header>
    {children}
    <footer>
      <hr />
      <span>Made with ❤️ by Eddie Naff</span>
    </footer>
  </div>
);

export default Layout;
