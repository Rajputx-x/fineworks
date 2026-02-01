'use client'
//import CaseStudy from "@/app/ui/CaseStudy";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import Hero3 from "@/app/ui/Hero/Hero3";
import LogoList from "@/app/ui/LogoList";
import MovingText from "@/app/ui/MovingText";
import PortfolioSlider2 from "@/app/ui/Slider/PortfolioSlider2";
import Portfolio2 from "@/app/ui/Portfolio/Portfolio2";
import Portfolio3 from "@/app/ui/Portfolio/Portfolio3";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import VideoModal from "@/app/ui/VideoModal";

const heroSocialLinks = [
  {
    name: 'Whatsapp',
    links: 'https://wa.me/+923206316386',
  },
  {
    name: 'Tiktok',
    links: 'https://www.tiktok.com/@fine.works5',
  },
];
const portfolioData = [
  {
    title: '3D Acrylic & Metal Lettering',
    subtitle: 'Specialty 01',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_35.jpeg',
    category: 'Premium Signage',
  },
  {
    title: 'Custom Neon Flex Signage',
    subtitle: 'Specialty 02',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_36.jpeg',
    category: 'Illuminated Signs',
  },
  {
    title: 'Laser-Cut Interior Decor',
    subtitle: 'Specialty 03',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_37.jpeg',
    category: 'Interior Design',
  },
  {
    title: 'Commercial Advertising Boards & Lightboxes',
    subtitle: 'Specialty 04',
    btnText: 'See Details',
    btnLink: '/portfolio/portfolio-details',
    imageUrl: '/images/portfolio_38.jpeg',
    category: 'Outdoor Advertising',
  },
];

export default function CreativePortfolioHome() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero3
        title="Fine Works <br > Advertisments"
        btnLink="contact"
        btnText={`Let's talk`}
        socialLinksHeading="Follow Us"
        heroSocialLinks="https://wa.me/+923206316386"
        bgImageUrl="/images/hero_bg_6.jpeg"
      />
      {/* End Hero Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="80" />
      {portfolioData.map((item, index) =>
        index % 2 === 0 ? (
          <Div key={index}>
            <Portfolio2
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ) : (
          <Div key={index}>
            <Portfolio3
              title={item.title}
              subtitle={item.subtitle}
              btnText={item.btnText}
              btnLink={item.btnLink}
              imageUrl={item.imageUrl}
              category={item.category}
            />
            <Spacing lg="100" md="70" />
          </Div>
        ),
      )}
      {/* End Portfolio Section */}

      {/* Start About Section */}
            <Div className="cs-shape_wrap_4">
              <Div className="cs-shape_4"></Div>
              <Div className="cs-shape_4"></Div>
              <Spacing lg="150" md="80" />
              <Div className="container">
                <Div className="row">
                  <Div className="col-lg-5 col-xl-4">
                    <SectionHeading
                      title="Lahore’s best Signage agency ever"
                      subtitle="Why Choose Us"
                      btnText="Learn More"
                      btnLink="/about"
                    />
                    <Spacing lg="45" md="45" />
                  </Div>
                  <Div className="col-lg-7 offset-xl-1">
                    <Div className="cs-half_screen">
                      <VideoModal
                        videoSrc="https://www.tiktok.com/@fine.works5/video/7572843753791032596"
                        bgUrl="/images/video_bg.jpeg"
                        variant="cs-style1 cs-size1"
                      />
                    </Div>
                  </Div>
                </Div>
              </Div>
            </Div>
            {/* End About Section */}

      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4">
           We combine durability with modern aesthetics, crafting stunning visual displays from premium acrylic and metal. Our state-of-the-art technology ensures every edge is sharp and every finish is flawless.
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      {/* End PortfolioSlider Section */}

      {/* Start Case Study Section 
      <Spacing lg="45" md="10" />
      <Div className="container">
        <SectionHeading
          title="Featured case study"
          subtitle="Case Study"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <CaseStudy
        title="Analysis lead <br /> more efficiently"
        bgUrl="/images/case_study_2.jpeg"
        href="/case-study/case-study-details"
        variant="cs-style2"
      />
      <CaseStudy
        title="Ubar food app <br /> case study"
        bgUrl="/images/case_study_1.jpeg"
        href="/case-study/case-study-details"
      />
      <Spacing lg="150" md="80" />
       End Case Study Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Transform Your Space with Our Bespoke Neon Lights and Intricate Laser-Cut Wall Art – Designed to Impress." />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      {/* <Div className="container">
        <LogoList />
      </Div> */}
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg_3.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
