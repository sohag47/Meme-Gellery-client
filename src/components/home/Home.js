import React, { Component } from 'react'
import axios from 'axios';
import UploadMeme from './UploadMeme'
import {Container, Row,Col,Card,  Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      memes: []
    }
  }
    componentDidMount(){
    axios.get('http://localhost:8080/api/meme')
    .then(res => {
      this.setState({ memes: res.data})
    })
    .catch(err => {
      console.log("Error");
    })
  }

    onDelete(id){
    axios.delete('http://localhost:8080/api/meme/'+id+'/delete')
    .then(res => {
      this.props.history.push("/");
    })
    .catch(err => {
      console.log("Error");
    })
  }
    render() {
        const memes = this.state.memes;
        let meme_list;

        if(!memes){
          meme_list = "There is no meme";
        }else {
          meme_list = memes.map( (meme, k) => 
            <Col xs={12} sm={6} md={4} xl={4} key={k}>
              <Card >
              {
                (meme.meme_img_link !== "undefined") ? (
                  <Card.Img src={meme.meme_img_link} width="100" height="300" />
                ) : (
                  <Card.Img src={`data:image/jpeg;base64,${meme.meme_img}`} width="100" height="300" />
                )
              }
                <Card.Body>
                <Row>
                  <Col>
                  <Button variant="outline-danger" onClick={this.onDelete.bind(this, meme._id)}>Delete</Button>
                  </Col>
                  <Col>
                    <i>{moment(meme.createdAt).format('llll')}</i>
                  </Col>
                </Row>
                  
                </Card.Body>
              </Card>
              <br />
            </Col>
          
            
        ) ;
    }
        return (
            <Container fluid>
                <Row>
                <Link as='h3' className='text-center' to='/statistics' style={{textDecoration: "none"}}>

                    <Button  variant="outline-info">See Statistics</Button>
                </Link>
                </Row> 
                <br/>
                <Row>
                    <UploadMeme />
                </Row>
                <br />
                <Row>
                <Row>
                    {meme_list}
                </Row>
                </Row>
            </Container>
        )
    }
}
