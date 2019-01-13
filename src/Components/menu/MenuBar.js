import React from 'react';
import {Tab,Container} from 'semantic-ui-react';
import './MenuBar.css';
import Experience  from '../Experience/Experience';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import ContactMe from '../ContactMe/contactme';
import Education from '../Education/education';

const panes = [
    { menuItem:  'About Me', render: () => <Tab.Pane><AboutMe /></Tab.Pane> },
    { menuItem: 'Experience', render: () => <Tab.Pane><Experience /></Tab.Pane> },
    { menuItem: 'Projects', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
    { menuItem: 'Skills', render: () => <Tab.Pane><Skills /></Tab.Pane> },
    { menuItem: 'Education', render: () => <Tab.Pane><Education /></Tab.Pane> },
    { menuItem: 'Contact Me', render: () => <Tab.Pane><ContactMe/></Tab.Pane> }
  
  ]

export default class MenuBar extends React.Component {
    state = {};
    handleChange = (e, data) => this.setState(data);
    render() {
      return (
        <div>
             <Container>
            <Tab menu={{inverted: true}} style={{margin: "2px"}} panes={panes} onTabChange={this.handleChange} />
          </Container>
        </div>
      )
    }
}


