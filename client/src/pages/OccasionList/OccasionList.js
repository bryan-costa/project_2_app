import React, { Component } from 'react'
// import occForm from '../../components/CreateOccasion'
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

    handleDeleteOccasion = newOcc => {
        Occasion.deleteOne(this.state.id)
        .then(({data}) => {
            this.setState({occList: data})
    })}


    render() {
        return (
            <>
                <OccListBtn // handleGetOccasions={this.handleGetOccasions} 
                />
                <h1 style={{ textAlign: 'center', color: '#707070' }}>Upcoming Events</h1>
                <OccCard 
                    newOcc={this.state.occList}
                />
            </>
        )
    }
}

export default OccasionList