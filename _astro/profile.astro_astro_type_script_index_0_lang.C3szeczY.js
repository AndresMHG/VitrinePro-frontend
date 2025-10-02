const y=[{name:"Blue Ocean",primary:"#667eea",secondary:"#764ba2",accent:"#ff6b6b",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},{name:"Sunset Orange",primary:"#ff6b6b",secondary:"#ee5a24",accent:"#667eea",background:"linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)"},{name:"Forest Green",primary:"#4ade80",secondary:"#22c55e",accent:"#f59e0b",background:"linear-gradient(135deg, #4ade80 0%, #22c55e 100%)"},{name:"Purple Dream",primary:"#a855f7",secondary:"#7c3aed",accent:"#06b6d4",background:"linear-gradient(135deg, #a855f7 0%, #7c3aed 100%)"},{name:"Rose Pink",primary:"#f472b6",secondary:"#ec4899",accent:"#8b5cf6",background:"linear-gradient(135deg, #f472b6 0%, #ec4899 100%)"},{name:"Teal Blue",primary:"#06b6d4",secondary:"#0891b2",accent:"#f59e0b",background:"linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)"}],u=y[Math.floor(Math.random()*y.length)];document.documentElement.style.setProperty("--primary-color",u.primary);document.documentElement.style.setProperty("--secondary-color",u.secondary);document.documentElement.style.setProperty("--accent-color",u.accent);document.documentElement.style.setProperty("--gradient-bg",u.background);const h=document.createElement("div");h.style.cssText=`
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1;
    display: flex;
    gap: 10px;
    align-items: center;
  `;const v=document.createElement("div");v.textContent=`Tema: ${u.name}`;v.style.cssText=`
    background: rgba(255, 255, 255, 0.9);
    padding: 10px 15px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    color: #333;
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  `;const m=document.createElement("button");m.textContent="🎨";m.title="Cambiar Tema";m.style.cssText=`
    background: var(--gradient-bg);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;
  `;m.addEventListener("click",()=>{let a;do a=y[Math.floor(Math.random()*y.length)];while(a.name===u.name);document.documentElement.style.setProperty("--primary-color",a.primary),document.documentElement.style.setProperty("--secondary-color",a.secondary),document.documentElement.style.setProperty("--accent-color",a.accent),document.documentElement.style.setProperty("--gradient-bg",a.background),v.textContent=`Tema: ${a.name}`,m.style.transform="scale(0.9)",setTimeout(()=>{m.style.transform="scale(1)"},150)});h.appendChild(v);h.appendChild(m);document.body.appendChild(h);document.addEventListener("DOMContentLoaded",function(){function a(){document.querySelectorAll(".stat-number").forEach(e=>{const o=e.getAttribute("data-target");if(!o)return;const n=parseInt(o),c=n/(2e3/16);let s=0;const g=setInterval(()=>{s+=c,s>=n?(e.textContent=n.toString(),clearInterval(g)):e.textContent=Math.floor(s).toString()},16)})}const E=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(a(),E.unobserve(e.target))})},{threshold:.5}),w=document.querySelector(".hero-section");w&&E.observe(w);function P(){document.querySelectorAll(".skill-progress").forEach((e,o)=>{const n=e.getAttribute("data-width");n&&setTimeout(()=>{e.style.width=n+"%"},o*200)})}const k=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(P(),k.unobserve(e.target))})},{threshold:.3}),L=document.querySelector(".skills-section");L&&k.observe(L);function S(){document.querySelectorAll(".animate-on-scroll").forEach(e=>{const o=e.getBoundingClientRect().top,n=e.getBoundingClientRect().bottom,r=window.innerHeight;o<r*.8&&n>0&&e.classList.add("animate-visible")})}let b=null;window.addEventListener("scroll",()=>{b||(b=window.setTimeout(()=>{S(),b=null},16))}),S(),document.querySelectorAll('a[href^="#"]').forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();const o=this.getAttribute("href");if(!o)return;const n=document.querySelector(o);n&&n.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelectorAll(".project-link").forEach(t=>{t.addEventListener("click",function(e){e.stopPropagation();const o=this.getAttribute("data-project");this.style.transform="scale(0.95)",setTimeout(()=>{this.style.transform="scale(1)"},150),console.log("Project clicked:",o)})});const C=document.querySelector(".contact-form");C&&C.addEventListener("submit",function(t){t.preventDefault();const e=this.querySelector(".form-submit");if(!e)return;const o=e.textContent||"";e.textContent="Enviando...",e.disabled=!0,setTimeout(()=>{e.textContent="¡Mensaje Enviado!",e.style.background="linear-gradient(135deg, #4ade80, #22c55e)",setTimeout(()=>{e.textContent=o,e.disabled=!1,e.style.background="linear-gradient(135deg, #667eea, #764ba2)",this.reset()},3e3)},2e3)}),document.addEventListener("mousemove",t=>{const e=document.querySelector(".hero-section");if(e){const o=t.clientX/window.innerWidth,n=t.clientY/window.innerHeight,r=e.querySelector(".hero-pattern");r&&(r.style.transform=`translate(${o*20}px, ${n*20}px)`)}}),window.addEventListener("load",()=>{document.body.classList.add("loaded")});const M={threshold:.1,rootMargin:"0px 0px -50px 0px"},I=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add("animate-visible")})},M);document.querySelectorAll(".animate-on-scroll").forEach(t=>{I.observe(t)}),document.querySelectorAll(".value-item").forEach(t=>{t.addEventListener("mouseenter",function(){this.style.transform="translateY(-8px) rotate(2deg)"}),t.addEventListener("mouseleave",function(){this.style.transform="translateY(0) rotate(0deg)"})});function B(t){const e=t.currentTarget,o=document.createElement("span"),n=Math.max(e.clientWidth,e.clientHeight),r=n/2,c=e.getBoundingClientRect();o.style.width=o.style.height=n+"px",o.style.left=t.clientX-c.left-r+"px",o.style.top=t.clientY-c.top-r+"px",o.classList.add("ripple");const s=e.getElementsByClassName("ripple")[0];s&&s.remove(),e.appendChild(o)}document.querySelectorAll(".cta-primary, .cta-secondary, .form-submit").forEach(t=>{t.addEventListener("click",B)});const q=document.createElement("style");q.textContent=`
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
    `,document.head.appendChild(q);const l=document.getElementById("filterToggle"),i=document.getElementById("filterMenu"),T=l?.querySelector(".filter-text");l&&i&&T&&(l.addEventListener("click",t=>{t.stopPropagation();const e=i.classList.contains("active");i.classList.toggle("active"),l.classList.toggle("active"),e||document.addEventListener("click",function o(n){!l.contains(n.target)&&!i.contains(n.target)&&(i.classList.remove("active"),l.classList.remove("active"),document.removeEventListener("click",o))})}),i.addEventListener("click",t=>{t.stopPropagation();const e=t.target;if(e.classList.contains("filter-option")){const o=e.textContent||"";T.textContent=o,i.querySelectorAll(".filter-option").forEach(n=>n.classList.remove("active")),e.classList.add("active"),i.classList.remove("active"),l.classList.remove("active"),console.log("Selected filter:",e.getAttribute("data-filter"))}}));const d=["ecommerceModal"];function A(t){const e=document.getElementById(t);e&&(e.classList.add("active"),document.body.style.overflow="hidden",$(t))}function f(){const t=document.querySelector(".project-modal.active");t&&(t.classList.remove("active"),document.body.style.overflow="")}function $(t){const e=d.indexOf(t),o=document.querySelector(`#${t} .modal-nav-prev`),n=document.querySelector(`#${t} .modal-nav-next`);o&&(o.style.display=e>0?"block":"none"),n&&(n.style.display=e<d.length-1?"block":"none")}function x(t){const e=document.querySelector(".project-modal.active");if(!e)return;const o=e.id,n=d.indexOf(o);let r;if(t==="prev"&&n>0)r=n-1;else if(t==="next"&&n<d.length-1)r=n+1;else return;f(),setTimeout(()=>{A(d[r])},300)}function j(t){const e=document.querySelector(".project-modal.active");if(!e)return;const o=e.querySelector(".modal-title")?.textContent||"Proyecto",n=window.location.href,r=`Mira este proyecto increíble: ${o}`;let c="";switch(t){case"linkedin":c=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(n)}`;break;case"instagram":navigator.clipboard.writeText(`${r} ${n}`).then(()=>{alert("Enlace copiado al portapapeles. Puedes pegarlo en Instagram.")});return;case"whatsapp":c=`https://wa.me/?text=${encodeURIComponent(r+" "+n)}`;break;case"pdf":R();return}c&&window.open(c,"_blank","width=600,height=400")}async function R(){const t=document.querySelector(".project-modal.active");if(t)try{const e=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(window.location.href)}`,o=t.querySelector(".modal-title")?.textContent||"Proyecto",n=t.querySelector(".modal-description")?.textContent||"",r=t.querySelector(".modal-category")?.textContent||"",c=`
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
        `,s=new Blob([c],{type:"text/html"}),g=URL.createObjectURL(s),p=document.createElement("a");p.href=g,p.download=`${o.replace(/[^a-z0-9]/gi,"_").toLowerCase()}.html`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(g),alert("Archivo HTML generado. Puedes convertirlo a PDF usando un navegador o herramienta online.")}catch(e){console.error("Error generating PDF:",e),alert("Error al generar el archivo. Inténtalo de nuevo.")}}document.querySelectorAll(".modal-close").forEach(t=>{t.addEventListener("click",f)}),document.querySelectorAll(".modal-overlay").forEach(t=>{t.addEventListener("click",f)}),document.querySelectorAll(".modal-nav").forEach(t=>{t.addEventListener("click",e=>{const o=e.currentTarget.getAttribute("data-direction");x(o)})}),document.querySelectorAll(".share-btn").forEach(t=>{t.addEventListener("click",e=>{const o=e.currentTarget.getAttribute("data-platform");o&&j(o)})}),document.addEventListener("keydown",t=>{t.key==="Escape"&&f()}),document.addEventListener("keydown",t=>{document.querySelector(".project-modal.active")&&(t.key==="ArrowLeft"?x("prev"):t.key==="ArrowRight"&&x("next"))}),document.querySelectorAll(".project-link").forEach((t,e)=>{t.addEventListener("click",o=>{o.stopPropagation();const n=d[e%d.length];A(n)})})});
