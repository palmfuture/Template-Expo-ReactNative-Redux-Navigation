import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';

import {
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';

import {

} from 'native-base';

import {

} from '../../components';

import Spinner from 'react-native-loading-spinner-overlay';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

class Home extends Component {

    static propTypes = {
        navigation: PropTypes.object.isRequired
    }

    render() {
        const { navigation } = this.props;
        // if (isLoading) return <Spinner visible={isLoading} textContent={"กำลังโหลด..."} textStyle={{ color: 'white' }} overlayColor='rgba(38, 50, 56, 1)' />
        return (
            <Fragment>
                <ScrollView style={styles.container}>
                </ScrollView>
            </Fragment>
        )
    }
}

Home.navigationOptions = () => ({
    title: '',
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: '#2962ff'
    },
    headerRight: (
        <Fragment>
        </Fragment>
    )
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#263238'
    },
});

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => {
    return bindActionCreators(
        {

        }, dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
