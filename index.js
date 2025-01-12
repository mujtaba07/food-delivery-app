
// const heading = React.createElement(
//     'h1',
//     {id:"heading"},
//     'this is my first dom manipulation using react')
// const root = ReactDOM.createRoot(document.getElementById('root'))
// root.render(heading)


//  *************** // it takes 3 things 
// 1st - the tag -ex- div,h1,p
// 2nd - it takes an object that may consist (id,class,attr)
// 3nd - it takes the content that you'd like to show on page it can be anything 
// ***********

// create a parent element
const parent = React.createElement(
    'div',
    {id:'parent'},React.createElement('div',{id:'child'},[
        React.createElement('h1',{}, "This is an h1 tag"),
        React.createElement('h2',{}, "This is an h2 tag")]
        ),
        React.createElement(
            'div',
            {id:'child'},[
            React.createElement('div',{}, "This is an input"),
            React.createElement('div',{},[ "This is an h2 tag","this is also and h2 sibling"])]
            )      
    )

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(parent)