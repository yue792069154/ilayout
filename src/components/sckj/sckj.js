import Util from '../../libs/util';

class Sckj {

    constructor() {

        this.ui = 'sckj';
        this.active = true;
        this.key = Util.getRandomCode();

    }

    getComponentCode() {
        return Util.getRandomCode();
    }

}

export default Sckj;