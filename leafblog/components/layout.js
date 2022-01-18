import Head from "next/head"
import Link from "next/link"
import { Button } from "@mui/material"
import HeaderBar from "./HeaderBar"
const name = "Your Name"
export const siteTitle = "Next.js Sample Website"

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header>
        <HeaderBar></HeaderBar>
      </header>
      <main className="pt-16">{children}</main>
      {!home && (
        <div>
          <Link href="/">
            <Button>Back to home</Button>
          </Link>
        </div>
      )}
    </div>
  )
}
