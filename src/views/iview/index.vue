<script>
    const prefixCls = 'iform';

    import IFormItemCreate from "./iform-item-create.vue";


    export default {
        name: 'IFormItem',
        data() {
            return {
                componentSelect: {
                    componentList: []
                },
            }
        },
        created() {
            this.componentSelect = this.$store.state.componentSelect;
        },
        render(h) {

            var vm = this;

            return h("IFormItemCreate", {
                props: {
                    componentList: this.componentSelect.componentList,
                    className: `${prefixCls}-design-form`
                },
                on: {
                    onAdd(component) {

                        vm.$store.commit({
                            type: "setComponentActive",
                            componentActive: component
                        });


                        vm.$store.commit({
                            type: "setComponentSelect",
                            componentSelect: vm.componentSelect
                        });

                    },
                    onUpdate(component) {

                        vm.$store.commit({
                            type: "setComponentActive",
                            componentActive: component
                        });


                        vm.$store.commit({
                            type: "setComponentSelect",
                            componentSelect: vm.componentSelect
                        });
                    },
                    onChoose(component) {
                        vm.$store.commit({
                            type: "setComponentActive",
                            componentActive: component
                        });
                    }
                }
            });

        },
        components: {
            IFormItemCreate
        }
    }
</script>