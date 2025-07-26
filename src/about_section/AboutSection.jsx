
import { assets } from "./../assets/images/assets";
import "./about_section.css";
const AboutSection = () => {
  return (
    <>
      <section className="about-sec  overflow-hidden py-5 text-center">
        <section
          className="container"
        >
          <section className="text mb-4">
            <h2 className="head">
              <b>about</b>
              <span> Our Brand</span>
            </h2>
            <p className="head-p">
              Passionate About Properties, Dedicated to Your Vision
            </p>
          </section>
          <section className="row">
            <section
              className="col-11 mx-auto
            "
            >
              <section className="row px-4 gx-5 gy-3">
                <section className="col-12 col-md-6">
                  <section className="inner">
                    <img src={assets.brand_img} className="w-100" alt="" />
                  </section>
                </section>
                <section className="col-12 col-md-6 ">
                  <section className="inner text-start">
                    <section className="row row-cols-2 content">
                      <section className="col mb-3">
                        <section className="inner">
                          <h3>10+</h3>
                          <p className="text-capitalize">Years of Excellence</p>
                        </section>
                      </section>
                      <section className="col mb-3">
                        <section className="inner">
                          <h3>12+</h3>
                          <p className="text-capitalize">Projects Completed</p>
                        </section>
                      </section>
                      <section className="col mb-3">
                        <section className="inner">
                          <h3>20+</h3>
                          <p className="text-capitalize">
                            Mn. Sq. Ft. Delivered
                          </p>
                        </section>
                      </section>
                      <section className="col mb-3">
                        <section className="inner">
                          <h3>25+</h3>
                          <p className="text-capitalize">Ongoing Projects</p>
                        </section>
                      </section>
                    </section>
                    <p className="row-p mb-5">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book.
                    </p>
                    <button type="button" className="text-capitalize mt-btn">
                      learn more
                    </button>
                  </section>
                </section>
              </section>
            </section>
          </section>
        </section>
      </section>
    </>
  );
};

export default AboutSection;
