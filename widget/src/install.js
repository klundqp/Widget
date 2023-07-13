const req = require.context(".lib", true, /\.vuw$/);
const components = {};

req.keys().forEach(key => {
    const name = key.replace(/^.*[\\/]/, "").replace(/\.[^/.]+$/, "");
    components[name] = req[key].default;
});

const install = (Vue, options = {}) => {
    for (const key in components) {
        const k = options.prefix ? options.prefix + key : key;

        Vue.component(k, components[key]);
    }
};

if (typeof window  !== "undefined" && window.Vue) {
    install(window.Vue);
}

export {install};