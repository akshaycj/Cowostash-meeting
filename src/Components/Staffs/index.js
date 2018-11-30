import React from 'react' ;
import './index.css' ;
import { Input , Icon } from 'antd';
import {Link} from 'react-router-dom'


export default class Screen2 extends React.Component{
  render(){
    const items = []

    for(let i=0;i<12;i++){
      items.push(
        <Link to={'/'+i}>
          <div style={{display : "flex" , flexDirection : "column" , margin : "20px",cursor:'pointer'}}>
            <div style={{display : "flex" , alignItems : "center" , justifyContent : "center"}}><Icon style={{fontSize : "100px"}} type="github" /></div>
            <div style={{fontSize : "20px"}}>Richard CEO {i}</div>
          </div>
        </Link>
      )
    }

    return(
      <div className="screen2">
        <Input style={{width:"50%" , marginTop : "50px"}} placeholder="Whom Do you want to meet?" />
        <div className="column1">
          {items}
        </div>
      </div>
    )
  }
}
