import{S as f,i as y}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const d=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");let c="";const g=new f(".gallery a",{captionDelay:250,captionsData:"alt"});d.addEventListener("input",r=>{r.target.value.trim()===""?r.currentTarget.elements.submit.setAttribute("disabled",!0):r.currentTarget.elements.submit.removeAttribute("disabled")});d.addEventListener("submit",r=>{r.preventDefault();let s=r.currentTarget.elements.delay.value.trim();a.style.display="block",h(s).then(({hits:i})=>{if(i.length===0){y.error({title:"Error!",message:"Sorry, there are no images matching your search query. Please try again!",position:"center"}),l.innerHTML="";return}c=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:u,comments:p,downloads:m})=>`<li class="gallery-item">
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
        <p>${o}</p>
        </div>
        <div class="description">
        <p class="info">Views:</p>
        <p>${u}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${p}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${m}</p>
        </div>
        </div>
      </li>`).join(""),a.style.display="none",l.innerHTML=c,g.refresh()}).catch(i=>{console.log(i)}).finally(()=>{r.target.reset(),r.target.elements.submit.setAttribute("disabled",!0),a.style.display="none"})});function h(r){const s=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(i=>{if(!i.ok)throw new Error("Error fetching images");return i.json()})}
//# sourceMappingURL=commonHelpers.js.map
