import IechoPage from './iecho.page.jsx'
import { connect } from 'react-redux'
import { handleAddRow } from './../../flux/actions'

const mapStateToProps = (state, _props) => {
  return {
    responses: state.iecho.iechoResponses
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setResponses: (value) => {
      dispatch(handleAddRow(value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IechoPage);