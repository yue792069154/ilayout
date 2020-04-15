let util = {
    getRandomCode() {
        return Number(Math.random().toString().substr(3, 6) + Date.now()).toString(36);
    }
};
util.title = function (title) {
    title = title ? title: 'iLayout';
    window.document.title = title;
};

export default util;