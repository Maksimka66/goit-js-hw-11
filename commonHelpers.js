import{S as u,i as a}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),m=document.querySelector('input[name="delay"]'),h=document.querySelector(".gallery"),g=new u(".gallery a",{captionDelay:250,captionsData:"alt"});f.addEventListener("submit",s=>{s.preventDefault();const i=m.value.trim();i===""&&a.warning({title:"All fields must be filled!",position:"topRight"}),y(i).then(({hits:r})=>{const n=r.map(({webformatURL:e,largeImageURL:t,tags:o,likes:l,views:c,comments:d,downloads:p})=>`<li class="gallery-item">
      <a  href="${t}">
        <img 
          class="gallery-image"
          src="${e}"
          alt="${o}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${l}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${c}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${d}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${p}</p>
        </div>
        </div>
      </li>`).join("");h.insertAdjacentHTML("beforeend",n),g.refresh()}).catch(r=>console.log(r),a.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))});function y(s){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()})}
//# sourceMappingURL=commonHelpers.js.map
