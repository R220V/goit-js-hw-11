(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&l(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const i=document.querySelector(".js-form-search"),c=document.querySelector(".js-gallery"),a=o=>`
    <li class="gallery-card">
        <img class="galley-img" src="${o.urls.regular}" alt="${o.alt_description}"/>
    </li>`,u=o=>{o.preventDefault();const s=o.currentTarget.elements.user_query.value.trim("");if(s===""){alert("Поле має бути заповнено");return}fetch(`https://api.unsplash.com/search/photos?query=${s}&client_id=VgVom1zWqHLL7Rt7mBXLC5YqRvQapFz6aLGinkF8ChQ&per_page=12`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>{if(t.results.length===0){alert("За таким ключовим словом зображень не знайдено"),c.innerHTML="",i.reset();return}const l=t.results.map(e=>a(e)).join("");c.innerHTML=l}).catch(t=>{console.log(t)})};i.addEventListener("submit",u);
//# sourceMappingURL=index.js.map
