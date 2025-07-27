import{a as b,S as L,i as l}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const w="51380454-3ea42ec5cd063189b5b07676d",S="https://pixabay.com/api/",q=15;async function P(t,s=1){return(await b.get(S,{params:{key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:q}})).data}const f=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more"),$=new L(".gallery a",{captionsData:"title",captionDelay:250});function B(t){const s=t.map(({webformatURL:a,largeImageURL:n,tags:e,likes:o,views:r,comments:g,downloads:v})=>`
      <li class="gallery-item">
        <a href="${n}">
          <img src="${a}" alt="${e}" title="${e}" loading="lazy" />
        </a>
        <div class="info">
          <div class="info-block">
            <p class="label">Likes</p>
            <p class="value">${o}</p>
          </div>
          <div class="info-block">
            <p class="label">Views</p>
            <p class="value">${r}</p>
          </div>
          <div class="info-block">
            <p class="label">Comments</p>
            <p class="value">${g}</p>
          </div>
          <div class="info-block">
            <p class="label">Downloads</p>
            <p class="value">${v}</p>
          </div>
        </div>
      </li>`).join("");f.insertAdjacentHTML("beforeend",s),$.refresh()}function E(){f.innerHTML=""}function M(){p.classList.remove("is-hidden")}function R(){p.classList.add("is-hidden")}function O(){m.classList.remove("is-hidden")}function h(){m.classList.add("is-hidden")}const d=document.querySelector(".form"),x=document.querySelector(".load-more");let c="",i=1,u=0;d.addEventListener("submit",async t=>{if(t.preventDefault(),c=d.elements["search-text"].value.trim(),i=1,E(),h(),!c){l.warning({message:"Please enter a search term",position:"topRight"});return}await y()});x.addEventListener("click",async()=>{i++,await y()});async function y(){M();try{const t=await P(c,i);if(t.hits.length===0&&i===1){l.error({message:"No images found. Try another query!",position:"topRight"});return}B(t.hits),A(),u=Math.ceil(t.totalHits/15),i<u?O():(h(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"bottomRight"}))}catch{l.error({message:"Failed to fetch images",position:"topRight"})}finally{R()}}function A(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
