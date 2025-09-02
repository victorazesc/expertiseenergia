
import Head from "next/head"
import "./globals.css"
import 'slick-carousel/slick/slick.css';

import { FacebookPixelEvents } from "@/components/PixelEvents"
import { Suspense } from "react"
import Script from "next/script";
export const metadata = {
  title: 'Expertise Solar',
  description: '',
}
const GOOGLE_GTM_ID = process.env.NEXT_PUBLIC_GOOGLE_GTM_ID;
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <Script
        src="https://track-mint.vercel.app/js/script.js"
        defer
        data-website-id="Pxu9U5UPv4MqPOoesjYP3"
        data-domain="www.expertiseenergia.com.br"
        data-debug="true"
        strategy="afterInteractive"
      />
      <Head>

        <script
          type="text/javascript"
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w, d, s, l, i) {
                    w[l] = w[l] || []
                    w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" })
                    const f = d.getElementsByTagName(s)[0],
                      j = d.createElement(s),
                      dl = l != "dataLayer" ? "&l=" + l : ""
                    j.async = true
                    j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl
                    f.parentNode.insertBefore(j, f)
                  })(window,document,'script','dataLayer',"${GOOGLE_GTM_ID}")`,
          }}
        />
        <script
          type="text/javascript"
          async
          src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/ca5ed3b1-b319-4b84-b8f1-602cc1126b7a-loader.js"
        />

      </Head>
      <body>
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GOOGLE_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {children}
        <Suspense fallback={null}>
          <FacebookPixelEvents />
        </Suspense>
      </body>
    </html>
  )
}
