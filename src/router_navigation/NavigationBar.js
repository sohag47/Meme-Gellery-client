import React, { Component } from 'react'

import {Link} from 'react-router-dom';
import { Container } from 'react-bootstrap';


export default class NavigationBar extends Component {
    render() {
        return (
            <div>
                <Container fluid className='mb-3'>
                    <Link to='/' style={{textDecoration: "none"}}>
                    <h1 className='text-center'>Meme Gallery</h1> 
                    </Link>
                </Container>
            </div>
        )
    }
}
