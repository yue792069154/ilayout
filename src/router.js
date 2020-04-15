import Iview from './views/iview/index.vue';
import IFormCode from './views/iview/iform-code.vue';

const routers = [{
    path: '/',
    component: Iview
}, {
    path: '/code',
    component: IFormCode
}, {
    path: '/iview',
    component: Iview
}];

export default routers;