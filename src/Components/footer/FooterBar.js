import React from 'react'
import {Container,List,Segment} from 'semantic-ui-react'
import './FooterBar.css'

const FooterBar = () => {
    return (
    <div className="ft">
      <Container textAlign="center">
        <Segment fixed="bottom" inverted vertical style={{ margin: '0em 0em', padding: '3em 0em' }}>
        <Container textAlign='center'>
        <List horizontal inverted divided link size='big'>
          <List.Item as='a' href='https://www.facebook.com/savan.trada'>
          <i className="facebook square icon" style={{color:"#4267b2"}}></i>
            facebook
          </List.Item>
          <List.Item as='a' href='https://in.linkedin.com/in/savantrada'>
          <i className="linkedin in icon" style={{color:"#0077B5"}} ></i>
          LinkedIn
          </List.Item>
          <List.Item as='a' href='https://www.instagram.com/savan_trada/'>
          <i className="instagram icon" style={{color:"red"}}></i>
          Instagram
          </List.Item>
          <List.Item as='a' href='https://github.com/savantrada'>
          <i className="github icon" style={{color:"black"}}></i>
          Github
          </List.Item>
        </List><br/>
        &copy; All rights Reserved 2019.

        </Container>
    </Segment>
    </Container>
    </div>
    );
}

export default FooterBar;