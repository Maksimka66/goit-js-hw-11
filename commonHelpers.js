import{S as g,i as c}from"./assets/vendor-46aac873.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const u=document.querySelector(".form"),l=document.querySelector(".gallery"),a=document.querySelector(".loader");let d="";const y=new g(".gallery a",{captionDelay:250,captionsData:"alt"});u.addEventListener("input",r=>{r.target.value.trim()===""?r.currentTarget.elements.submit.setAttribute("disabled",!0):r.currentTarget.elements.submit.removeAttribute("disabled")});u.addEventListener("submit",r=>{r.preventDefault();let s=r.currentTarget.elements.delay.value.trim();if(a.style.display="block",s===""){c.warning({title:"Warning!",message:"All fields must be filled!",position:"topRight"}),l.innerHTML="",a.style.display="none";return}h(s).then(({hits:i})=>{if(i.length===0){c.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.innerHTML="";return}d=i.map(({webformatURL:n,largeImageURL:e,tags:t,likes:o,views:p,comments:f,downloads:m})=>`<li class="gallery-item">
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
      </li>`).join(""),a.style.display="none",l.innerHTML=d,y.refresh()}).catch(i=>{console.log(i)}).finally(()=>{r.target.reset(),a.style.display="none"})});function h(r){const s=new URLSearchParams({key:"41859392-e5bc4a8d4ece805d6453ecbd7",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(i=>{if(!i.ok)throw new Error("Error fetching images");return i.json()})}
//# sourceMappingURL=commonHelpers.js.map
