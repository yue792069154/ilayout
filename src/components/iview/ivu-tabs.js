import Ivu from './ivu';
import Util from '../../libs/util';

class IvuTabs extends Ivu {

    constructor(Vue) {

        super();

        this.type = 'IvuTabs';

        this.label = Vue.$t('ivuTabs');

        this.layout = true;

        this.props = {

            type: 'card',
            size: 'large',
            closable: false,
            animated: true,

            tabs: [{
                label: '标签1',
                value: Util.getRandomCode(),
                componentList: []
            }, {
                label: '标签2',
                value: Util.getRandomCode(),
                componentList: []
            }, {
                label: '标签3',
                value: Util.getRandomCode(),
                componentList: []
            }]
        };

        this.groupList = [{
            groupName: Vue.$t('basicAttr'),
            groupCode: 'basicAttr',
            children: {
                size: {
                    type: 'Array',
                    render: 'Select',
                    optionList: [{
                        label: Vue.$t('large'),
                        value: 'large'
                    }, {
                        label: Vue.$t('small'),
                        value: 'small'
                    }, {
                        label: Vue.$t('default'),
                        value: 'default'
                    }]
                },
                type: {
                    type: 'Array',
                    optionList: [{
                        label: Vue.$t('line'),
                        value: 'line'
                    }, {
                        label: Vue.$t('card'),
                        value: 'card'
                    }]
                },
                tabs: {
                    type: 'StaticData',
                    field: 'tabs'
                },
                closable: {
                    type: 'Boolean'
                },
                animated: {
                    type: 'Boolean'
                }
            }
        }];
    }
}
export default IvuTabs;