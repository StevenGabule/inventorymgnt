import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import Dashboard from '../pages/Dashboard';
import Register from '../pages/auth/Register';
import Forget from '../pages/auth/Forget';

const routes = [
    {path: '/', component: Dashboard, name: 'Dashboard'},
    {path: '/login', component: Login, name: 'Login'},
    {path: '/logout', component: Logout, name: 'Logout'},
    {path: '/register', component: Register, name: 'Register'},
    {path: '/forget', component: Forget, name: 'Forget'},
];

export default routes;
