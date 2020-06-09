import React from "react"
import {Container, Col, Row, ListGroup, Alert, Badge} from "react-bootstrap"

class DishComments extends React.Component {
  render() {
    return(
      <Container>
        {this.props.selectedDish ? (
          <ListGroup>
            <h1>{this.props.selectedDish.name}</h1>
              {this.props.selectedDish.comments.map((comment, index) => {
             let variant = ""
            switch (comment.rating) {
              case 1:
                variant = "danger";
                break;
              case 2:
                variant = "warning";
                break;
              case 3:
                variant = "secondary";
                break;
              default:
                variant = "success";
                break;

            }
            return (
              <ListGroup.Item key={index}>{comment.author}: {comment.comment}
              <Badge pill variant={variant} className="ml-3">
                {comment.rating}
              </Badge>
              </ListGroup.Item>
            )

          })}
          
        </ListGroup>

        ) : <Alert variant="secondary" className="mt-4">
            No dish selected, please click on dish to show the comment
          </Alert>
      }

        
        
      </Container>

    )
  }
}

export default DishComments