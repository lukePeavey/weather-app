import { connect } from 'react-redux'
import SearchSuggestions from '../components/SearchSuggestions'
import * as fromState from '../store/selectors'

const mapStateToProps = (state, ownProps) => ({
  suggestions: fromState.getSearchSuggestions(state)
})

export default connect(mapStateToProps, null)(SearchSuggestions)
