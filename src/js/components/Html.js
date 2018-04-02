import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Html extends Component {
    static propTypes = {
        children: PropTypes.node.isRequired,
        scripts: PropTypes.array
    }

    render() {
        const { children, scripts } = this.props;

        return (
            <html>
                <head>
                    <meta charSet="UTF-8"/>
                    <title>SSR React App</title>
                </head>
                <body>
                    <div id="app"
                        dangerouslySetInnerHTML={{ __html: children}}
                    ></div>
                    {scripts.map((item, index)=>{
                        return <script key={index} src={item}></script>
                    })}
                </body>
            </html>
        );
    }
}


export default Html;