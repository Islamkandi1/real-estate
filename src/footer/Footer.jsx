
import "./footer.css";
import { assets } from "../assets/images/assets";
import { NavLink } from 'react-router-dom';
const Footer = () => {
  // scroll=================================================
  function scroll(){
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  // * jsx code==========================
  return (
    <>
    <main className="footer">
      <section className="container   p-5">
        <section className="row row-cols-1 row-cols-md-3 g-4">
          <section className="col ">
            <section className="inner">
              <figure>
                <img src={assets.logo_dark} alt="logo" />
              </figure>
              <p className=" text-capitalize">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
            </section>
          </section>
          <section className="col ">
            <section className="inner  text-md-center">
              <h2 className="text-capitalize">company</h2>
              <ul>
                <li className="my-3">
                  <NavLink to="/" className="footer-link" onClick={scroll}>
                    home
                  </NavLink>
                </li>
                <li className="my-3">
                  <NavLink to="about" className="footer-link" onClick={scroll}>
                    about
                  </NavLink>
                </li>
                <li className="my-3">
                  <NavLink to="projects" className="footer-link" onClick={scroll}>
                    projects
                  </NavLink>
                </li>
                <li className="my-3">
                  <NavLink to="testimonials" className="footer-link" onClick={scroll}>
                    Testimonials
                  </NavLink>
                </li>
                <li className="my-3">
                  <NavLink to="contact" className="footer-link" onClick={scroll}>
                    contact us
                  </NavLink>
                </li>
              </ul>
            </section>
          </section>
          <section className="col">
            <section className="inner">
              <h2 className="text-capitalize mb-3">
                Subscribe to our newsletter
              </h2>
              <p className="mb-4">
                The latest news, articles, and resources, sent to your inbox
                weekly.
              </p>
              <form action="" className="d-flex" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Email"
                  className="form-control"
                />
                <button type="submit">Subscribe</button>
              </form>
            </section>
          </section>
        </section>
      </section>
    </main>
    </>
  );
};

export default Footer;
