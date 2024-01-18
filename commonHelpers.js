import{S as u,i as a}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const f=document.querySelector(".form"),m=document.querySelector('input[name="delay"]'),h=document.querySelector(".gallery");let l="";const g=new u(".gallery a",{captionDelay:250,captionsData:"alt"});f.addEventListener("submit",o=>{o.preventDefault();const r=m.value.trim();r===""&&a.warning({title:"All fields must be filled!",position:"topRight"}),y(r).then(({hits:i})=>{l=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:c,comments:p,downloads:d})=>`<li class="gallery-item">
      <a  href="${e}">
        <img 
          class="gallery-image"
          src="${n}"
          alt="${t}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${s}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${c}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${p}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${d}</p>
        </div>
        </div>
      </li>`).join(""),h.innerHTML=l,g.refresh(),o.target.reset()}).catch(i=>{console.log(i),a.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})})});function y(o){const r=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(i=>{if(!i.ok)throw new Error("Error fetching images");return i.json()})}
//# sourceMappingURL=commonHelpers.js.map
