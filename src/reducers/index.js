import id from '../reducers/index'


const initialState = {
  //TODO : complete players {} and monster{}
  players: {
    1: { name: "John", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 1 },
    2: { name: "Jack", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 2 },
    3: { name: "Jessy", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 3 },
    4: { name: "Jenny", pv: 100, pvMax: 100, mana: 30, manaMax: 30, id: 4 }},
  
  monster: {
    pv: 300,
    pvMax: 300
  },
  
  hasPlayed: [],

  
};
 


function rootReducer(state = initialState, action) {
  
  if (action.type === "HIT_MONSTER") {
    const currentPlayer = [action.payload];
    
    return {...state, 
                hasPlayed: state.hasPlayed.concat(currentPlayer),
                monster: {...state.monster, 
                  pv: state.monster.pv-5},
                 }}      
   
    console.log(state.hasPlayed)

  if (action.type === "HIT_BACK") {

    return {...state, 
                    players: {...state.players, 
                    [action.payload]: {...state.players[action.payload],
                    pv:state.players[action.payload].pv-5}}}  
    }  
    
    

  return state;

};

 
export default rootReducer;