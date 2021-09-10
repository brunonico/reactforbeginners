import React,{useRef,useContext} from 'react';
import {AppContext} from '../application/provider';


const LogIn = ()=>{
    let nom = useRef(null)
    let ape = useRef(null)
    const [state,setState]=useContext (AppContext);
    return (<div>
        <input type="text" ref = {nom} onChange={()=>{setState({...state,surname:nom.current.value})}}/>
        <input type="text" ref = {ape} onChange={()=>{setState({...state,name:ape.current.value})}}/>
    </div>);
}

export default LogIn;