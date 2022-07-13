import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actions/users';

interface IHomeState {

}
interface IHomeProps {
    users: any,
    getUsers: Function
}
export class Home extends React.Component<IHomeProps, IHomeState> {
    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>Home</div>
        )
    }
}

const mapStateToProps = (state: { users: any; }) => ({
    users: state.users
});

const mapDispatchToProps = (dispatch: any) => ({
    getUsers: () => dispatch(getUsers()),
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)