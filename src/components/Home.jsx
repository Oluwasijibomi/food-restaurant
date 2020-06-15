import React from "react"
import {Jumbotron, Container} from "react-bootstrap"

class Home extends React.Component {
  render () {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Fluid jumbotron</h1>
          <h2>My Restaurant</h2>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    )
  }
}

export default Home 