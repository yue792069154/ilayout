import Ivu from './ivu';
class IvuDivider extends Ivu {

    constructor(Vue) {

        super();

        var self = this;

        this.type = 'IvuDivider';

        this.label = Vue.$t('ivuDivider');

        this.layout = true;

        this.props = {

            title: Vue.$t('ivuDivider'),
            type: "horizontal",
            orientation: "center",
            dashed: false,
            size: "default",

            label: self.label
        };

        this.groupList = [{
            groupName: Vue.$t('basicAttr'),
            groupCode: 'basicAttr',
            children: {
                title: {
                    type: "String"
                },
                type: {
                    type: "Array",
                    optionList: [{
                        label: Vue.$t('horizontal'),
                        value: "horizontal"
                    }, {
                        label: Vue.$t('vertical'),
                        value: "vertical"
                    }]
                },
                orientation: {
                    type: "Array",
                    optionList: [{
                        label: Vue.$t('left'),
                        value: "left"
                    }, {
                        label: Vue.$t('right'),
                        value: "right"
                    }, {
                        label: Vue.$t('center'),
                        value: "center"
                    }]
                },
                dashed: {
                    type: "Boolean"
                },
                size: {
                    type: "Array",
                    optionList: [{
                        label: Vue.$t('small'),
                        value: "small"
                    }, {
                        label: Vue.$t('default'),
                        value: "default"
                    }]
                }
            }
        }];
    }
}

export default IvuDivider;
