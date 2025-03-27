import React from 'react'
import User from './User'
import UserClass from './UserClass'

class About extends React.Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  render(){
    return (
      <div>
        <h1>About</h1>
        {/* <User name={"Mujtaba functional"}/> */}
        <UserClass name = {"Mujtaba Class"} location = {"Mumbai Class"}/>
      </div>
    )
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About</h1>
//       <User name={"Mujtaba functional"}/>
//       <UserClass name = {"Mujtaba Class"} location = {"Mumbai Class"}/>
//     </div>
//   )
// }

export default About