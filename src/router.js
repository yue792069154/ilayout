import Index from './views/iview/index.vue';
import IFormItemJson from './views/iview/iform-item-json.vue';
import Preview from './views/iview/preview.vue';

const routers = [{
    path: '/',
    component: Index
}, {
    path: '/json',
    component: IFormItemJson
}, {
    path: '/preview',
    component: Preview
}];

export default routers;