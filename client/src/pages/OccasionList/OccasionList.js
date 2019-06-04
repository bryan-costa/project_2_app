import React, { Component } from 'react'
// import occForm from '../../components/CreateOccasion'
import Type from '../../components/OccForm/Type'
import Date from '../../components/OccForm/Date'
import Description from '../../components/OccForm/Description'
import OccListBtn from '../../components/OccList/Button'
import OccCard from '../../components/OccList/Card'
import Occasion from '../../components/Utils/occasion.js'

class OccasionList extends Component {

        handleGetOccasions = event => {
                console.log("Here I am!")
                // Occasion.postOne(newOcc)
        }

        render() {
                return (
                        <>
                                <OccListBtn // handleGetOccasions={this.handleGetOccasions} 
                                />
                                <OccCard />
                        </>
                )
        }
}

export default OccasionList