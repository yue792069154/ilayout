<style lang="less">
    @import "./styles/index.less";
</style>

<template>
    <div :class="[prefixCls]">
        <div :class="[prefixCls + '-pannel']">
            <div :class="[prefixCls + '-pannel-bolder']">
                <div :class="[prefixCls + '-pannel-header']">
                    <div :class="[prefixCls + '-pannel-header-left']">
                        <i class="fa fa-file-text"></i> iLayout
                    </div>
                </div>
                <div :class="[prefixCls + '-pannel-main']">
                    <div :class="[prefixCls + '-pannel-main-left']">
                        <div :class="[prefixCls + '-card']" v-for="componentGroup in componentGroupList">
                            <div :class="[prefixCls + '-card-header']">
                                <div :class="[prefixCls + '-card-header-title']" v-text="componentGroup.label">

                                </div>
                            </div>
                            <div :class="[prefixCls + '-card-content']">
                                <ul :class="[prefixCls + '-card-content-draggable-coms']">
                                    <draggable v-model="componentModel" :options="draggableOptions">
                                        <li :class="[prefixCls + '-card-content-draggable-com']"
                                            v-for="component in componentGroup.componentList" :type="component.type"
                                            :ui="component.ui" :groupType="componentGroup.groupType">
                                            <i :class="component.icon"></i>
                                            <a v-text="component.label"></a>
                                        </li>
                                    </draggable>
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div :class="[prefixCls + '-pannel-main-center']">
                        <div :class="[prefixCls + '-pannel-main-center-toolbar']">

                            <div :class="[prefixCls + '-pannel-main-center-toolbar-r']">
                                <ul>
                                    <li>
                                        运行
                                    </li>
                                    <li>
                                        <router-link to="/">
                                            设计
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="preview">
                                            预览
                                        </router-link>
                                    </li>
                                    <li>
                                        <router-link to="code">
                                            数据
                                        </router-link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div :class="[prefixCls + '-pannel-main-center-content']">
                            <div :class="[prefixCls + '-design']">
                                <router-view></router-view>
                                <div v-if="componentList==0" :class="[prefixCls + '-no-data']">
                                    <Icon type="md-barcode" />
                                    <span>从左侧拖拽添加</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="[prefixCls + '-pannel-main-right']">
                        <div :class="[prefixCls + '-card']" v-for="group in componentActive.groupList"
                            :key="group.groupCode">
                            <div :class="[prefixCls + '-card-header']">
                                <div :class="[prefixCls + '-card-header-title']" v-text="group.groupName">
                                </div>
                            </div>
                            <div
                                :class="[prefixCls + '-card-content padding-left-10px padding-right-10px padding-bottom-10px']">
                                <i-form-item-config :formItem="componentActive" :formItemConfig="group.children">
                                </i-form-item-config>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import draggable from "vuedraggable";
    import _ from "lodash";

    import Components from "./components/index";
    import IFormItemConfig from './views/iform-item-config.vue';

    const prefixCls = 'iform';

    export default {
        name: 'pannelets',
        data: function () {
            return {

                prefixCls: prefixCls,

                draggableOptions: {
                    group: {
                        name: 'iform',
                        pull: 'clone',
                        put: false
                    },
                    ghostClass: prefixCls + "-item-move",
                    animation: 150,
                    sort: false
                },
                componentModel: [],

                componentGroupList: [],
                comAttributeGroupList: []

            };
        },
        computed: {
            componentActive() {

                var componentActive = this.$store.state.componentActive
                return componentActive;

            },
            componentList() {
                return this.$store.state.componentSelect.componentList
            }
        },
        created() {

            this.getComponents();

        },
        mounted() {

        },
        methods: {

            getComponents() {

                let vm = this;

                var components = new Components(this).Components;

                _.mapKeys(components, (value, key) => {

                    _.mapKeys(value, (value, key) => {
                        var componentGroup = {
                            label: vm.$t(key),
                            groupType: key,
                            componentList: []
                        };

                        _.forEach(value, function (Component) {
                            componentGroup.componentList.push(new Component(vm));
                        });

                        vm.componentGroupList.push(componentGroup);

                    });
                });
            },
            getComAttributeGroupList(comAttributeGroupList) {
                this.comAttributeGroupList = comAttributeGroupList;
            }
        },
        components: {
            draggable,
            IFormItemConfig
        }
    };
</script>