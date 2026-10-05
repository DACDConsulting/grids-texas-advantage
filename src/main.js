import { PILLARS, HOME_SECTIONS } from "./content.js";

const ARROW = '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8h9M8.5 4l3.8 4-3.8 4"/></svg>';
const carr = (dk)=>`<span class="carr${dk?" dk":""}" aria-hidden="true">${ARROW}</span>`;
const esc = s => s.replace(/&/g,"&amp;").replace(/</g,"&lt;");

/* ---------- Sidebar ---------- */
function sideHTML(active, visualTag){
  const items = [];
  if(active !== "overview"){
    items.push(`<li><a href="#overview"><i>00</i>Overview</a></li>`);
  }
  PILLARS.filter(p => p.id !== active).forEach(p => {
    items.push(`<li><a href="#${p.id}"><i>${p.n}</i>${p.short}</a></li>`);
  });
  return `
  <aside class="side">
    <div class="side-visual"><span class="rule" aria-hidden="true"></span>
      <span class="tag"><small>${visualTag.small}</small>${visualTag.big}</span></div>
    <div>
      <h4>The Texas Advantage</h4>
      <ul class="sidenav">
        ${items.join("")}
      </ul>
    </div>
    <span class="sidelink">${carr(true)}View Related People</span>
  </aside>`;
}

