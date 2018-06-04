const laravelNuxt = require("laravel-nuxt");

module.exports = laravelNuxt({
    // Options such as mode, srcDir and generate.dir are already handled for you.
    modules: [],
    plugins: [],
    head: {
        meta: [{
                charset: "utf-8"
            },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            {
                hid: "description",
                name: "description",
                content: "magazine"
            }
        ],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        }]
    },
    css: ["../../public/css/app.css"],
    /*
     ** Customize the progress bar color
     */
    mode: 'universal',
    loading: {
        color: "blue",
        height: "5px"
    },
    vendor: ["materialize"]
});