import {connect} from "react-redux";
import Profile from "../components/Profile";

function mapStateToProps(state) {
    return {
        user: state.userInfo,
        message: state.message
    }
}

export default connect(mapStateToProps)(Profile)

