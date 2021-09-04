// import React, { Component } from 'react'




// export default class MemeCard extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       meme_img_link: []
//     }
//   }

//   componentDidMount(){
//     axios.get('http://localhost:8080/api/meme')
//     .then(res => {
//       this.setState({ meme_img_link: res.data})
//     })
//     .catch(err => {
//       console.log("Error");
//     })
//   }
//   onDelete(id){
//     axios.delete('http://localhost:8080/api/meme/'+id+'/delete')
//     .then(res => {
//       this.props.history.push("/");
//     })
//     .catch(err => {
//       console.log("Error");
//     })
//   }

//   render() {
//     const memes = this.state.meme_img_link;
//     console.log(memes)
//     let meme_list;
//     if(!memes){
//       meme_list = "There is no meme";
//     }else {
//       meme_list = memes.map( (meme, k) =>
//         <Card className='mt-5 mb-3' key={k}>
//           <Card.Img variant='top' src={meme.meme_img_link}></Card.Img>
//           <Card.Body>
//             <Button onClick={this.onDelete.bind(this, meme._id)}>
//               Delete
//             </Button>
//           </Card.Body>
//         </Card>
//       )
//     }
//     return (
//       <div>
//         <Row>
//           <Col md='4'>
//             { meme_list }
//           </Col>
//         </Row>
//       </div>
//     )
//   }
// }
import React, { useState, useEffect } from 'react'
import { Row, Col, Button,  Card } from 'react-bootstrap';
import axios from 'axios';

export default function MemeCard() {
  //! create state hooks
  const [meme_img_link, set_meme_img_link] = useState("");
  const [meme_img, set_meme_img] = useState("");
  
  useEffect( () => {
    axios.get('https://meme-gallery-sohag.herokuapp.com/api/meme')
    .then( res => {
      set_meme_img_link(res.data.meme_img_link)
      set_meme_img(res.data.meme_img)
    })
    .catch( err => {
      console.log(err);
    })
  })

  // const memes_link = meme_img_link;
  // const memes = meme_img;
  const memes_link = [1,2,3,4,5,6,7,8,9,10];
  
  let meme_list = memes_link.map( (meme, k) => 
    <Col xs={12} sm={6} md={4} xl={4} key={k}>
      <Card >
        <Card.Img src={meme} />
        <Card.Body>
          <Button variant="outline-danger">Delete</Button>
        </Card.Body>
      </Card>
      <br />
    </Col>
  ) ;

  return (
    <>
      <Row>
      {meme_list}
      </Row>
      
    </>
  )
}
