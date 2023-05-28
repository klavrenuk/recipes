export default defineNuxtConfig({
    app: {
        baseURL: '/recipes/'
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
