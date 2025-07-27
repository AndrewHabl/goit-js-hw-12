import{a as b,S as w,i as l}from"./assets/vendor-C3lJ7lpQ.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const B="51380454-3ea42ec5cd063189b5b07676d",S="https://pixabay.com/api/",q=15;async function E(t,o=1){return(await b.get(S,{params:{key:B,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:q}})).data}const p=document.querySelector(".gallery"),m=document.querySelector(".loader-top"),h=document.querySelector(".loader-bottom"),y=document.querySelector(".load-more"),P=new w(".gallery a",{captionsData:"title",captionDelay:250});function $(t){const o=t.map(({webformatURL:a,largeImageURL:n,tags:e,likes:s,views:r,comments:v,downloads:L})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${a}" alt="${e}" title="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${s}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${r}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${v}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${L}</p>
          </div>
        </div>
      </li>`).join("");p.insertAdjacentHTML("beforeend",o),P.refresh()}function M(){p.innerHTML=""}function R(){m.classList.remove("is-hidden")}function T(){m.classList.add("is-hidden")}function I(){h.classList.remove("is-hidden")}function O(){h.classList.add("is-hidden")}function x(){y.classList.remove("is-hidden")}function d(){y.classList.add("is-hidden")}const u=document.querySelector(".form"),A=document.querySelector(".load-more");let c="",i=1,f=0;u.addEventListener("submit",async t=>{if(t.preventDefault(),c=u.elements["search-text"].value.trim(),i=1,M(),d(),!c){l.warning({message:"Please enter a search term",position:"topRight"});return}await g({isInitial:!0})});A.addEventListener("click",async()=>{d(),i++,await g({isInitial:!1})});async function g({isInitial:t}){t?R():I();try{const o=await E(c,i);if(o.hits.length===0&&i===1){l.error({message:"No images found. Try another query!",position:"topRight"});return}$(o.hits),_(),f=Math.ceil(o.totalHits/15),i<f?x():(d(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}catch{l.error({message:"Failed to fetch images",position:"topRight"})}finally{t?T():O()}}function _(){const t=document.querySelector(".gallery").firstElementChild;if(!t)return;const{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}window.addEventListener("load",()=>{const t=document.getElementById("splash-screen");t&&t.remove()});
//# sourceMappingURL=index.js.map
