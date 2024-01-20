import{S as h,i as c}from"./assets/vendor-46aac873.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const g=document.querySelector(".form"),a=document.querySelector(".search"),p=document.querySelector('input[name="delay"]'),d=document.querySelector(".gallery"),l=document.querySelector(".loader");let u="";const b=new h(".gallery a",{captionDelay:250,captionsData:"alt"});a.setAttribute("disabled",!0);p.addEventListener("input",o=>{o.target.value.trim()===""?a.setAttribute("disabled",!0):a.removeAttribute("disabled")});g.addEventListener("submit",o=>{o.preventDefault();const i=p.value.trim();if(i===""){c.warning({title:"All fields must be filled!",position:"topRight"}),l.style.display="none";return}else l.style.display="block";v(i).then(({hits:r})=>{if(r.length===0){c.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.style.display="none",d.innerHTML="";return}u=r.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:f,comments:m,downloads:y})=>`<li class="gallery-item">
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
        <p>${f}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${m}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${y}</p>
        </div>
        </div>
      </li>`).join(""),l.style.display="none",d.innerHTML=u,b.refresh()}).catch(r=>{console.log(r)}).finally(()=>{o.target.reset()})});function v(o){const i=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${i}`).then(r=>{if(!r.ok)throw new Error("Error fetching images");return r.json()})}
//# sourceMappingURL=commonHelpers.js.map
