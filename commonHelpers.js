import{S as m,i as l}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const g=document.querySelector(".form"),a=document.querySelector(".gallery"),c=document.querySelector(".loader"),y=new m(".gallery a",{captionDelay:250,captionsData:"alt"});g.addEventListener("submit",o=>{o.preventDefault(),a.innerHTML="";const i=o.currentTarget.elements.delay.value.trim();if(i===""){l.warning({title:"Warning!",message:"All fileds must be filled!",position:"topRight"}),a.innerHTML="";return}c.style.display="block",h(i).then(({hits:t})=>{if(t.length===0){l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}let n=t.map(({webformatURL:e,largeImageURL:r,tags:s,likes:d,views:p,comments:u,downloads:f})=>`<li class="gallery-item">
      <a  href="${r}">
        <img 
          class="gallery-image"
          src="${e}"
          alt="${s}"
          width="360" 
          height="200"
        />
        </a>
        <div class="container">
        <div class="description">
        <p class="info">Likes:</p>
        <p>${d}</p>
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
      </li>`).join("");c.style.display="none",a.innerHTML=n,y.refresh()}).catch(t=>{console.log(t),l.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}).finally(()=>{o.target.reset(),c.style.display="none"})});function h(o){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(t=>{if(!t.ok)throw new Error("Error fetching images");return t.json()})}
//# sourceMappingURL=commonHelpers.js.map
