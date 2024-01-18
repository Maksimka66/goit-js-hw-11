import{i as l}from"./assets/vendor-4d6948b9.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const m=document.querySelector(".form"),d=document.querySelector('input[name="delay"]'),p=document.querySelector(".gallery");m.addEventListener("submit",n=>{n.preventDefault();const r=d.value.trim();r===""&&l.warning({title:"All fields must be filled!",position:"topRight"}),h(r).then(o=>{const s=o.map(({webformatURL:e,largeImageURL:t,tags:i,likes:a,views:c,comments:u,downloads:f})=>`<li class="gallery-item">
      <a  href="${t}">
        <img 
          class="gallery-image"
          src="${e}"
          alt="${i}"
          width="360" 
          height="200"
        />
        <p>Likes: ${a}</p>
        <p>Views: ${c}</p>
        <p>Comments: ${u}</p>
        <p>Downloads: ${f}</p>
      </a>
    </li>`).join("");p.insertAdjacentHTML("beforeend",s)}).catch(o=>l.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}))});function h(n){const r=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${r}`).then(o=>{if(!o.ok)throw new Error("Error fetching images");return o.json()})}
//# sourceMappingURL=commonHelpers.js.map
