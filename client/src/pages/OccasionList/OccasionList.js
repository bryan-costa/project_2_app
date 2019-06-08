import React, { Component } from 'react'
import Type from '../../components/OccForm/Type'
import Date from '../../components/OccForm/Date'
import Description from '../../components/OccForm/Description'
import OccListBtn from '../../components/OccList/Button'
import OccCard from '../../components/OccList/Card'
import Occasion from '../../components/Utils/occasion.js'
import EditForm from '../UpdateOccasion'

class OccasionList extends Component {
    state = {
        name: '',
        type: '',
        date: '',
        description: '',
        userId: '',
        occList: [],
        isEditing: false,
        currentCard: {}
    }

    componentWillMount() {
        Occasion.getSome(1)
            .then(({ data }) => {
                this.setState({ occList: data })
            })
    }


    handleGetOccasions = event => {
        const userId = this.state.userId
        console.log("Here I am!")
        Occasion.getAll()
    }

    // function to select the image displayed on the card, depends on which 'type' is selected
    handleSelectImage = (type) => {
        switch ({ type }) {
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

    // sends the card data to local storage to be called when user wants to edit the card
    handleStorage = ({ id, name, type, date, description }) => {
        let cardData = { id, name, type, date, description }
        localStorage.setItem('update', JSON.stringify(cardData))
        this.setState({ ...this.state, currentCard: cardData, isEditing: true })
        console.log(cardData)
    }


    handleDeleteOccasion = (id) => {
        console.log('Here I am!')
        Occasion.deleteOne(id)
            .then(({ data }) => {
                this.setState({
                    occList: this.state.occList.filter(occ => occ.id !== id)
                })
            })
    }


    render() {
        return (
            <>
                <OccListBtn
                />
                <h2 style={{ textAlign: 'center', color: '#707070' }}>Upcoming Events</h2>
                {/* this works to populate the update form with existing data, but it does not allow the fields to be edited - I did not have time to research and fix */}
                {this.state.isEditing ? <EditForm currentOcc={this.state.currentCard} /> : null}
                <OccCard
                    newOcc={this.state.occList}
                    handleSelectChange={this.state.type}
                    handleStorage={this.handleStorage}
                    handleDeleteOccasion={this.handleDeleteOccasion}
                />
            </>
        )
    }
}

export default OccasionList