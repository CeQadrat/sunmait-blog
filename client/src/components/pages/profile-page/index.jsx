import { connect } from 'react-redux';
import * as redux from 'redux';
import ProfilePage from 'components/pages/profile-page/ProfilePage.jsx';
import { getUser, getUsers, updateUser, changePassword } from 'redux/modules/profile/actions.js';
import { logout, verifyCredentials, login } from 'redux/modules/auth/actions.js';

const mapStateToProps = (state) => {
  return {
    user: state.user.user,
    profile: state.profile.profile,
    users: state.profile.usersById,
    updatedUser: state.profile.updatedUser
  }
};

const mapDispatchToProps = (dispatch) => redux.bindActionCreators({
  getUser,
  updateUser,
  logout,
  verifyCredentials,
  changePassword,
  getUsers,
  login
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);