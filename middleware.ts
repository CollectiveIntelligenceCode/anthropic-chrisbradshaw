import { NextRequest, NextResponse } from 'next/server';

const USER = 'chris';
const PASS = 'jflfjgskllklsdkfdfd';

export function middleware(req: NextRequest) {
  const auth = req.headers.get('authorization');

  if (auth) {
    const [scheme, encoded] = auth.split(' ');
    if (scheme === 'Basic' && encoded) {
      const decoded = Buffer.from(encoded, 'base64').toString('utf-8');
      const [user, pass] = decoded.split(':');
      if (user === USER && pass === PASS) {
        return NextResponse.next();
      }
    }
  }

  return new NextResponse('Unauthorised', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Chris Bradshaw"',
    },
  });
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
