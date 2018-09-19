import { NavigationActions } from 'react-navigation';

import { RootNavigator } from '../../navigators/AppNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Home');
const tempNavState = RootNavigator.router.getStateForAction(firstAction);
const initialNavState = RootNavigator.router.getStateForAction(tempNavState);

export const BACK_PRESS = 'BACK_PRESS';
/**
 * Screen
 */
export const HOME_SCREEN = 'HOME_SCREEN';

const nav = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
        case BACK_PRESS:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.back(),
                state
            );
            break;
        default:
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
}

export default nav;