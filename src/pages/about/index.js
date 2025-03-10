import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  meta,
  worktimeline,
  skills,
  pubs,
} from "../../data";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Who am I?</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <span>A </span>
              <span className="d-flex--bold">Multidisciplinary Software Engineer</span>
              <span> with a broad range of technical skills and practical experience including: </span>
                <br />
                <br />
                <ul>
                  <li>
                  Nanomaterials/Electronic Materials Development
                  </li>
                  <li>
                    Plasma/Optical/Condensed Matter Physics
                  </li>
                  <li>
                    Full Stack Development
                  </li>
                  <li>
                   Applied Machine Learning
                  </li>
                  <li>
                    Advanced Manufacturing Methods
                  </li>
                </ul>
            </div>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">What am I looking for?</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <span>I'm looking for Software Development roles which leverage my breadth of skills and experience while providing opportunities for both professional/technical growth. Some industries I am currently interested in are:</span>
                <br />
                <br />
                <ul>
                  <li>
                    Game Design & Physics Engines
                  </li>
                  <li>
                    Applied Machine Learning
                  </li>
                  <li>
                    Full Stack Development
                  </li>
                  <li>
                   Internet of Things
                  </li>
                  <li>
                    Applied Quantum Sciences
                  </li>
                </ul>
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <tr key={i}>
                      <th scope="row">{data.jobtitle}</th>
                      <td>{data.where}</td>
                      <td>{data.date}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lang="5">
            <h3 className="color_sec py-4">Publications</h3>
          </Col>
          <Col lg="7">
            {pubs.map((data, i) => {
              return (
                <div className="service_ py-4" key={i}>
                  <h5 className="service__title">{data.title}</h5>
                  <p className="service_desc">{data.description}</p>
                  <p className="service_date">{data.date}</p>
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
