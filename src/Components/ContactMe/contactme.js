import React from 'react';

import {Form} from 'semantic-ui-react';

export default class ContactMe extends React.Component {
    render(){
        return (
            <div>
                
                <Form action="mailto:savantrada1022@gmail.com">
                <Form.Group widths='equal'>
                    <Form.Input fluid label='First name' placeholder='First name' required />
                    <Form.Input fluid label='Last name' placeholder='Last name' required/>
                </Form.Group>
                <Form.Input fluid label='Email' placeholder='abc@gmail.com' required/>
                <Form.Input fluid label='Phone' placeholder='Phone' required/>
                <Form.TextArea fluid label='Message' placeholder='Ask me anything...' required/>
                <Form.Button type='submit'>Submit</Form.Button>
                </Form>
            </div>
        );
    }
}