import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';

import VueI18n from 'vue-i18n';
import Locales from './locale';
import zhLocale from 'iview/src/locale/lang/zh-CN';
import enLocale from 'iview/src/locale/lang/en-US';

import JSONView from 'vue-json-viewer';

Vue.use(JSONView);

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueI18n);
Vue.use(iView);

// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const lang = window.localStorage.getItem('language') || localLang || 'zh-CN';

Vue.config.lang = lang;

// 多语言配置
const locales = Locales;
const mergeZH = Object.assign(zhLocale, locales['zh-CN']);
const mergeEN = Object.assign(enLocale, locales['en-US']);
Vue.locale('zh-CN', mergeZH);
Vue.locale('en-US', mergeEN);


// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

var store = new Vuex.Store({
    state: {
        ui: "iview",
        componentSelect: {
            componentList: []
        },
        componentActive: {},
        sckjComponentList: {}
    },
    getters: {

    },
    mutations: {
        setUi(state, data) {
            state.ui = data.ui;
        },
        setComponentActive(state, data) {
            state.componentActive = data.componentActive;
        },
        setComponentSelect(state, data) {
            state.componentSelect = data.componentSelect;
        },
        setSckjComponentList(state, data) {
            state.sckjComponentList = data.sckjComponentList;
        }
    },
    actions: {

    }
});

Comjs.use("comjs:fw-core", function (fwCore) {

    window.fw = {
        core: fwCore
    };

    Comjs.use("comjs:sys-pageHelper", function (SysPageHelper) {
        window.sysPageHelper = new SysPageHelper();

        sysPageHelper.ajax({
            serviceType: "crossDomainCall",
            serviceSiteRootUrl: "http://58.210.204.106:11666/ptl/",
            serviceName: "ptl/main/tPtlComsExtendModel",
            methodName: "queryListTPtlComsExtendModelbyIDS",
            data: {
                ticket: "testTicket",
                pagingParams: {
                    pageSize: 1000,
                    pageIndex: 1
                }
            },
            success: function (resultData) {

                store.commit({
                    type: "setSckjComponentList",
                    sckjComponentList: resultData.data
                });

                new Vue({
                    el: '#app',
                    router: router,
                    store: store,
                    render: h => h(App)
                });


            }
        });

    });

});