/* ---------- Home ---------- */
function homeHTML(){
  const entering = ["Texas politics","Texas power markets","Texas water challenges","Texas communities","Texas economic development systems","Texas regulatory environments","Texas business relationships"];
  const grids = [
    ["G","Government Affairs & Public Relations","Helping clients navigate legislative, regulatory and community environments through the integrated capabilities of GRPR.","Through GRPR"],
    ["R","Real Estate","Supporting site acquisition, land use, entitlements, water rights, easements, leasing and development.",""],
    ["I","Infrastructure","Addressing power, grid interconnection, transmission, natural gas, utility and construction matters.",""],
    ["D","Development","Providing M&A, financing, tax planning, joint venture and investment support.",""],
    ["S","Security","Advising on cybersecurity, data privacy, compliance, certification planning and operational security through Gray Reed Advisory.","Through Gray Reed Advisory"]
  ];
  const experience = ["Data center development and investment transactions","Private equity-sponsored project financing","Tax planning and incentive structures","Power generation and natural gas infrastructure","Real estate and land-use matters","Construction disputes and contract negotiation","Water rights and supply strategy","Public affairs and stakeholder engagement campaigns","Economic development initiatives and governmental relations support"];
  const serve = ["Data center developers","Hyperscalers and AI infrastructure providers","Data center operators","Private equity sponsors","Infrastructure funds","Real estate investors","Texas landowners","Utilities and power providers","Economic development organizations","National and international law firms"];
  const topics = ["Legislative updates","Water and infrastructure developments","Grid and power market intelligence","Tax incentive trends","Community and public affairs insights","Data center market intelligence"];
  return `
  <div class="band"><div class="wrap">
    <div><div class="crumb"><a href="#overview">Industries</a></div><h1>Data Centers</h1></div>
    <div class="tools"><span>PDF</span><span>Email</span></div>
  </div></div>

  <div class="feature" id="overview"><div class="wrap">
    <div class="hero">
      <div>
        <span class="eyebrow">GRIDS · The Texas Advantage</span>
        <h2>Where Data Centers <b>Meet Texas.</b><a class="go" href="#pillars" data-go="pillars" aria-label="Go to the six pillars">${carr()}</a></h2>
      </div>
      <div class="lede">
        <p>Texas has become one of the most important data center markets in North America.</p>
        <p>Billions of dollars are flowing into hyperscale campuses, AI infrastructure, power generation, transmission systems, water infrastructure and digital connectivity projects across the state. Yet the factors that determine project success extend well beyond site selection and construction.</p>
      </div>
    </div>
    <div class="spot-head"><span class="hl-label">Six Pillars <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3l5 4 5-4M3 9l5 4 5-4"/></svg></span></div>
    <div class="spots" id="pillars">
      ${PILLARS.map(p=>`<a class="spot" href="#${p.id}"><span class="sn">Pillar ${p.n}</span><span class="st">${p.short}</span><span class="sm">${esc(p.homeHead)}</span><span class="sg">${carr()}</span></a>`).join("")}
    </div>
  </div></div>

  <div class="wrap page">
    ${sideHTML("overview",{seed:7,small:"Industries",big:"GRIDS"})}
    <div class="main">
      <section id="understanding">
        <h2>Understanding the Texas Advantage</h2>
        <div class="prose">
          <p class="lead">A project may begin as a land acquisition, but it quickly involves water rights, power procurement, grid interconnection requirements, tax incentives, construction, government affairs, public perception and stakeholder engagement.</p>
          <p>Most organizations entering Texas believe they are entering a real estate and infrastructure market. In reality, they are entering:</p>
          <ul class="bul cols">${entering.map(e=>`<li>${e}</li>`).join("")}</ul>
          <p>The Texas Advantage is the ability to see how these forces connect and make informed decisions before they become obstacles.</p>
          <p class="kick">Success requires understanding how Texas works.</p>
        </div>
      </section>

      <section id="six">
        <h2>Where Data Centers Meet Texas</h2>
        <ul class="plinks">
          ${PILLARS.map(p=>`<li><a href="#${p.id}">${carr()}<span><b>${esc(p.title)}</b><em>${esc(p.headline)}</em></span></a></li>`).join("")}
        </ul>
      </section>

      <section id="platform">
        <h2>The GRIDS Platform</h2>
        <h3 class="rd">One Coordinated Team. One Texas Strategy.</h3>
        <div class="prose" style="margin-bottom:22px">
          <p>Gray Reed's GRIDS initiative helps developers, investors, operators, landowners and outside counsel navigate the legal, regulatory, political and business realities that shape data center development across Texas.</p>
          <p>Many firms can provide legal services. Few can combine legal counsel, government affairs, public affairs and cybersecurity advisory services under a single coordinated platform. The GRIDS name reflects five coordinated areas of capability:</p>
        </div>
        <div class="gl">
          ${grids.map(g=>`<div><span class="L" aria-hidden="true">${g[0]}</span><div><h3 class="rd" style="margin-bottom:6px">${esc(g[1])}</h3><p>${esc(g[2])}</p>${g[3]?`<span class="via">${g[3]}</span>`:""}</div></div>`).join("")}
        </div>
        <div class="bottomline">
          <span class="lbl">The Bottom Line</span>
          <p>If your project involves Texas, understanding Texas is an advantage. <b>That is why GRIDS exists.</b></p>
        </div>
      </section>

      <section id="counsel">
        <div class="callout">
          <p class="q">Your client may have global counsel. <b>They still need Texas counsel.</b></p>
          <p>GRIDS serves as a trusted Texas partner for law firms whose clients are investing in the Texas data center market, strengthening the broader advisory team while respecting existing client relationships.</p>
          <a class="more" href="#local-counsel">${carr()}The outside counsel pathway</a>
        </div>
      </section>

      <section id="experience">
        <div class="split">
          <div>
            <h2>Representative Experience</h2>
            <ul class="bul">${experience.map(e=>`<li>${esc(e)}</li>`).join("")}</ul>
          </div>
          <div>
            <h2>Who We Serve</h2>
            <ul class="bul">${serve.map(s=>`<li>${esc(s)}</li>`).join("")}</ul>
          </div>
        </div>
      </section>

      <section id="insights">
        <h2>The Texas Advantage Series</h2>
        <p style="max-width:72ch">Stay informed on the policy, infrastructure, community and market developments shaping data center projects across Texas.</p>
        <div class="topics">${topics.map(t=>`<span>${esc(t)}</span>`).join("")}</div>
        <div class="feed">[ Current GRIDS thought leadership loads here dynamically from the Gray Reed CMS ]</div>
      </section>
    </div>
  </div>`;
}

