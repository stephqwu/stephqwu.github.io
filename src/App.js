import React, { Component } from 'react';
import { Jumbotron, Nav, Navbar, NavItem, NavDropdown, MenuItem, Button } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <Navbar collapseOnSelect staticTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="#brand">S T E P H A N I E &nbsp; W U</a>
                    </Navbar.Brand>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        {/*<NavDropdown eventKey={3} title="Projects" pullRight={false} id="dropdown-menu-left">
                            <MenuItem header>SOFTWARE DEVELOPMENT</MenuItem>
                            <MenuItem eventKey={3.1} style={{left:0}}>Very personal and cool</MenuItem>
                            <MenuItem eventKey={3.2} style={{left:0}}>UBC course finder</MenuItem>
                            <MenuItem eventKey={3.3} style={{left:0}}>Trading app client</MenuItem>
                            <MenuItem header>SOFTWARE DESIGN</MenuItem>
                            <MenuItem eventKey={3.1} style={{left:0}}>Commerce Undergraduate Society of Vancouver</MenuItem>
                            <MenuItem eventKey={3.2} style={{left:0}}>nwHacks 2018 Registration</MenuItem>
                            <MenuItem header>DATA EXPERIMENTS AND ALGORITHM DESIGN</MenuItem>
                            <MenuItem eventKey={3.3} style={{left:0}}>Some sick python</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3}>View all projects</MenuItem>
                        </NavDropdown>*/}
                        <NavItem eventKey={1} href="#">
                            Status
                        </NavItem>
                        <LinkContainer to="/projects">
                        <NavItem eventKey={2} href="#">
                            Projects
                        </NavItem>
                        </LinkContainer>
                        <NavItem eventKey={3} href="#">
                            Experiments
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <img src="./pic.jpg" alt="temporary image"/>
        </header>
          <div class = "row align-items-center justify-content-center">
          <Jumbotron>
              {/* <h1 class = "text-left">Hello, world!</h1>
              <p class = "text-left">
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
              </p>
              <p>
                  <Button bsStyle="primary">Learn more</Button>
              </p> */}
              <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 row align-items-center justify-content-center">
              <h2 className="display-4">Hello, world!</h2>
              <p className="lead">I'm Stephanie! 😊 &nbsp;I'm currently working towards a Combined Major in Business and Computer
                  Science at the University of British Columbia, Vancouver. &nbsp;In the past, I've been a busy part of the
                  <a href = "http://cus.ca/about-us/"> Commerce
                      Undergraduate Society</a>, the
                  <a href="https://ubccsss.org/"> Computer Science Student Society</a>, and the team
                  behind mega-hackathon<a href="https://www.nwhacks.io/"> nwHacks</a>. &nbsp;{/*},
                  and am currently part of ______ and ______.*/ }
                   One day I hope to be a part of advancing a technology that betters lives.</p>
              <hr className="my-4"></hr>
              <p>Find snippets I've shared on <a href="https://twitter.com/randomtechgirl">Twitter</a>,
                  projects I've contributed to on <a href="https://github.com/stephqwu">Github</a>, and ideas I like
                  on <a href="https://medium.com/@steph_w.">Medium</a>.</p>
              <br></br>
                  <p className="lead">
                      {/* <Button bsSize="large" href="#" role="button">Learn more</Button>
                      <a className="btn btn-primary btn-lg" href="#" role="button">See what I'm up to</a> */}
                  </p>
      </div>
          </Jumbotron>
          </div>
              <div className="section">
                  <div className="container">
                      <h3 className="section-head" id="portfolio"><span class="glyphicon glyphicon-console"></span> Projects</h3>
                      <br></br>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Stay tuned</p>
                                      </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Stay tuned</p>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Stay tuned</p>
                                      </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Software design</p>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <br></br>
                      <h3 className="section-head" id="portfolio"><span className="glyphicon glyphicon-fire"></span> Experiments</h3>
                      <br></br>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Stay tuned</p>
                                      </div>
                              </div>
                          </div>
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Stay tuned</p>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default App;
