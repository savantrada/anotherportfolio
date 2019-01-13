import React from 'react';
import {Modal,Image,Header, Card, Divider } from 'semantic-ui-react';
import './Experience.css';

const description = [
    'Amy is a violinist with 2 years experience in the wedding industry.',
    'She enjoys the outdoors and currently resides in upstate New York.',
  ].join(' ');

export default class Experience extends React.Component {
render(){
    return (
        <div>
            <Card.Group>
                <Modal trigger={
                    <Card href="#">
                        <Card.Content header='Web Developer' />
                        <Card.Meta content="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Vishv Infotech (Aug 2016 - Mar 2017)" />
                        <Card.Content description={description} />
                        <Card.Content extra /> 
                    </Card>
                }>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                </Modal>
                <Divider horizontal/>
                <Modal trigger={
                    <Card href="#">
                        <Card.Content header='Student Intern (java)' />
                        <Card.Meta content="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BISAG(Bhaskaracharya Institute for space &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;and Geo-Informatics) (June 2015 - June &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2016)" />
                        <Card.Content description={description} />
                        <Card.Content extra />
                    </Card>
                }>
                <Modal.Header>Select a Photo</Modal.Header>
                <Modal.Content image>
                    <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
                    <Modal.Description>
                        <Header>Default Profile Image</Header>
                        <p>We've found the following gravatar image associated with your e-mail address.</p>
                        <p>Is it okay to use this photo?</p>
                    </Modal.Description>
                </Modal.Content>
                </Modal>
            </Card.Group>
        </div>
    );
}
}

