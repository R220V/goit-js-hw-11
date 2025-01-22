import{S as d,i as n}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const p=r=>`<li class="gallery-card">
              <section class="card">
              <a class="gallery-link" href="${r.largeImageURL}" target="_blank" rel="noopener noreferrer">
                <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" />
              </a>
              <div class="gallery-container">
                <div class="gallery-item">
                  <p class="gallery-title">Likes</p>
                  <p class="gallery-count">${r.likes}</p>
                </div>
                <div class="gallery-item">
                  <p class="gallery-title">Views</p>
                  <p class="gallery-count">${r.views}</p>
                </div>
                <div class="gallery-item">
                  <p class="gallery-title">Comments</p>
                  <p class="gallery-count">${r.comments}</p>
                </div>
                <div class="gallery-item">
                  <p class="gallery-title">Downloads</p>
                  <p class="gallery-count">${r.downloads}</p>
                </div>
              </div>
            </section>
          </li>`,y=r=>{const l=new URLSearchParams({q:r,key:"48306389-9c3f7e9b102fd2bc2270acf47",image_type:"photo",orientation:"horizontal",safesearch:"true",per_page:"60"});return fetch(`https://pixabay.com/api/?${l.toString()}`).then(s=>{if(!s.ok)throw new Error(s.status);return s.json()})},c=document.querySelector(".js-form-search"),u=document.querySelector(".js-gallery"),i=document.querySelector(".loader");let m=new d(".gallery a",{captionsData:"alt",captionDelay:300});const g=r=>{r.preventDefault();const l=r.currentTarget.elements.user_query.value.trim("");if(l===""){n.error({title:"Error",messageColor:"Purple",color:"red",position:"topRight",message:"Please enter your request",messageSize:"20"});return}i.classList.remove("is-hidden"),y(l).then(s=>{if(s.total===0){n.error({title:"Error",messageColor:"Purple",color:"red",position:"topRight",messageSize:"20",message:"Sorry, there are no images. Please try again!"}),u.innerHTML="",c.reset();return}const a=s.hits.map(e=>p(e)).join("");u.innerHTML=a,i.classList.add("is-hidden"),m.refresh()}).catch(s=>{i.style.display="none",console.log(s)}),c.reset()};c.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
