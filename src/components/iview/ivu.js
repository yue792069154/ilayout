import Util from '../../libs/util';

class Ivu {

    constructor() {

        this.ui = 'iview';

        this.prefixCls = 'iLayout';

        this.active = true;

        this.key = Util.getRandomCode();

    }

    getComponentCode() {
        return Util.getRandomCode();
    }

}

export default Ivu;