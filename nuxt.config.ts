// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app: {
        head: {
            title: "Eid Card Designer | Create Beautiful Greeting Cards for Eid'",

            meta: [
                {
                    name: 'description',
                    content: 'Celebrate the joyous occasion of Eid with beautiful and personalized greeting cards. Choose from a variety of stunning templates to create your own unique design. Send your heartfelt wishes to loved ones near and far with Eid Card Designer..'
                },
            ],
            link: [
                // { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css' },
                {
                    rel: 'icon', type: 'image/png', sizes: '32x32', href: '/fav.png'
                },
                // {
                //     rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png'
                // },
                // {
                //     rel: 'icon', type: 'apple-touch-icon', sizes: '"180x180', href: '//apple-touch-icon.png'
                // },
                // {
                //     rel: 'manifest', href: '/site.webmanifest'
                // },

            ],

        }
    }
})
