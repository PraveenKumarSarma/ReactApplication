import { legacy_createStore as createStore } from 'redux';

// Step1:   Reducer Function
function bankReducer(state, action)
{
    // Convert action type to upper case
    action.type = action.type.toUpperCase();    

    // state -- refers the current state or old state
    let  updatedState = {...state};

    switch (action.type) 
    {
        case "CREATE":
            updatedState.balance =  parseFloat(action.amount);;   
            break; 

        case "DEPOSIT":
            updatedState.balance =  state.balance + parseFloat(action.amount);
            break;
            
        case "WITHDRAW":
            if(state.balance < parseFloat(action.amount))  
            {
                alert("Insufficient Fund");              
            }
            else
            {
                updatedState.balance =  state.balance - parseFloat(action.amount);
            }
            break; 
      }

      return updatedState;
};

// Step2:  Create Store
const bankStore = createStore(bankReducer); //we can access store in entire project i.e multiple components can access
export default bankStore;