// filepath: /c:/Users/ariel/OneDrive/Desktop/projects/mun2k25/mun2k25-next/src/server_utils/csrf.js
import { nextCsrf } from 'next-csrf';

export const { csrf, setup } = nextCsrf({
  secret: process.env.CSRF_SECRET, // Set this in your .env file
  tokenKey: 'csrfToken',
  cookieOptions: {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    path: '/',
  },
});