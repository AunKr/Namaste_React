import React from "react";
import {render} from 'react-dom'
import {createRoot} from 'react-dom/client'

const parent = React.createElement('div', {id: 'parent'},[
    React.createElement('div', {id: 'child1'}, [
        React.createElement('h1', {}, 'Child 1 H1 tag'),  
        React.createElement('h2', {}, 'Child 1 H2 tag'),  
    ]),
    React.createElement('div', {id: 'child2'}, [
        React.createElement('h1', {}, 'Child 2 H1 tag'),  
        React.createElement('h2', {}, 'Child 2 H2 tag'),  
    ]),
])
console.log('parent :', parent);  //ReactElement ==>> JS Object

const jsxParent = <div id="parent">Praent Div</div>
console.log('jsxParent :', jsxParent); //ReactElement ==>> JS Object, not a div tag

//JSX ==>> HTML like syntax which inturn is ReactElement not HTML in JS

const root = createRoot(document.getElementById('root'));
root.render(jsxParent);