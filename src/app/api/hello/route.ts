
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest } from 'next/server'
import type { NextApiRequest, NextApiResponse } from 'next';


import { withApiAuthRequired } from '@auth0/nextjs-auth0/edge';

export const runtime = 'edge'

export const GET = withApiAuthRequired(async function test(request: NextApiRequest, response: NextApiResponse) {
  return new Response(JSON.stringify({ name: 'John Doe' }))

})

/*
export async function GET(request: NextRequest) {
  return new Response(JSON.stringify({ name: 'John Doe' }))
}

*/

