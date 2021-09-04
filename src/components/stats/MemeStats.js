import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'
import axios from 'axios';
import {Container, Row, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import moment from 'moment';

export default class MemeStats extends Component {
  constructor(props){
    super(props);
    this.state = {
      memes: []
    }
  }

    componentDidMount(){
    axios.get('https://meme-gallery-sohag.herokuapp.com/api/meme')
    .then(res => {
      this.setState({ memes: res.data})
    })
    .catch(err => {
      console.log("Error");
    })
  }


  render() {
    const memes = this.state.memes;
    let total_day = []; // every day
    let total_post = []; // every post

  

    for(let i=0; i<7; i++){
      let date = new Date();
      date.setDate(date.getDate() - i);
      total_day.push(moment(date).format('LL'));
      console.log(i+" "+moment(date).format('LL'));

      let count = 0;
      memes.forEach(element => {
        if(moment(element.createdAt).format('LL') === moment(date).format('LL')){
          count +=1 ;
          console.log(element);
        }
      });
      total_post.push(count);
    }
    
    // console.log(total_day);


    return (
      <Container fluid>
      <Row>
        <Link as='h3' className='text-center' to='/' style={{textDecoration: "none"}}>

            <Button variant="outline-info">Memes</Button>
        </Link>
        <h3>Memes uploaded per day last 7 days</h3>
        </Row> 
        <br/>

        <Row>
        
        <Bar
        data={{
          labels: total_day,
          datasets: [
            {
              label: 'Per Day Posts',
              data: total_post,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
              ],
              borderWidth: 1,
            },
          ],
        }}
        height={220}
        width={600}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
        </Row>
        <br />

    </Container>
    )
  }
}
