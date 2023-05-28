export default defineNuxtConfig({
    ssr: false,
    nitro: {
        preset: 'service-worker'
    },
    app: {
        baseURL: '/recipes/',
        ssr: false,
        nitro: {
            preset: 'service-worker'
        }
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
