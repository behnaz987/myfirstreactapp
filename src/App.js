import React from 'react';
import Input from './components/input/input';
//import Button from './components/button/button';
import Button from '@material-ui/core/Button';
import './App.css';


class App extends React.Component {
    render() {
        return (
            <div className="div">
                <Input id="first"/>
                <Input id="second" style={{marginTop: 100}}/>
                <Button className=" button" variant="contained">Submit</Button>
            </div>


        );
    }

}

export default App;
