import MobileMenu from "@/components/MobileMenu";
import Navbar from "@/components/Navbar";
import About from "@/sections/About";
import Home from "@/sections/Home";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Experience from "@/sections/Experience"
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NextSeo } from "next-seo";
import { GetStaticPropsContext } from "next";

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../messages/${locale}.json`)).default,
    },
  };
}

const Index = () => {
  const [nav, setNav] = useState(false);
  const openMenu = () => setNav(true);
  const closeMenu = () => setNav(false);

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: "DOMContentLoaded",
      initClassName: "aos-init",
      animatedClassName: "aos-animate",
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 400,
      easing: "ease",
      once: false,
      mirror: false,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <NextSeo
        title="Julia Couto — Desenvolvedora Full Stack"
        description="Portfólio de Julia Couto — Desenvolvedora Full Stack com foco em frontend e produto. Mais de 4 anos de experiência com React, Next.js, Node.js, Ruby on Rails e mais."
        canonical="https://ju-couto.vercel.app/"
        openGraph={{
          type: "website",
          url: "https://ju-couto.vercel.app/",
          title: "Julia Couto — Desenvolvedora Full Stack",
          description:
            "Desenvolvedora Full Stack com foco em frontend e produto. Confira meus projetos e entre em contato.",
          locale: "pt_BR",
          siteName: "Julia Couto",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            name: "google-site-verification",
            content: "Ok-TWguQLx3U9d9yqJ-ReTp9pIe59kUp032tlA2Qk-k",
          },
          {
            name: "keywords",
            content:
              "desenvolvedora full stack, frontend, React, Next.js, Node.js, Ruby on Rails, Julia Couto, portfolio",
          },
        ]}
      />
      <div className="overflow-x-hidden">
        <div>
          <MobileMenu nav={nav} closeMenu={closeMenu} />
          <Navbar openMenu={openMenu} />
          <Home />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </>
  );
};

export default Index;