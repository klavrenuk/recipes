export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: [
                {lang: 'ru'}
            ],
            title: 'Recipes',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },

    runtimeConfig: {
        public: {
            BASE_URL:  'https://my-json-server.typicode.com/klavrenuk/recipes'
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
