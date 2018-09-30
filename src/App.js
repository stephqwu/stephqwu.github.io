import React, { Component } from 'react';
import { Button, ButtonToolbar, Jumbotron, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import './App.css';
import MyLargeModal from './containers/Modal.js';


class App extends Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            lgShow: false
        };
    }

  render() {

        let lgClose = () => this.setState({lgShow: false});

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
              <div
                  className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 row align-items-center justify-content-center">
          <Jumbotron>
              {/* <h1 class = "text-left">Hello, world!</h1>
              <p class = "text-left">
                  This is a simple hero unit, a simple jumbotron-style component for calling
                  extra attention to featured content or information.
Stephanie (italics) is a 3rd year student at the university of british columbia that seeks to work with [insert very specific topic/area of work] that evokes the unknown (replace) - the lostness; the distance. I have perfect pitch and am a classically trained pianist.
              </p>
              <p>
                  <Button bsStyle="primary">Learn more</Button>
              </p> */}

              <h2 className="display-4">👋 Hello, world!</h2>
                  <p className="lead">I'm Stephanie! &nbsp;I'm currently in my third year of the B.Comm. + B.Sc. in Computer Science program @ UBC Vancouver. &nbsp;Outside my coursework, I've worked on the digital media teams of the
                  <a href = "http://cus.ca/about-us/"> Commerce
                      Undergraduate Society</a>, the
                  <a href="https://ubccsss.org/"> Computer Science Student Society</a>, and the supersize annual hackathon<a href="https://www.nwhacks.io/"> nwHacks</a>. &nbsp;{/*,
                  and am currently part of ______ and ______.*/ }
                      I've also been a teaching assistant with <a href="https://www.cs.ubc.ca/students/undergrad/degree-programs">UBC Computer Science</a> and a singer with <a href="https://ubcacappella.com/about/">UBC A Capella</a>. Recently, I've joined the software engineering team <a href="https://www.ubclaunchpad.com/">UBC Launch Pad</a>. </p>
              <hr className="my-4"></hr>
              <p>In my spare time I like to share snippets on <a href="https://twitter.com/randomtechgirl">Twitter</a>,
                  contribute to projects on <a href="https://github.com/stephqwu">Github</a>, and clap on <a href="https://medium.com/@steph_w.">Medium</a>. </p>
              <br></br>
              <p>✨ <em>Algorithm solutions <a href="https://gist.github.com/stephqwu">here</a></em> ✨</p>
                  <p className="lead">
                      {/* <Button bsSize="large" href="#" role="button">Learn more</Button>
                      <a className="btn btn-primary btn-lg" href="#" role="button">See what I'm up to</a> */}
                  </p>

          </Jumbotron>
              </div>
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
                                          <p>Undetermined software development/design project.</p>
                                          <ButtonToolbar className = "pull-right">
                                              <Button bsStyle="link" bsSize="default">
                                                  Demo
                                              </Button>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
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
                                          <p>Web-app that parses and queries UBC metadata.</p>
                                          <ButtonToolbar className = "pull-right">
                                              <Button bsStyle="link" bsSize="default">
                                                  Demo
                                              </Button>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <a onClick={() => this.setState({ lgShow: true})}><div className="thumbnail">
                                  <img src="./chrome.PNG"></img>
                                      <div className="caption">
                                          <h3>Photography portfolio</h3>
                                          <p>Custom portfolio site for my personal photography.</p>
                                          <ButtonToolbar className = "pull-right">
                                              <a target="_blank" href="https://stephsphotos.tumblr.com"><Button bsStyle="default" bsSize="default">
                                                Demo
                                              </Button></a>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
                                      </div>
                              </div>
                              </a>
                              <MyLargeModal show={this.state.lgShow} onHide={lgClose}/>
                          </div>
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Large-scale_structure_of_light_distribution_in_the_universe.jpg"
                                      alt="A picture of the universe."></img>
                                      <div className="caption">
                                          <h3>Placeholder Image</h3>
                                          <p>Chrome extension for accessible notes.</p>
                                          <ButtonToolbar className = "pull-right">
                                              <Button bsStyle="link" bsSize="default">
                                                  Demo
                                              </Button>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
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
                                          <ButtonToolbar className = "pull-right">
                                              <Button bsStyle="link" bsSize="default">
                                                  Demo
                                              </Button>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
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
                                          <ButtonToolbar className = "pull-right">
                                              <Button bsStyle="link" bsSize="default">
                                                  Demo
                                              </Button>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
                                      </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
{/*<footer>
             /* <a href = "hackerrank.com"><img src = "https://static.brandfolder.com/hackerrank/logo/hackerrank-primary-logo.png"></img></a>
          </footer>*/}
  <Footer color="stylish-color-dark" className="page-footer font-small pt-4 mt-4">
                 <Container fluid className="text-center text-md-left">
<div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
                        <li className="list-inline-item"><a className="btn-floating btn-sm btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
                    </ul>
                </div>
    </Container>
</Footer>
          </div>
    );
  }
}
export default App;

