import React, { Component } from 'react'
import Type from '../../components/OccForm/Type'
import Date from '../../components/OccForm/Date'
import Description from '../../components/OccForm/Description'
import OccListBtn from '../../components/OccList/Button'
import OccCard from '../../components/OccList/Card'
import Occasion from '../../components/Utils/occasion.js'

class OccasionList extends Component {
    state = {
        name: '',
        type: '',
        date: '',
        description: '',
        // need to get exact id for login button
        // do i have to define this as a variable above?
        // userid: localStorage.getItem('userLogin'),
        userId: '',
        occList: []
    }

    componentWillMount () {
        Occasion.getSome(1)
        .then(({data}) => {
            this.setState({occList: data})
        })
    }


    handleGetOccasions = event => {
        const userId = this.state.userId
        console.log("Here I am!")
        Occasion.getAll()
    }

    handleSelectImage = (type) => {
        switch ({type}) {
          case 'birthday':
            console.log('birthday')
            this.document.CardMedia.style.backgroundImage = "url('./assets/images/balloons.png"
            break
          case 'wedding':
            console.log('wedding')
            this.document.CardMedia.style.backgroundImage = "url('./assets/images/wedding.jpg"
            break
          case 'valentines':
            console.log('valentines')
            document.body.style.backgroundImage = "url('./assets/images/valentines.jpg"
            break
          case 'baby':
            console.log('baby')
            document.body.style.backgroundImage = "url('./assets/images/balloons.png"
            break
          case 'because':
            console.log('because')
            document.body.style.backgroundImage = "url('./assets/images/balloons.png"
            break
        }
    }

    handleDeleteOccasion = _ => {
        console.log('Here I am!')
        Occasion.deleteOne(this.state.id)
        .then(({data}) => {
            this.setState({occList: data})
    })}


    render() {
        return (
            <>
                <OccListBtn // handleGetOccasions={this.handleGetOccasions} 
                />
                <h2 style={{ textAlign: 'center', color: '#707070' }}>Upcoming Events</h2>
                <OccCard 
                    newOcc={this.state.occList}
                    handleSelectChange={this.state.type}
                    handleDeleteOccasion={this.handleDeleteOccasion}
                />
            </>
        )
    }
}

export default OccasionList