import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {getAccountActions} from "../actions/webActions";
import Account from "../components/Account";

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getAccount: getAccountActions
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(Account)