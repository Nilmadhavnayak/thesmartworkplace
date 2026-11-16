
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('[data-n]').forEach(count);io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
function count(el){const t=+el.dataset.n;let s=null;const f=ts=>{s??=ts;const p=Math.min((ts-s)/1400,1);el.textContent=Math.round(t*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)};requestAnimationFrame(f)}
const bar=document.getElementById('progress'),nav=document.getElementById('nav'),par=document.querySelectorAll('[data-speed]');
function onScroll(){const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;bar.style.width=(y/h*100)+'%';nav.classList.toggle('scrolled',y>10);const k=innerWidth>960?1:0;par.forEach(p=>p.style.transform=`translateY(${y*p.dataset.speed*k}px)`)}
addEventListener('scroll',()=>requestAnimationFrame(onScroll),{passive:true});onScroll();
const d=document.getElementById('dash')||document.createElement('div');
d.addEventListener('mousemove',e=>{const r=d.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;d.style.transform=`perspective(900px) rotateY(${x*6}deg) rotateX(${-y*6}deg)`});
d.addEventListener('mouseleave',()=>d.style.transform='');

const F='<circle cx="52" cy="54" r="2" fill="#1b2433"/><circle cx="68" cy="54" r="2" fill="#1b2433"/><path d="M52 64q8 7 16 0" stroke="#7a3b2a" stroke-width="2.5" fill="none" stroke-linecap="round"/>',
G='<g fill="none" stroke="#1b2433" stroke-width="2.5"><rect x="42" y="48" width="15" height="11" rx="4"/><rect x="63" y="48" width="15" height="11" rx="4"/><path d="M57 53h6"/></g>',
sh=c=>`<path d="M38 50c-4-26 12-38 24-38s28 10 22 38c-4-10-8-16-22-18-14 2-20 8-24 18z" fill="${c}"/>`,
lb=c=>`<path d="M34 56c-2 34 4 50 10 56h32c6-6 12-22 10-56z" fill="${c}"/>`,
lf=c=>`<path d="M36 52c-4-28 10-40 24-40s28 12 24 40c-4-14-10-22-24-22s-20 8-24 22z" fill="${c}"/>`,
mk=(k,c,bk,fr,x='')=>`<svg viewBox="0 0 120 130">${bk}<path d="M12 130c0-30 20-44 48-44s48 14 48 44z" fill="${c}"/>${x.includes('vest')?'<path d="M42 92v38M78 92v38" stroke="#fff" stroke-width="5" opacity=".8"/>':''}<rect x="52" y="70" width="16" height="20" rx="7" fill="${k}"/><ellipse cx="60" cy="52" rx="22" ry="26" fill="${k}"/>${F}${fr}${x}</svg>`,
V='<path d="M50 88l10 16 10-16z" fill="#fff"/>',
A=[mk('#e8b38d','#d6b894',lb('#2a1a14'),lf('#2a1a14'),V),mk('#e0ac86','#475569','',sh('#1b2433'),V+G),mk('#e8b794','#c9a27e',lb('#5a3422'),lf('#5a3422'),V),
mk('#d9a07a','#1e3a8a','','','<path d="M36 40c0-18 12-26 24-26s24 8 24 26z" fill="#1e3a8a"/><rect x="33" y="38" width="54" height="6" rx="3" fill="#172554"/><rect x="53" y="22" width="14" height="9" rx="2" fill="#fbbf24"/>'),
mk('#cf9870','#a3e635','','','vest<path d="M36 42c0-20 10-28 24-28s24 8 24 28z" fill="#facc15"/><rect x="31" y="40" width="58" height="6" rx="3" fill="#eab308"/>')];
document.querySelectorAll('.ph').forEach((e,i)=>e.innerHTML=A[i].replace('vest',''));
const mn=document.getElementById('menu');document.getElementById('burger').onclick=()=>mn.classList.toggle('open');
mn.querySelectorAll('a').forEach(a=>a.onclick=()=>mn.classList.remove('open'));
