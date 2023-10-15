import React from 'react';
import './AboutUs.css';

function AboutUsPage() {
  return (
    <div>
      <header className='aboutUs-header'>
        <a href="#" className="logo services-a">
          Group15
        </a>
        <div className="menu-toggle"></div>
        <nav className='aboutUs-nav'>
          <input type="checkbox" id="check" />
          <ul className="aboutus-links services-ul">
            <li className='services-li'>
              <a href="home" className='services-a'>Home</a>
            </li>
            <li className='services-li'>
              <a href="about" className='services-a'>About</a>
            </li>
            <li className='services-li'>
              <a href="services" className='services-a'>Services</a>
            </li>
            <li className='services-li'>
              <a href="contact" className='services-a'>Contact</a>
            </li>
          </ul>
          <label htmlFor="check" className="aboutus-checkbtn">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </label>
        </nav>
        <div className="clearfix"></div>
      </header>
      <section className="aboutus aboutUs-section">
        <h2 className='services-h2'>ABOUT US</h2>
        <p className='services-p'>
          Our Masters in Software Engineering program is committed to providing
          students with an exceptional learning experience in the field of
          Software Engineering. The program objective is to provide a
          professionally guided education in software engineering that prepares
          graduates to transition into a wide variety of career options,
          including those in industry, government, computing graduate programs,
          and professional education.
        </p>
      </section>
      <section className="abtprg aboutUs-section">
        <h2 className='services-h2'>ABOUT THE PROGRAM</h2>
        <p className='services-p'>
          Students enrolled in the Software Engineering program will acquire
          essential knowledge and practical expertise in the field of
          engineering software systems. This includes the capacity to
          effectively implement, test, and sustain such systems, as well as the
          ability to identify software requirements and needs within a specific
          application domain. Additionally, students will develop the skills
          necessary to design systems that fulfill desired needs while adhering
          to practical limitations and constraints. Software engineering
          principles have the potential to be applied across various domains,
          encompassing, but not limited to, video games, financial software,
          communication software, social network applications, personal
          computing, and scientific computing. In addition to acquiring
          knowledge and skills within the confines of the classroom, students
          will have the opportunity to apply this knowledge and these skills in
          practical, real-world contexts by means of internships or
          co-operative education experiences, as well as through course
          projects.
        </p>
      </section>
      <section className="choose aboutUs-section">
        <h2 className='services-h2'>WHY CHOOSE US?</h2>
        <ul className='services-ul'>
          <li className='services-li'>
            Benefit from a well-designed curriculum that balances coursework and
            practical skills
          </li>
          <li className='services-li'>
            Collaborate with students from different engineering disciplines on
            a capstone project
          </li>
          <li className='services-li'>
            Engage in cutting-edge research projects that are funded by
            university, industry and government agencies
          </li>
          <li className='services-li'>Learn from well-established faculty who work closely with industry</li>
          <li className='services-li'>
            Join a network of alumni who hold positions in leading companies such
            as Facebook, Google, Lockheed Martin, Microsoft and others
          </li>
        </ul>
      </section>
      <footer className='services-footer'>
        <p className='services-p'>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
};

export default AboutUsPage;
