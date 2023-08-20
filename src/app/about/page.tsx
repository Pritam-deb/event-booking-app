import NavBar from "@/components/navBar";
import Layout from "../layout";

export default async function AboutPage() {
  return (
    <Layout>
      <head>
        <title>About</title>
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <h3>About us here</h3>
      </body>
    </Layout>
  );
}
