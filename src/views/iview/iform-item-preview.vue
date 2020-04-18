<script>
  import Render from "../../components/render";

  export default {
    name: 'IFormItemCreate',
    props: {
      componentList: {
        type: Array,
        default () {
          return [];
        }
      }
    },
    data() {
      return {

      }
    },
    created() {

    },
    methods: {

    },
    render(h) {

      var vm = this;

      return h("div", {

      }, [vm.componentList.map(function (component) {
        if (component.layout) {

          return h("div", {

            key: component.key
          }, [Render[component.type](h, component.props, this)]);

        } else {

          vm.$nextTick(function () {
            Comjs.use(component.comsId, function (View) {
              var view = new View();
              view.appendTo(vm.$refs[component.key]);
            });
          });

          return h("div", {
            ref: component.key
          });

        }
      })]);

    }
  }
</script>

<style scoped>
</style>