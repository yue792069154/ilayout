<script>
    const prefixCls = 'iform';

    import IFormItemPreview from "./iform-item-preview.vue";


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

            return h("IFormItemPreview", {
                props: {
                    componentList: this.componentSelect.componentList
                }
            });

        },
        components: {
            IFormItemPreview
        }
    }
</script>