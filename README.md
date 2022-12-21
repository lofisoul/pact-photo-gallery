🔗: https://pact-photo-gallery.vercel.app/

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## swr

For fetching the JSON data, this app utilizes Vercel's [swr](https://swr.vercel.app/) (stale while revalidate) hook.

Usage:

```
import useSWR from 'swr'

//in component
const {data, error} = useSWR(key, fetcher)

if(!data) return 'no data'
if(error) return 'error'

return <div>{JSON.stringify(data)}</div>
```

## API Routes

To manage the JSON data for this app, certain API routes were created to fetch data on the client side. The API consumes the provided JSON data and sends a response object (formatted data) back to the client. Routes include:

- `/api/filetree`
- `/api/contentobjects`
- `/api/album/images?idPath`

## Dynamic Routes

Next.js builds a page for each path defined in `getStaticPaths` server side, meaning there is an SEO-friendly page for each album and element in the app.
