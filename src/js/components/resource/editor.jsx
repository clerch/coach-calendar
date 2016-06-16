//npm install codemirror --save//

// var React = require('react'),
//     Editor = require('react-md-editor');

// var App = React.createClass({
//     getInitialState: function() {
//         return {
//             code: "# Markdown"
//         };
//     },
//     updateCode: function(newCode) {
//         this.setState({
//             code: newCode
//         });
//     },
//     render: function() {
//         return <Editor value={this.state.code} onChange={this.updateCode} />
//     }
// });

// React.render(<App />, document.getElementById('app'));

var React = require('react');
var MarkdownEditor = require('react-markdown-editor').MarkdownEditor;
 
var TestComponent = React.createClass({
    render: function() {
        return (
            <MarkdownEditor initialContent="Test" iconsSet="font-awesome"/>
        );
    }
});
 
React.render(<TestComponent />, document.getElementById('content'));