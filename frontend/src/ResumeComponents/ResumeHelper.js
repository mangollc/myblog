import React, { Component } from 'react';
import ReactGA from 'react-ga';
import $ from 'jquery';
import Header from './Header';
import Footer from './Footer';
// import About from './About';
import Resume from './Resume';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Portfolio from './Portfolio';

import { MuiThemeProvider } from '@material-ui/core/styles'

import { connect } from 'react-redux';

class ResumeHelper extends Component {

  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData: {}
    };

    ReactGA.initialize('UA-110570651-1');
    ReactGA.pageview(window.location.pathname);

  }

  getResumeData(){
    $.ajax({ 
      url:'/resumeData.json',
      dataType:'json',
      cache: false,
      success: function(data){
        this.setState({resumeData: data});
      }.bind(this),
      error: function(xhr, status, err){
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  render() {
    return (
      <div className='App'>
          <div className='resume-section'>
            <Header data={this.state.resumeData.main}/>
            {/* <About data={this.state.resumeData.main}/> */}
            {/* <Resume data={this.state.resumeData.resume}/> */}
            <Portfolio data={this.state.resumeData.portfolio}/>
            {/* <Testimonials data={this.state.resumeData.testimonials}/> */}
            <Contact data={this.state.resumeData.main}/>
            {/* <Footer data={this.state.resumeData.main}/> */}
        </div>
      </div>
    );
  }
}

export default connect(null, null)(ResumeHelper);
