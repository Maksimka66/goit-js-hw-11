import{S as m,i as a}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const y=document.querySelector(".form"),h=document.querySelector('input[name="delay"]'),c=document.querySelector(".gallery"),l=document.querySelector(".loader");let d="";const g=new m(".gallery a",{captionDelay:250,captionsData:"alt"});y.addEventListener("submit",o=>{o.preventDefault(),l.style.display="block";const i=h.value.trim();if(i===""){a.warning({title:"All fields must be filled!",position:"topRight"}),l.style.display="none";return}v(i).then(({hits:r})=>{if(r.length===0){a.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none",c.innerHTML="";return}d=r.map(({webformatURL:s,largeImageURL:e,tags:t,likes:n,views:p,comments:u,downloads:f})=>`<li class="gallery-item">
      <a  href="${e}">
        <img 
          class="gallery-image"
          src="${s}"
          alt="${t}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${n}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${p}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${u}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${f}</p>
        </div>
        </div>
      </li>`).join(""),l.style.display="none",c.innerHTML=d,g.refresh()}).catch(r=>{console.log(r)}).finally(()=>{o.target.reset()})});function v(o){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()})}
//# sourceMappingURL=commonHelpers.js.map
