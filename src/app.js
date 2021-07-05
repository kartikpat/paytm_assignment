import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter as Router, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import PropTypes from 'prop-types';
import ThemeProvider from './styles/themeProvider';

const App = ({ store, routes, location, context }) => {
    return (
        <Provider store={store}>
            <Router location={location} context={context}>
                <ThemeProvider>
                    <Switch>{renderRoutes(routes)}</Switch>
                </ThemeProvider>
            </Router>
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.objectOf(PropTypes.any).isRequired,
    context: PropTypes.objectOf(PropTypes.any),
    routes: PropTypes.arrayOf(PropTypes.object).isRequired,
    location: PropTypes.string,
};

App.defaultProps = {
    context: {},
    location: '',
};

export default App;
