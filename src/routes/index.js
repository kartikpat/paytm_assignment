import { fetchCountries } from '../containers/CountriesList/slice';
import Home from '../pages/Home/index';

const Routes = [
    {
        path: '/',
        exact: true,
        component: Home,
        loadData: (dispatch) => dispatch(fetchCountries()),
    },
];

export default Routes;
