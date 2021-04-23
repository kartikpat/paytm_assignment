import Home from '../containers/Home/index.jsx';
import {getLaunches} from '../components/SpaceXLaunches/action';

const Routes = [
    {
      path: '/',
      exact: true,
      component: Home,
      loadData: dispatch => dispatch(getLaunches({}))
    }
];

export default Routes;