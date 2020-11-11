import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getAccountActions} from "../actions/webActions";
import Edit from "../components/Edit";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAccount: getAccountActions
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Edit)