import React from 'react' ;
import './index.css' ;
import {Input , Button , Icon , Calendar , Slider } from 'antd' ;
import {Link} from 'react-router-dom'

export default class Screen3 extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      confirm : false ,
    }
  }

  onPanelChange =(value, mode) => {
    console.log(value, mode);
  }

  onConfirm = () => {
    this.setState({
      confirm : true ,
    })
  }

  render(){
    const marks = {
    15: '15min',
    30: '30min',
    45: '45min' ,
    60: '60min',
  };
      if(this.state.confirm){
        return(
              <div className="screen3">
                <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                  <Icon style={{fontSize : "100px"}} type="github" />
                  <div style={{fontSize : "30px" , padding : "auto" }}>Find a Time To meet Iryin</div>
                  <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                </div>
                <div style={{width : "2px" , height : "80%" , margin : "auto" , backgroundColor : "#A9A9A9"}}></div>
                <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                  <div style={{fontSize : "35px"}}>How Long Do You Need ?</div>
                  <Slider style={{width : "200px"}} min={15} max={60} marks={marks} defaultValue={30} />
                  <Button style={{width : "60%" , margin : "20px"}}> 4:00 AM </Button>
                  <Button style={{width : "60%" , margin : "20px" , marginTop : "0px"}}> 10:00 PM </Button>
                  <Button style={{width : "60%" , margin : "20px" , marginTop : "0px"}}> 2:00 PM </Button>
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
                    <Calendar fullscreen={false} onPanelChange={this.onPanelChange} />
                  </div>
                  <div style={{width : "2px" , height : "80%" , margin : "auto" , backgroundColor : "#A9A9A9"}}></div>
                  <div style={{width : "50%" , height : "100%" , display : "flex" , alignItems : "center" , justifyContent : "center" , flexDirection : "column"}}>
                    <div style={{fontSize : "35px"}}>Confirm meeting For</div>
                    <div style={{fontSize : "20px"}}>Friday October 7 , 2018  2:00PM</div>
                    <Input style={{width : "60%" , margin : "10px"}} placeholder="Full Name" />
                    <Input style={{width : "60%" , margin : "10px" , marginTop : "0px"}} placeholder="Your Email ID" />
                    <Input style={{width : "60%" , margin : "10px" , marginTop : "0px"}} placeholder="Company Name" />
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
