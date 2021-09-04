import React, {useState} from 'react'
import axios from 'axios';
import { Row, Col, Button, Form,  } from 'react-bootstrap';


export default function UploadMeme() {
    //! create state hooks
    const [meme_img_link, set_meme_img_link] = useState();
    const [file, set_meme_img] = useState();

    const submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("meme_img_link", meme_img_link);
        data.append("file", file)

        axios.post('https://meme-gallery-sohag.herokuapp.com/api/meme/create', data)
        .then(res => {
            set_meme_img_link('')
            set_meme_img('')
        })
        
        .catch(err => {
            console.log(err);
        })
        
    }
    return (
        <div>
            
            <Form encType='multipart/form-data'>
                <Row>
                    <Col xl={2} md={2}></Col>
                    <Col xs={6} sm={4} md={3} xl={3}>
                    <Form.Group>
                        <Form.Control 
                        type='text' 
                        placeholder='Link' 
                        name='meme_img_link'
                        
                        onChange={(e)=> {
                            const {value} = e.target;
                            set_meme_img_link(value);
                            console.log(value);
                        }}
                        />
                    </Form.Group>
                    </Col>
                    <Col xs={6} sm={4} md={3} xl={3}>
                    <Form.Group>
                        <Form.Control 
                        type='file' 
                        name='meme_img'
                        onChange={ (e) => {
                            const file = e.target.files[0];
                            set_meme_img(file);
                            console.log(file);
                        }}
                        />
                    </Form.Group>
                    <br />
                    </Col>
                    <Col xs={4} sm={1} md={1} xl={1}></Col>
                    <Col xs='auto' sm='auto' md='auto' xl='auto'>
                    <Form.Group>
                        <Button variant="outline-success" onClick={submitHandler}>
                        Upload
                        </Button>
                    </Form.Group>
                    </Col>
                </Row>
                
            </Form>
        </div>
    )
}
