    
import * as React from 'react';
import { Socket } from './Socket';




export class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'data': '',
        };
    }
    
   
    
    componentDidMount() {
        Socket.on('message received', (data) => {
            console.log("Content recieved message");
            this.setState({
                'number_received': data['message']
            });
        });
    }

    render() {
        return (
            <div>
                <h1>HELLLOOOOOOOO</h1>
                <div>
                    Data: {this.state.data}
                </div>
            </div>
        );
    }
}



