import Ivu from './ivu';
class IvuCard extends Ivu {

    constructor(Vue) {

        super();

        var self = this;

        this.type = 'IvuCard';

        this.label = Vue.$t('ivuCard');

        this.layout = true;

        this.props = {

            title: Vue.$t('ivuCard'),
            bordered: true,
            "dis-hover": false,
            shadow: false,
            padding: 16,

            label: self.label,
           
            componentList: []
        };

        this.groupList = [{
            groupName: Vue.$t('basicAttr'),
            groupCode: 'basicAttr',
            children: {
                title: {
                    type: "String"
                },
                bordered: {
                    type: "Boolean"
                },
                "dis-hover": {
                    type: "Boolean"
                },
                shadow: {
                    type: "Boolean"
                },
                padding: {
                    type: "Number"
                }

            }
        }];
    }
}

export default IvuCard;