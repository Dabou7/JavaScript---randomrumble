import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { hitMonster } from '../actions';
import {hitPlayer} from '../actions';
import {useSelector} from 'react-redux';
 


const ButtonCapacity = (props) => {
    
    const dispatch = useDispatch()
    const hitMonster = ()=> dispatch({type: "HIT_MONSTER", payload: props.player.id})
    const hitPlayer = ()=> dispatch({type: "HIT_BACK", payload: props.player.id})
    const hasPlayed = useSelector((state)=> state.hasPlayed)
    
    const disable=false;


    const combat =()=>{
        if(hasPlayed.length===4){
            hasPlayed.splice(0, 4)
            
        }
        if(hasPlayed.indexOf(props.player.id) === -1 && hasPlayed.length<=4){
            hitMonster()
            hitPlayer()
        }
        
        

    }      
                    
        console.log(disable);
    
    
          return (
            <button type="button" disabled={disable} onClick={() => combat()} className="btn btn-success material-tooltip-main ">
                hit
                
            <i className="fas fa-bomb"></i> 5
            <i className="fas fa-fire-alt"></i> - 5
            </button>
        )
        
        
}



export default ButtonCapacity;
