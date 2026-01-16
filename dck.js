// 遷移元のURLを取得
const referrer = document.referrer;

if (referrer.includes('web-dck.vercel.app')) {
  // web-dck.vercel.app から来た場合
  window.location.href = 'web-dck.vercel.app'; 
} else if (referrer.includes('news-web-dck.vercel.app')) {
  // news-web-dck.vercel.app から来た場合
  window.location.href = 'news-web-dck.vercel.app';
} else {
  // それ以外（直接アクセスなど）の場合
  console.log("通常通りの表示");
}
