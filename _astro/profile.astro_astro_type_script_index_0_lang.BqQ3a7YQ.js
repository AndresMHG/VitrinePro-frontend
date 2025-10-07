const h=[{name:"Blue Ocean",primary:"#667eea",secondary:"#764ba2",accent:"#ff6b6b",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{name:"Sunset Orange",primary:"#ff6b6b",secondary:"#ee5a24",accent:"#667eea",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"},{name:"Forest Green",primary:"#4ade80",secondary:"#22c55e",accent:"#f59e0b",background:"linear-gradient(135deg, #4ade80 0%, #22c55e 100%)"},{name:"Purple Dream",primary:"#a855f7",secondary:"#7c3aed",accent:"#06b6d4",background:"linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)"},{name:"Rose Pink",primary:"#f472b6",secondary:"#ec4899",accent:"#8b5cf6",background:"linear-gradient(135deg, #f472b6 0%, #ec4899 100%)"},{name:"Teal Blue",primary:"#06b6d4",secondary:"#0891b2",accent:"#f59e0b",background:"linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"}],m=h[Math.floor(Math.random()*h.length)];document.documentElement.style.setProperty("--primary-color",m.primary);document.documentElement.style.setProperty("--secondary-color",m.secondary);document.documentElement.style.setProperty("--accent-color",m.accent);document.documentElement.style.setProperty("--gradient-bg",m.background);const b=document.createElement("div");b.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1;
    display: flex;
    gap: 10px;
    align-items: center;
  `;const v=document.createElement("div");v.textContent=`Tema: ${m.name}`;v.style.cssText=`
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: #333;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `;const u=document.createElement("button");u.textContent="🎨";u.title="Cambiar Tema";u.style.cssText=`
    background: var(--gradient-bg);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
  `;u.addEventListener("click",()=>{let i;do i=h[Math.floor(Math.random()*h.length)];while(i.name===m.name);document.documentElement.style.setProperty("--primary-color",i.primary),document.documentElement.style.setProperty("--secondary-color",i.secondary),document.documentElement.style.setProperty("--accent-color",i.accent),document.documentElement.style.setProperty("--gradient-bg",i.background),v.textContent=`Tema: ${i.name}`,u.style.transform="scale(0.9)",setTimeout(()=>{u.style.transform="scale(1)"},150)});b.appendChild(v);b.appendChild(u);document.body.appendChild(b);document.addEventListener("DOMContentLoaded",function(){function i(){document.querySelectorAll(".stat-number").forEach(e=>{const o=e.getAttribute("data-target");if(!o)return;const n=parseInt(o),c=n/(2e3/16);let s=0;const f=setInterval(()=>{s+=c,s>=n?(e.textContent=n.toString(),clearInterval(f)):e.textContent=Math.floor(s).toString()},16)})}const w=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(i(),w.unobserve(e.target))})},{threshold:.5}),k=document.querySelector(".hero-section");k&&w.observe(k);function P(){document.querySelectorAll(".skill-progress").forEach((e,o)=>{const n=e.getAttribute("data-width");n&&setTimeout(()=>{e.style.width=n+"%"},o*200)})}const S=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(P(),S.unobserve(e.target))})},{threshold:.3}),L=document.querySelector(".skills-section");L&&S.observe(L);function q(){document.querySelectorAll(".animate-on-scroll").forEach(e=>{const o=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom,r=window.innerHeight;o<r*.8&&n>0&&e.classList.add("animate-visible")})}let x=null;window.addEventListener("scroll",()=>{x||(x=window.setTimeout(()=>{q(),x=null},16))}),q(),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href");if(!o)return;const n=document.querySelector(o);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelectorAll(".project-link").forEach(t=>{t.addEventListener("click",function(e){e.stopPropagation();const o=this.getAttribute("data-project");this.style.transform="scale(0.95)",setTimeout(()=>{this.style.transform="scale(1)"},150),console.log("Project clicked:",o)})});const C=document.querySelector(".contact-form");C&&C.addEventListener("submit",function(t){t.preventDefault();const e=this.querySelector(".form-submit");if(!e)return;const o=e.textContent||"";e.textContent="Enviando...",e.disabled=!0,setTimeout(()=>{e.textContent="¡Mensaje Enviado!",e.style.background="linear-gradient(135deg, #4ade80, #22c55e)",setTimeout(()=>{e.textContent=o,e.disabled=!1,e.style.background="linear-gradient(135deg, #667eea, #764ba2)",this.reset()},3e3)},2e3)}),document.addEventListener("mousemove",t=>{const e=document.querySelector(".hero-section");if(e){const o=t.clientX/window.innerWidth,n=t.clientY/window.innerHeight,r=e.querySelector(".hero-pattern");r&&(r.style.transform=`translate(${o*20}px, ${n*20}px)`)}}),window.addEventListener("load",()=>{document.body.classList.add("loaded")});const B={threshold:.1,rootMargin:"0px 0px -50px 0px"},M=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("animate-visible")})},B);document.querySelectorAll(".animate-on-scroll").forEach(t=>{M.observe(t)}),document.querySelectorAll(".value-item").forEach(t=>{t.addEventListener("mouseenter",function(){this.style.transform="translateY(-8px) rotate(2deg)"}),t.addEventListener("mouseleave",function(){this.style.transform="translateY(0) rotate(0deg)"})});function j(t){const e=t.currentTarget,o=document.createElement("span"),n=Math.max(e.clientWidth,e.clientHeight),r=n/2,c=e.getBoundingClientRect();o.style.width=o.style.height=n+"px",o.style.left=t.clientX-c.left-r+"px",o.style.top=t.clientY-c.top-r+"px",o.classList.add("ripple");const s=e.getElementsByClassName("ripple")[0];s&&s.remove(),e.appendChild(o)}document.querySelectorAll(".cta-primary, .cta-secondary, .form-submit").forEach(t=>{t.addEventListener("click",j)});const A=document.createElement("style");A.textContent=`
      .ripple {
        position: absolute;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
      }

      @keyframes ripple {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }
    `,document.head.appendChild(A);const a=document.getElementById("searchInput"),p=document.getElementById("clearSearch"),l=document.getElementById("searchSuggestions");a&&p&&l&&(a.addEventListener("input",e=>{const o=e.target.value.toLowerCase().trim();o.length>0?(p.style.display="flex",l.style.display="block",document.querySelectorAll(".project-card").forEach(r=>{const c=r.querySelector("h3")?.textContent?.toLowerCase()||"",s=r.getAttribute("data-category")||"";c.includes(o)||s.includes(o)?r.style.display="block":r.style.display="none"})):(p.style.display="none",l.style.display="none",document.querySelectorAll(".project-card").forEach(r=>{r.style.display="block"}))}),p.addEventListener("click",()=>{a.value="",a.dispatchEvent(new Event("input")),a.focus()}),l.querySelectorAll(".suggestion-item").forEach(e=>{e.addEventListener("click",()=>{const o=e.getAttribute("data-type");o&&(a.value=o,a.dispatchEvent(new Event("input")),l.style.display="none")})}),document.addEventListener("click",e=>{!a.contains(e.target)&&!l.contains(e.target)&&(l.style.display="none")}));const I=document.querySelectorAll(".filter-btn");I.forEach(t=>{t.addEventListener("click",()=>{I.forEach(n=>n.classList.remove("active")),t.classList.add("active");const e=t.getAttribute("data-filter");a&&(a.value="",p.style.display="none",l.style.display="none"),document.querySelectorAll(".project-card").forEach(n=>{const r=n.getAttribute("data-category");e==="todos"||r===e?n.style.display="block":n.style.display="none"})})});const d=["ecommerceModal"];function T(t){const e=document.getElementById(t);e&&(e.classList.add("active"),document.body.style.overflow="hidden",$(t))}function g(){const t=document.querySelector(".project-modal.active");t&&(t.classList.remove("active"),document.body.style.overflow="")}function $(t){const e=d.indexOf(t),o=document.querySelector(`#${t} .modal-nav-prev`),n=document.querySelector(`#${t} .modal-nav-next`);o&&(o.style.display=e>0?"block":"none"),n&&(n.style.display=e<d.length-1?"block":"none")}function E(t){const e=document.querySelector(".project-modal.active");if(!e)return;const o=e.id,n=d.indexOf(o);let r;if(t==="prev"&&n>0)r=n-1;else if(t==="next"&&n<d.length-1)r=n+1;else return;g(),setTimeout(()=>{T(d[r])},300)}function R(t){const e=document.querySelector(".project-modal.active");if(!e)return;const o=e.querySelector(".modal-title")?.textContent||"Proyecto",n=window.location.href,r=`Mira este proyecto increíble: ${o}`;let c="";switch(t){case"linkedin":c=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`;break;case"instagram":navigator.clipboard.writeText(`${r} ${n}`).then(()=>{alert("Enlace copiado al portapapeles. Puedes pegarlo en Instagram.")});return;case"whatsapp":c=`https://wa.me/?text=${encodeURIComponent(r+" "+n)}`;break;case"pdf":O();return}c&&window.open(c,"_blank","width=600,height=400")}async function O(){const t=document.querySelector(".project-modal.active");if(t)try{const e=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`,o=t.querySelector(".modal-title")?.textContent||"Proyecto",n=t.querySelector(".modal-description")?.textContent||"",r=t.querySelector(".modal-category")?.textContent||"",c=`
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px;">
            <h1 style="color: #333; border-bottom: 2px solid #667eea; padding-bottom: 10px;">${o}</h1>
            <p style="color: #667eea; font-weight: bold;">${r}</p>

            <div style="margin: 30px 0;">
              <h2 style="color: #333;">Descripción del Proyecto</h2>
              <p style="line-height: 1.6;">${n}</p>
            </div>

            <div style="text-align: center; margin: 40px 0;">
              <img src="${e}" alt="QR Code" style="max-width: 150px;" />
              <p style="margin-top: 10px; color: #666; font-size: 12px;">Escanea para ver el proyecto completo</p>
            </div>

            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 12px;">
              Generado por VitrinePro - ${new Date().toLocaleDateString()}
            </div>
          </div>
        `,s=new Blob([c],{type:"text/html"}),f=URL.createObjectURL(s),y=document.createElement("a");y.href=f,y.download=`${o.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.html`,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(f),alert("Archivo HTML generado. Puedes convertirlo a PDF usando un navegador o herramienta online.")}catch(e){console.error("Error generating PDF:",e),alert("Error al generar el archivo. Inténtalo de nuevo.")}}document.querySelectorAll(".modal-close").forEach(t=>{t.addEventListener("click",g)}),document.querySelectorAll(".modal-overlay").forEach(t=>{t.addEventListener("click",g)}),document.querySelectorAll(".modal-nav").forEach(t=>{t.addEventListener("click",e=>{const o=e.currentTarget.getAttribute("data-direction");E(o)})}),document.querySelectorAll(".share-btn").forEach(t=>{t.addEventListener("click",e=>{const o=e.currentTarget.getAttribute("data-platform");o&&R(o)})}),document.addEventListener("keydown",t=>{t.key==="Escape"&&g()}),document.addEventListener("keydown",t=>{document.querySelector(".project-modal.active")&&(t.key==="ArrowLeft"?E("prev"):t.key==="ArrowRight"&&E("next"))}),document.querySelectorAll(".project-link").forEach((t,e)=>{t.addEventListener("click",o=>{o.stopPropagation();const n=d[e%d.length];T(n)})})});
