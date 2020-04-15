import Sckj from './sckj';


class SckjCore extends Sckj {

    constructor(Vue) {

        super();

        this.getSckjComponents = function () {
            
            var componentList = Vue.$store.state.sckjComponentList;

            var componentClass = {};

            for (let i = 0; i < componentList.length; i++) {
                (function (j) {

                    componentClass['Sckj' + componentList[j].comsID] = class extends Sckj {
                        constructor() {

                            super();

                            this.type = 'Sckj' + componentList[j].comsID;
                            this.label = componentList[j].comsName;

                            this.comsId ='http://58.210.204.106:8186/coms/web/coms/views/businessComs/sps/com-building-project-total/card.js';// componentList[j].comsID;

                        }
                    };
                })(i);
            }

            return componentClass;
        };
    }
}

export default SckjCore;