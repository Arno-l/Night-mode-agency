/* CHILD */

import React, {useContext} from "react";
import { ThemeContext } from "Context";
import { Link } from "react-router-dom";


const DisplayProject = (props) => {

    const { theme } = useContext(ThemeContext);

    return(
      
      <div className={ theme ? 'element-list Dark' : 'element-list Light'}>
        <Link className={ theme ? 'link-card Dark' : 'link-card Light'} to={'/works/' + props.data.name +'-study-case'}>
          <h3 className={ theme ? 'card-title Dark' : 'card-title Light'}>{props.data.name}</h3>
          <h5 className={ theme ? 'card-body Dark' : 'card-body Light'}>{props.data.title}</h5>
          </Link>
      </div>
    )
  }

export default DisplayProject;