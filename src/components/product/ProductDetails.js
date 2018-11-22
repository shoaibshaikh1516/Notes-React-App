import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const ProductDetails = ({header, metadata, description, noOfUser}) => (
  <Card>
    {/* <Image src='https://react.semantic-ui.com/images/avatar/large/daniel.jpg' /> */}
    <Card.Content>
      <Card.Header>{header}</Card.Header>
      <Card.Meta>{metadata}</Card.Meta>
      <Card.Description>{description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        {noOfUser}
      </a>
    </Card.Content>
  </Card>
)

export default ProductDetails;