//npm install codemirror --save//

var React = require('react'),
    Editor = require('react-md-editor');

var App = React.createClass({
    getInitialState: function() {
        return {
            code: "# Markdown"
        };
    },
    updateCode: function(newCode) {
        this.setState({
            code: newCode
        });
    },
    render: function() {
        return <Editor value={this.state.code} onChange={this.updateCode} />
    }
});

React.render(<App />, document.getElementById('app'));