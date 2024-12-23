import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { meta } from "../../content_option";
import skater from "../../assets/images/test.gif";
import hypir from "../../assets/images/hypir.png";
import afm from "../../assets/images/kherani.png";
import reform from "../../assets/images/reform_img.jpg";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <div className="mb-5 po_items_ho">
              <div className="po_item">
                <img src={skater} alt="" />
                <div className="content">
                  <p>TailTap: For Skateboarders
                  </p>
                  <a href={'https://github.com/mcneilr2/tailtap.io'}>Github Repo</a>
                </div>
              </div>
              <div className="po_item">
                <img src={hypir} alt="graduate thesis" />
                <div className="content">
                  <p>Automation of a broadband infrared hyperspectroscopy apparatus
                  </p>
                  <a href={'https://open.library.ubc.ca/soa/cIRcle/collections/ubctheses/24/items/1.0401866'}>UBC Master's Dissertation</a>
                </div>
              </div>
              <div className="po_item">
                <img src={afm} alt="undergraduate research" />
                <div className="content">
                  <p>A one-step, tunable method of selective reactive sputter deposition as a wrinkling approach for silver/polydimethylsiloxane for electrically conductive pliable surfaces
                  </p>
                  <a href={'https://www.nature.com/articles/s41378-022-00420-z'}>Nature Microsystems & Nanoengineering</a>
                </div>
              </div>
              <div className="po_item">
              <img src={reform} alt="undergraduate research" />
              <div className="content">
                  <p>REFORM
                  </p>
                  <a href={'https://www.reformsaddle.com/'}>Materials Specialist</a>
                </div>
              </div>
        </div>
      </Container>
    </HelmetProvider>
  );
};
