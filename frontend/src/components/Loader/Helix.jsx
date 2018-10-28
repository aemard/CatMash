import React from 'react';
import helix from 'assets/img/helix.svg'

class Helix extends React.Component {
    render() {
        return (
            <object type="image/svg+xml" data={helix} width="200">
                Your browser does not support SVG
            </object>
        );
    }
}

export default Helix;
