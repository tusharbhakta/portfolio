
import { Fragment } from "react";
import FeaturedProject from "../components/heroSection/featured-project";
import Hero from "../components/heroSection/hero";
import Technology from "../components/technology/technologies";
import ContactPage from "./contact";
import Head from "next/head";


function Home(projects) {
  return (
    <Fragment>
      <Head>
        <title>Tushar Bahkta</title>
        <meta name='description' content='width=device-width, initial-scale=1' />
      </Head>
      <Hero />
      <Technology />
      <FeaturedProject projects={projects} />
      <ContactPage />
    </Fragment>
  )
}



export default Home;
