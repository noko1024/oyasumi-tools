import { handleAuth } from '@auth0/nextjs-auth0';
export const runtime = 'edge'
export const GET = handleAuth()
