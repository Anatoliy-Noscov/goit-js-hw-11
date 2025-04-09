import{a as d,S as g,i as p}from"./assets/vendor-lDhL-8I6.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const y="49685164-dd199c429b54d7a6e3529f8c6",h="https://pixabay.com/api/";async function v(a){const s={key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40};return(await d.get(h,{params:s})).data}const u=document.querySelector(".gallery");let L=new g(".gallery a",{captionsData:"alt",captionDelay:250});function w(a){const s=a.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img class="gallery-image" src="${t.webformatURL}" alt="${t.tags}" />
          <div class="image-info">
            <div class="image-info-item">
              <span class="image-info-title">Likes</span>
              <span class="image-info-value">${t.likes}</span>
            </div>
            <div class="image-info-item">
              <span class="image-info-title">Views</span>
              <span class="image-info-value">${t.views}</span>
            </div>
            <div class="image-info-item">
              <span class="image-info-title">Comments</span>
              <span class="image-info-value">${t.comments}</span>
            </div>
            <div class="image-info-item">
              <span class="image-info-title">Downloads</span>
              <span class="image-info-value">${t.downloads}</span>
            </div>
          </div>
        </a>
      </li>
    `).join("");u.innerHTML=s,L.refresh()}function b(){u.innerHTML=""}document.addEventListener("DOMContentLoaded",()=>{const a=document.querySelector(".search-form"),s=document.querySelector(".loading-message"),t=document.querySelector(".error-message");if(!a)return;a.addEventListener("submit",n);async function n(i){i.preventDefault();const f=i.target.elements.searchQuery.value.trim();if(!f){c("Please enter a search term");return}e(),b(),m();try{const l=await v(f);l.hits.length===0?(o("Sorry, there are no images matching your search query. Please try again!"),c("Sorry, there are no images matching your search query. Please try again!")):w(l.hits)}catch(l){o("Something went wrong. Please try again later."),c("Something went wrong. Please try again later."),console.error("Error:",l)}finally{r()}}function e(){s&&s.classList.add("visible")}function r(){s&&s.classList.remove("visible")}function o(i){p.error({title:"Error",message:i,position:"topRight",titleColor:"#fff",messageColor:"#fff",backgroundColor:"#EF4040",progressBarColor:"#FFBEBE",close:!0,closeOnClick:!0,timeout:5e3})}function c(i){t&&(t.textContent=i,t.style.display="block")}function m(){t&&(t.style.display="none")}});
//# sourceMappingURL=index.js.map
