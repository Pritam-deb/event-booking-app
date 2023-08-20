import NavBar from "@/components/navBar";
import Layout from "../layout";

export default async function AboutPage() {
  return (
    <Layout>
      <head>
        <title>Events</title>
      </head>
      <body>
        <header>
          <NavBar />
        </header>
        <h3>Events List</h3>
      </body>
    </Layout>
  );
}
