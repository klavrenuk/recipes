export default defineNuxtConfig({
    app: {
        baseURL: '/recipes/'
    },
    target: 'static',
    router: {
        base: '/recipes/', //eg:- /crstnmac.github.io/
    },

    tailwindcss: {
        configPath: "~/tailwind.config.js",
        cssPath: "~/assets/styles/styles.css",
        exposeConfig: false,
        injectPosition: 0,
        viewer: true,
    },

    modules: [
        "@nuxtjs/tailwindcss",
        [
            "@pinia/nuxt",
            {
                autoImports: [
                    "defineStore",
                    ["defineStore", "definePiniaStore"]
                ]
            },
        ]
    ]
})
