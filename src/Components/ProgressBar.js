import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
    return {
        props: ownProps
    };

  };
  

const ProgressBarConnect = ({props}) => {
    
    

    
        return (
            <div className="progress md-progress" >
                <div className="progress-bar"
                    style={{ width: (props.pv * 100 / props.pvMax) + "%" }}
                    aria-valuenow={props.pv}
                    aria-valuemin="0"
                    aria-valuemax={props.pvMax}
                    role="progressbar" >
                    <i className={` fas ${props.faType} ${props.bgType} icon-text`}> {props.pv} {props.barName} </i>
                </div>
            </div >
        )
    

}
const ProgressBar = connect(mapStateToProps)(ProgressBarConnect);


export default ProgressBar;