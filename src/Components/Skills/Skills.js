import React, { Component } from 'react'
import { Accordion,Label, Icon,Header,Divider } from 'semantic-ui-react'

export default class Skills extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    return (
        <div>
        <Divider horizontal>
            <Header as='h2'>
                <Icon name='tag' />
                Summary of Skills
            </Header>
        </Divider>
        
        <Accordion fluid styled>
            <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                <Icon name='dropdown' />
                Web Developing
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 0}>
                <Label as='a' color='red' tag>HTML5</Label>
                <Label as='a' color='blue' tag>CSS3</Label>
                <Label as='a' color='green' tag>javascript</Label>
                <Label as='a' color='yellow' tag>Reactjs</Label>
                <Label as='a' color='brown' tag>ASP.net</Label>
                <Label as='a' color='pink' tag>PHP</Label>
                <Label as='a' color='black' tag>AngularJS</Label>
                <Label as='a' color='blue' tag>Wordpress</Label>
                <Label as='a' color='pink' tag>NodeJS</Label>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Languages
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 1}>
                <Label as='a' color='red' tag>C#</Label>
                <Label as='a' color='brown' tag>JAVA</Label>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Version Control
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 2}>
                <Label as='a' color='pink' tag>Github</Label>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Database
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 3}>
                <Label as='a' color='black' tag>SQL SERVER 2017</Label>
                <Label as='a' color='pink' tag>MYSQL</Label>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
            <Icon name='dropdown' />
            Operating Systems
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 4}>
                <Label as='a' color='green' tag>Windows</Label>
                <Label as='a' color='yellow' tag>Linux Servers</Label>
                <Label as='a' color='brown' tag>Ubuntu</Label>
            </Accordion.Content>

            <Accordion.Title active={activeIndex === 5} index={5} onClick={this.handleClick}>
            <Icon name='dropdown' />
            IDEs
            </Accordion.Title>
            <Accordion.Content active={activeIndex === 5}>
                <Label as='a' color='green' tag>Visual Studio Code</Label>
                <Label as='a' color='yellow' tag>Visual Studio</Label>
                <Label as='a' color='brown' tag>Eclipse</Label>
            </Accordion.Content>

        </Accordion>
    </div>
    )
  }
}
