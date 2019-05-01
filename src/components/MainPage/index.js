import React from 'react'
import {connect} from 'react-redux'
import { pushComics } from '../../Store/actions'

function MainPage(){
    return(
        <div>
            Heyyy
        </div>
    )
}

const mapStateToProps = state => ({ comics : state.comics })

const mapDispatchToProps = dispatch => ({ pushComics : comics => dispatch(pushComics(comics)) })

export default connect(mapStateToProps,mapDispatchToProps)(MainPage)
