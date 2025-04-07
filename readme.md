#react learnings

steps : - 
1.npm init 
2.npm install -D parcel ==> for dev env only
3.add your (node modules , parcel cache and dist in git ignore)
4.npx parcel index.html (make sure your index.html has app.js src file linked)
5.npm install react react-dom
6.npm install -g react-devtools
7.add start script in pkg.json file
8.npm run start

# 2 types of routing in web app / single page application
1. client side routing --> react uses this it is basically all the components are loaded and just interchanged when clicked on
2. server side routing --> basic old structure where you make network call it gives you the data and then it renders on to the page it involved reloading the page


#3 life cycle methods of a parent child component relationship 

parent component => child component

1.parent constructor
2.parent render()
    3.child constructor
    4.child render()
    5.child did mount
6.parent did mount

_______________________________________________
                    ** very important**
life cycle methods for a parent and multiple child relationship (if a parent has multiple child in it)

-parent constructor
-parent render

    -first constructor
    -first render

    -second constructor
    -second render

    <dom manipulation begins (dom is updated) >

    first did mount
    second did mount

-parent did mount

componentdidupdate()
componentwillUnmount()
________________________________________

after all this the componentdidmount() runs and all the data is rendered on to the page after that componentdidupdate() runs and then componentwillunmount() runs as you change the page or the component is removed from the page


##########
higher order functions
state uplifting (moving child state to parents)


<!-- create use context - -->
create use context - use context
update use context - usercontext.provider value={objkey}
