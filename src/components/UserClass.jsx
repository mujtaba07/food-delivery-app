import React from "react"
class UserClass extends React.Component {
    constructor(props){
        super(props)
        console.log(props)

        this.state = {
          userinfo : {
            name : 'Mujtaba',
            location : 'Mumbai',
            dummy_photo : "https://www.w3schools.com/howto/img_avatar.png"
          }
        }
      
    }

   async componentDidMount(){
        let data = await fetch('https://api.github.com/users/mujtaba07')
        let json = await data.json()
        console.log(json)
        this.setState({
          userinfo : json
        })
    }

    componentDidUpdate(){
      console.log('Component Updated')
    }

    componentWillUnmount(){
      console.log('Component Unmounted')
    }
    render(){
    const {name,location,avatar_url} = this.state.userinfo
    return (
        <div className=' user-card'>
            <h1>This is class Based Component</h1>
            <img src={avatar_url} alt=""/>
            <div>Name: {name}</div>
            <div>Location : {location}</div>
        </div>
      )
  }
}

export default UserClass