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