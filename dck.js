import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const hostname = request.headers.get('host')

  // news-web-dck.vercel.app からアクセスされた場合
  if (hostname === 'news-web-dck.vercel.app') {
    // URLのパスが「/newsweb」で始まっていない場合のみ書き換える
    if (!url.pathname.startsWith('/newsweb')) {
      // ブラウザのURLはそのままで、中身を /newsweb のものに差し替える (rewrite)
      return NextResponse.rewrite(new URL(`/newsweb${url.pathname}`, request.url))
    }
  }

  // それ以外（web-dck.vercel.appなど）は通常通り
  return NextResponse.next()
}
