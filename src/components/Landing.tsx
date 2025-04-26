import {
  Companies,
  Footer,
  Header,
  Hero,
  SectionOne,
  SectionThree,
  SectionTwo,
} from "./Landing/index";

const Landing = () => {
  return (
    <div className="mx-[125px] dark">
      <Header />
      <Hero />
      <Companies />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  );
};

export default Landing;
