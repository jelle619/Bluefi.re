import "/styles/global.css"
import Layout from "/components/layout.js"
import { Analytics } from '@vercel/analytics/react';

import { DM_Sans } from 'next/font/google'

/*
import localFont from 'next/font/local'

100 	Thin (Hairline)
200 	Extra Light (Ultra Light)
300 	Light
400 	Normal (Regular)
500 	Medium
600 	Semi Bold (Demi Bold)
700 	Bold
800 	Extra Bold (Ultra Bold)
900 	Black (Heavy)
950 	Extra Black (Ultra Black)
*/

// const lemonMilkPro = localFont({
//     src: [
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/ultralight.woff2',
//             weight: '200',
//             style: 'normal',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/ultralight-italic.woff2',
//             weight: '200',
//             style: 'italic',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/regular.woff2',
//             weight: '400',
//             style: 'normal',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/regular-italic.woff2',
//             weight: '400',
//             style: 'italic',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/medium.woff2',
//             weight: '500',
//             style: 'normal',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/medium-italic.woff2',
//             weight: '500',
//             style: 'italic',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/bold.woff2',
//             weight: '700',
//             style: 'normal',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/bold-italic.woff2',
//             weight: '700',
//             style: 'italic',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/heavy.woff2',
//             weight: '900',
//             style: 'normal',
//         },
//         {
//             path: '../public/fonts/lemon-milk-pro-ftr/heavy-italic.woff2',
//             weight: '900',
//             style: 'italic',
//         }
//     ]
// })

// const ffDin = localFont({
//     src: [
//       {
//         path: '../public/fonts/ff-din/regular.ttf',
//         style: 'normal',
//       },
//       {
//         path: '../public/fonts/ff-din/italic.ttf',
//         style: 'italic',
//       },
//     ],
//   })

// const dbSans = localFont({
//     src: '../public/fonts/db-sans/regular.otf'
//   })

const dmSans = DM_Sans({
    weight: ['400', '500', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin']
})


export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <div className={dmSans.className}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </div>
            <Analytics />
        </>
    )
}
