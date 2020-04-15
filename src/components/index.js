import IvuGrid from './iview/ivu-grid';
import IvuTabs from './iview/ivu-tabs';
import IvuCard from './iview/ivu-card';
import IvuDivider from './iview/ivu-divider';
import IvuCollapse from './iview/ivu-collapse';
import IvuBlock from './iview/ivu-block';

import SckjCore from './sckj/sckj-core.js';

export default class Components {

    constructor(vue) {

        this.Components = {
            iview: {
                layoutComponents: {
                    IvuGrid,
                    IvuTabs,
                    IvuCard,
                    IvuDivider,
                    IvuCollapse,
                    IvuBlock
                }
            },
            sckj: {
                analysisComponents: {
                    ...new SckjCore(vue).getSckjComponents()
                }
            }
        };
        
    }
}