import{a as p,S as f,i as l}from"./assets/vendor-DqB7j7Ix.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const m="51380454-3ea42ec5cd063189b5b07676d",y="https://pixabay.com/api/";async function h(o){return(await p.get(y,{params:{key:m,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery");let g=new f(".gallery a",{captionsData:"title",captionDelay:250});function v(o){const r=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:t,views:i,comments:d,downloads:u})=>`
      <li class="gallery-item">
        <a href="${a}">
  <img src="${s}" alt="${e}" title="${e}" loading="lazy" />
</a>
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${t}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${i}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${d}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${u}</p>
          </div>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),g.refresh()}function b(){c.innerHTML=""}function L(){document.querySelector(".loader").classList.remove("is-hidden")}function S(){document.querySelector(".loader").classList.add("is-hidden")}const n=document.querySelector(".form");n.addEventListener("submit",async o=>{o.preventDefault();const r=n.elements["search-text"].value.trim();if(!r){l.warning({message:"Please enter a search term",position:"topRight"});return}L(),b();try{const s=await h(r);s.hits.length===0?l.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):v(s.hits)}catch{l.error({message:"Failed to fetch images",position:"topRight"})}finally{S()}});
//# sourceMappingURL=index.js.map
