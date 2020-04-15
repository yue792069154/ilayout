import Ivu from './ivu';

class IvuGrid extends Ivu {

    constructor(Vue) {

        super();

        var self = this;

        this.type = 'IvuGrid';

        this.label = Vue.$t('ivuGrid');

        this.layout = true;

        this.props = {

            gutter: 1,
            align: null,
            justify: null,

            colList: [{
                label: 8,
                componentList: []
            }, {
                label: 8,
                componentList: []
            }, {
                label: 8,
                componentList: []
            }]

        };

        this.groupList = [{
            groupName: Vue.$t('basicAttr'),
            groupCode: 'basicAttr',
            children: {
                gutter: {
                    type: "Number"
                },
                cols: {
                    type: "StaticData",
                    field: "colList",
                    textType:"Number"
                }
            }
        }];
    }
}
export default IvuGrid;