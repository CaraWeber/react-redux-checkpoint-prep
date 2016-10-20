import React from 'react';
import RegistryItem from './RegistryItem';
import store from './store';
import {connect} from 'redux';
import AddToRegistryForm from './AddToRegistryForm';

export default class extends React.Component {

    constructor() {
        super();
        this.state = store.getState();
    } 

    componentWillMount () {
        store.subscribe(() => this.setState(store.getState()));
    }

    render() {
        return (
            <div>
                <h1>My Registry</h1>
                 {
                    this.state.registryItems && 
                       this.state.registryItems.map((item, idx) =>
                        (   <div key={idx}>
                                    <RegistryItem itemDetails={item}/>
                            </div>
                            ))
                 }
                <AddToRegistryForm/>
            </div>
        );
    }

}


{/* BIGGER QUESTION:  HOW DO WE TEST STUFF WHEN THERE's NO BACK END
CONSOLE AND NO FRONT END CONSOLE???   where can we console.log ???? */}



