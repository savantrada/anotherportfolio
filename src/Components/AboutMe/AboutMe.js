import React from 'react';
import {Segment,Grid,Image} from 'semantic-ui-react';


export default class AboutMe extends React.Component {
render(){
    return (
        <div>
            <Segment>
                <Grid columns={2} textAlign='center'>
                    <Grid.Row verticalAlign='middle'>
                        <Grid.Column>
                            <Image src='https://savantrada.com/images/savan.JPG' size='medium'/>
                       </Grid.Column>

                        <Grid.Column>
                            <p>
                            Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
                            est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
                            ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                            ex natum rebum iisque.
                            </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
        </div>
    );
}
}



/* 
 <br/>
            <Container>          <Segment>
            <Image src='https://savantrada.com/images/savan.JPG' size='medium' circular />
            <p>
      Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia facete scriptorem,
      est autem aliquip detraxit at. Usu ocurreret referrentur at, cu epicurei appellantur vix. Cum
      ea laoreet recteque electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
      ex natum rebum iisque.
    </p>
    </Segment>
    </Container>
*/