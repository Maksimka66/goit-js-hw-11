import{S as y,i as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),g=document.querySelector(".search"),a=document.querySelector(".gallery"),l=document.querySelector(".loader");let d="";const h=new y(".gallery a",{captionDelay:250,captionsData:"alt"});g.setAttribute("disabled",!0);u.addEventListener("input",r=>{r.target.value.trim()===""?r.currentTarget.elements.submit.setAttribute("disabled",!0):r.currentTarget.elements.submit.removeAttribute("disabled")});u.addEventListener("submit",r=>{r.preventDefault();let o=r.currentTarget.elements.delay.value.trim();if(l.style.display="block",o===""){c.warning({title:"All fields must be filled!",position:"topRight"}),a.innerHTML="",l.style.display="none";return}b(o).then(({hits:i})=>{if(i.length===0){c.error({title:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),a.innerHTML="";return}d=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:s,views:p,comments:f,downloads:m})=>`<li class="gallery-item">
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
        <p>${p}</p>
        </div>
        <div class="description">
        <p class="info">Comments:</p>
        <p>${f}</p>
        </div>
        <div class="description">
        <p class="info">Downloads:</p>
        <p>${m}</p>
        </div>
        </div>
      </li>`).join(""),l.style.display="none",a.innerHTML=d,h.refresh()}).catch(i=>{console.log(i)}).finally(()=>{r.target.reset(),l.style.display="none"})});function b(r){const o=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${o}`).then(i=>{if(!i.ok)throw new Error("Error fetching images");return i.json()})}
//# sourceMappingURL=commonHelpers.js.map
