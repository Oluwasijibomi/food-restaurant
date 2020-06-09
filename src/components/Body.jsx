import React from "react"
import {Carousel, Container, Row, Col} from "react-bootstrap"
import items from "../data/menu.json"
import DishComments from "./DishComments"

class Body extends React.Component {

  state = {
    selectedDish: null
  }

  selectNewDish = (item) => {
    return (
      this.setState({selectedDish: item})

    )
  }


  render() {
    return (
      <Container>
        <Row>
          <Col xs={6}>
          <Carousel>
            {items.map((item, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={item.image}
                    alt={item.name}
                    onClick={() => {
                      return (
                        this.selectNewDish(item)
                      )
                    }}
                  />
                  <Carousel.Caption>
                   <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              )
            })}
            
          
          </Carousel>

          </Col>
        </Row>
        <Row>
          <DishComments selectedDish={this.state.selectedDish} />
        </Row>
      </Container>
    )
  }
}

export default Body