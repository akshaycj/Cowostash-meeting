import React from 'react' ;
import './index.css' ;
import {Input , Button , Icon , Calendar , Slider } from 'antd' ;
import {Link} from 'react-router-dom'
import moment from 'moment';

export default class Screen3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      confirm : false ,
      value : moment('2017-01-25') ,
      name : "" ,
      email : "" ,
      companyName : "" ,
      timeRequired : 0 ,
      timeSlotSelected : 0 ,
      id : this.props.match.params.name ,
    }
  }

  onConfirm = () => {
    this.setState({
      confirm : true ,
    })
  }

  onGoBack = () => {
    this.setState({confirm : false})
  }

  onName = (name) => {
    this.setState({name});
  }

  onEmail = (email) => {
    this.setState({email});
  }

  onCompanyName = (company) => {
    this.setState({companyName : company})
  }

  onSliderChange = (value) => {
    this.setState({timeRequired : value})
  }

  onSelect = (value) => {
    console.log("---",value.format('YYYY-MM-DD'));
    this.setState({
      value ,
    })
  }

  timeSelect = (e) => {
    console.log("e",e);
    this.setState({timeSlotSelected : e})
  }

  render(){
    const marks = {
    15: '15min',
    30: '30min',
    45: '45min' ,
    60: '60min',
  };
  const { value, selectedValue } = this.state;
      if(this.state.confirm){
        return(
              <div className="screen3">
                <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                  <Icon style={{fontSize : "100px"}} type="github" />
                  <div style={{fontSize : "30px" , padding : "auto" }}>Find a Time To meet Iryin</div>
                  <Calendar value={value} fullscreen={false}/>
                </div>
                <div style={{width : "2px" , height : "80%" , margin : "auto" , backgroundColor : "#A9A9A9"}}></div>
                <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                  <div style={{fontSize : "35px"}}>How Long Do You Need ?</div>
                  <Slider style={{width : "200px"}} min={15} max={60} marks={marks} defaultValue={30} onChange={this.onSliderChange}/>
                  <Button style={{width : "60%" , margin : "20px"}} onClick={() => this.timeSelect("4:00 AM")}> 4:00 AM </Button>
                  <Button style={{width : "60%" , margin : "20px" , marginTop : "0px"}} onClick={() => this.timeSelect("10:00 PM")}> 10:00 PM </Button>
                  <Button style={{width : "60%" , margin : "20px" , marginTop : "0px"}} onClick={() => this.timeSelect("2:00 PM")}> 2:00 PM </Button>
                  <Button type="primary" onClick={this.onGoBack}>Go Back</Button>
                </div>
              </div>
              )
            }
      else{
        return(
                <div className="screen3">
                  <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                    <Icon style={{fontSize : "100px"}} type="github" />
                    <div style={{fontSize : "30px" , padding : "auto" }}>Find a Time To meet Iryin</div>
                    <Calendar fullscreen={false} onSelect={this.onSelect}/>
                  </div>
                  <div style={{width : "2px" , height : "80%" , margin : "auto" , backgroundColor : "#A9A9A9"}}></div>
                  <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                    <div style={{fontSize : "35px"}}>Confirm meeting For</div>
                    <div style={{fontSize : "20px"}}>{value.format('MMMM Do YYYY')}</div>
                    <Input style={{width : "60%" , margin : "10px"}} placeholder="Full Name" onChange={this.onName}/>
                    <Input style={{width : "60%" , margin : "10px" , marginTop : "0px"}} placeholder="Your Email ID" onChange={this.onEmail}/>
                    <Input style={{width : "60%" , margin : "10px" , marginTop : "0px"}} placeholder="Company Name" onChange={this.onCompanyName}/>
                    <div style={{width : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center"}}>
                      <Button type="primary" onClick={this.onConfirm}>Confirm</Button>
                      <Button style={{marginLeft : "20px"}} type="danger">Cancel</Button>
                    </div>
                  </div>
                </div>
        )
      }
  }
}
