import {withRouter} from "react-router-dom";
import Header from "./header";
import {removeUser} from "../../redux/userReducer";
import {connect} from "react-redux";

const HeaderContainer = (props) => {
        return <Header {...props} />
}

let MapStateToProps = (state) => {
    return {
        isAuth: state.UserPage.isAuth,
        email: state.UserPage.email
    }
}
let WithUrlDataHeaderComponent = withRouter(HeaderContainer);

export default connect(MapStateToProps, {
    removeUser
}) (WithUrlDataHeaderComponent);