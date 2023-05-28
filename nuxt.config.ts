export default defineNuxtConfig({
    app: {
        baseURL: '/recipes/',
        ssr: true,
        head: {
            htmlAttrs: [
                {lang: "ru"}
            ],
            title: 'Recipes',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
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
