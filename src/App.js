import React, { Component } from 'react';
import { Button, ButtonToolbar, Jumbotron, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";
import { Container, Footer } from 'mdbreact';
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
                        <NavItem eventKey={1} href="#">
                            Status
                        </NavItem>
                        <LinkContainer to="#projects">
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
            <img src="./pic.jpg" alt=""/>
        </header>
          <div class = "row align-items-center justify-content-center">
              <div
                  className="col-xs-12 col-sm-10 col-sm-offset-1 col-md-8 col-md-offset-2 col-lg-6 col-lg-offset-3 row align-items-center justify-content-center">
          <Jumbotron>
              {/* <h1 class = "text-left">Hello, world!</h1>
              <p class = "text-left">
Stephanie (italics) is a 3rd year student at the University of British Columbia that seeks to work with [insert very specific topic/area of work] that evokes the unknown (replace) - the lostness; the distance.
              </p>
              <p>
                  <Button bsStyle="primary">Learn more</Button>
              </p> */}

              <h2 className="display-4"><span role="img" aria-label="*Friendly wave*">👋</span> Hello, world!</h2>
                  <p className="lead">I'm Stephanie! &nbsp;I'm currently in my third year of the B.Comm. + B.Sc. in Computer Science program at UBC Vancouver. &nbsp;Outside my coursework, I've worked on the digital media teams of the
                  <a href = "http://cus.ca/about-us/"> Commerce
                      Undergraduate Society</a>, the
                  <a href="https://ubccsss.org/"> Computer Science Student Society</a>, and annual hackathon<a href="https://www.nwhacks.io/"> nwHacks</a>. &nbsp;I'm currently part of the <a href="https://www.ubclaunchpad.com/">UBC Launch Pad</a> software engineering club as well as the <a href="http://engineering.later.com/">engineering team</a> at <a href="https://later.com">Later</a>. My resume is available <a href="https://www.dropbox.com/s/jtxwfi2uzf0cgfk/Stephanie_Wu_Software_Engineer_Resume__Copy___Copy_%20%285%29%20%281%29.pdf?dl=0">here</a>. 
                      {/*I've also been a teaching assistant with <a href="https://www.cs.ubc.ca/students/undergrad/degree-programs">UBC Computer Science</a> and a singer with <a href="https://ubcacappella.com/about/">UBC A Capella</a>.*/}</p>
              <hr className="my-3"></hr>
              <p>In my spare time I like to share snippets on <a href="https://twitter.com/randomtechgirl">Twitter</a>,
                  contribute to projects on <a href="https://github.com/stephqwu">Github</a>, and clap on <a href="https://medium.com/@steph_w.">Medium</a>. </p>
              <br></br>
        <p><span role="img" aria-label="Glitter">💌</span> stephanie.wu@alumni.ubc.ca{/*<em>Algorithm solutions <a href="https://gist.github.com/stephqwu">here</a></em><span role="img" aria-label="Glitter">✨</span>*/}</p>
                  <p className="lead">
                      {/* <Button bsSize="large" href="#" role="button">Learn more</Button>
                      <a className="btn btn-primary btn-lg" href="#" role="button">See what I'm up to</a> */}
                  </p>

          </Jumbotron>
              </div>
          </div>
              <div className="section" name = "projects">
                  <div className="container">
                      <h3 className="section-head" id="portfolio"><span class="glyphicon glyphicon-console"></span> Projects</h3>
                      <br></br>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="thumbnail">
                                  <img
                                      src="./visualplanner-animation-web.gif"
                                      alt="https://mk0laterblog4vkmxupe.kinstacdn.com/wp-content/uploads/2018/03/visualplanner-animation-web.gif"></img>
                                      <div className="caption">
                                          <h3>Later Analytics for Facebook</h3>
                                          <p>Autonomously-developed product feature that collects, stores, and displays analytics insights to a user for their Facebook account. <a target="_blank" rel="noopener noreferrer" href="https://later.com/blog/photo-editing-trends/">Gif credit</a>.</p>
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
                                  <img src="./great.png" alt="Internado"></img>
                                      <div className="caption">
                                          <h3>Internado internship portal</h3>
                                          <p>Developed by <a target="_blank" rel="noopener noreferrer" href="https://github.com/ubclaunchpad/Internado">UBC Launch Pad</a>. <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/UzMP6n5OJ7F063dWyxDZe7Zd/Untitled?node-id=0%3A1">Design</a> by me. Walkthrough coming soon!!</p>
                                          <ButtonToolbar className = "pull-right">
                                              {/*<a target="_blank" href="https://internado.ubclaunchpad.com/">
                                              <Button bsStyle="link" bsSize="default">
                                                  Demo
                                              </Button></a>*/}
                                              <a target="_blank" rel="noopener noreferrer" href="https://www.figma.com/file/UzMP6n5OJ7F063dWyxDZe7Zd/Untitled?node-id=0%3A1">
                                                  <Button bsStyle="default" bsSize="default">
                                                      Figma
                                                  </Button>
                                              </a>
                                              <Button bsStyle="link" bsSize="default">About</Button>
                                          </ButtonToolbar>
                                      </div>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-md-6">
                              <a onClick={() => this.setState({ lgShow: true})}><div className="thumbnail">
                                  <img src="./chrome.PNG" alt="Screenshot of Photography portfolio"></img>
                                      <div className="caption">
                                          <h3>Photography portfolio</h3>
                                          <p>Custom portfolio site for my personal photography.</p>
                                          <ButtonToolbar className = "pull-right">
                                              <a target="_blank" rel="noopener noreferrer" href="https://stephsphotos.tumblr.com"><Button bsStyle="default" bsSize="default">
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
                                      alt="Temp"></img>
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
                                      alt="Temp"></img>
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
                                      alt="Temp"></img>
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
<br></br>
<br></br>
<Footer className="font-small pt-0">
                <Container>
                    <Row>
                        <div class="col-md-12 py-5">
                            <div class="mb-5 flex-center">
                            <a href="https://www.twitter.com/randomtechgirl" target="_blank" rel="noopener noreferrer" className="tw-ic"><i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3 fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a>
                            <a className="li-ic"><i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a>
                                <a href="https://www.github.com/stephqwu" target="_blank" rel="noopener noreferrer" className="gh-ic"><i className="fa fa-github fa-lg white-text mr-md-5 mr-3 fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a>
                                <a href="https://stackoverflow.com/users/10745784/s-wu" target="_blank" rel="noopener noreferrer" className="so-ic"><i className="fa fa-stack-overflow fa-lg white-text mr-md-5 mr-3 fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a>
                                {/* <a className="ins-ic"><i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a>*/}
                                <a href="https://medium.com/@steph_w." target="_blank" rel="noopener noreferrer" className="hr-ic"><i className="fa fa-medium fa-lg white-text mr-md-5 mr-3 fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a>
                                {/* <a href="https://www.pinterest.com/hmm__" target="_blank" rel="noopener noreferrer" className="pin-ic"><i className="fa fa-pinterest fa-lg white-text fa-2x" style={{color:"#D3D3D3", padding:12}}> </i></a> */}
                            </div>
                        </div>
                    </Row>
                </Container>
<br></br>
                <div className="footer-copyright text-center py-3">
                    <Container fluid>
                        &copy; {(new Date().getFullYear())} Stephanie Wu
                    </Container>
                </div>
            </Footer>   
<br></br>
<br></br>
</div>
 );
  }
}
export default App;