/* ---------- Pillar page ---------- */
function pillarHTML(p){
  const i = PILLARS.indexOf(p);
  const prev = PILLARS[(i+PILLARS.length-1)%PILLARS.length], next = PILLARS[(i+1)%PILLARS.length];
  const body = p.body.map((t,k)=> t.startsWith("@") ? `<p class="adv">${esc(t.slice(1))}</p>` : `<p${k===0?' class="lead"':""}>${esc(t)}</p>`).join("");
  return `
  <div class="band"><div class="wrap">
    <div><div class="crumb"><a href="#overview">Data Centers</a> / The Texas Advantage / Pillar ${p.n}</div><h1>${esc(p.title)}</h1></div>
    <div class="tools"><span>PDF</span><span>Email</span></div>
  </div></div>
  <div class="wrap page">
    ${sideHTML(p.id,{seed:i*3+2,small:"Pillar",big:p.n})}
    <div class="main">
      <section>
        <h2>${esc(p.headline)}</h2>
        <p class="frame">Success in Texas requires understanding where data center strategy meets the realities of the Texas market.</p>
        <div class="prose" style="margin-top:22px">${body}</div>
      </section>
      ${p.id==="policy"?`<section><div class="count" id="countdown"></div></section>`:""}
      <section>
        <h2>Focus Areas</h2>
        <ul class="bul cols">${p.focus.map(f=>`<li>${esc(f)}</li>`).join("")}</ul>
      </section>
      <section>
        <div class="msgblock">
          <span class="lbl">The Texas Advantage</span>
          <blockquote>${esc(p.message)}</blockquote>
        </div>
      </section>
      <section>
        <nav class="pager" aria-label="Pillar navigation">
          <a href="#${prev.id}"><span>Previous · Pillar ${prev.n}</span><b>${esc(prev.title)}</b></a>
          <a href="#${next.id}"><span>Next · Pillar ${next.n}</span><b>${esc(next.title)}</b></a>
        </nav>
      </section>
    </div>
  </div>`;
}

/* ---------- Countdown (policy) ---------- */
function renderCountdown(){
  const el = document.getElementById("countdown"); if(!el) return;
  const target = new Date(2027,0,12), now = new Date();
  const days = Math.ceil((target - new Date(now.getFullYear(),now.getMonth(),now.getDate()))/86400000);
  el.innerHTML = days > 0
    ? `<span class="lbl">90th Texas Legislature</span><b>${days} days</b><span>until the session convenes on January 12, 2027. The policy conversations are already underway.</span>`
    : `<span class="lbl">90th Texas Legislature</span><b>In session</b><span>The 90th Legislature convened January 12, 2027.</span>`;
}

/* ---------- In-page scroll links ---------- */
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-go]"); if(!b) return;
  const t = document.getElementById(b.dataset.go);
  if(t){ e.preventDefault(); t.scrollIntoView({block:"start"}); }
});

/* ---------- Router ----------
   Every "#page" link is handled in script, so the child pages open even where
   the preview or CMS frame does not pass hash navigation through. The address
   bar is updated when the host allows it, so pages stay bookmarkable. */
let currentPage = null;
function show(key){
  const p = PILLARS.find(x=>x.id===key);
  const app = document.getElementById("app");
  if(p){
    if(currentPage!==p.id){ app.innerHTML = pillarHTML(p); currentPage=p.id; renderCountdown(); }
    window.scrollTo(0,0);
  } else {
    if(currentPage!=="home"){ app.innerHTML = homeHTML(); currentPage="home"; }
    const target = HOME_SECTIONS.includes(key) && key!=="overview" ? document.getElementById(key) : null;
    if(target) target.scrollIntoView({block:"start"}); else window.scrollTo(0,0);
  }
}
function go(key){
  show(key);
  try{ if(location.hash !== "#"+key) history.pushState(null,"","#"+key); }catch(err){}
}
document.addEventListener("click", e=>{
  const a = e.target.closest('a[href^="#"]'); if(!a) return;
  const key = a.getAttribute("href").slice(1);
  if(PILLARS.some(x=>x.id===key) || HOME_SECTIONS.includes(key)){ e.preventDefault(); go(key); }
});
window.addEventListener("hashchange", ()=>show((location.hash||"").slice(1)));
window.addEventListener("popstate", ()=>show((location.hash||"").slice(1)));
show((location.hash||"").slice(1));

