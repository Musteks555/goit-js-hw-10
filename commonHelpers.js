import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as p,i as f}from"./assets/vendor-73801f7c.js";const o=document.querySelector(".start-btn"),y=document.querySelector("#datetime-picker"),S=document.querySelector("span[data-days]"),b=document.querySelector("span[data-hours]"),g=document.querySelector("span[data-minutes]"),F=document.querySelector("span[data-seconds]");let s;const C={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){s=t[0],Date.now()-s>0?(o.setAttribute("disabled",!0),f.show({title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"1.5",message:"Please choose a date in the future",messageColor:"#FFF",messageSize:"16px",messageLineHeight:"1.5",color:"#EF4040",position:"topRight",iconUrl:"../img/alert-close.svg",iconColor:"#FAFAFB"})):o.removeAttribute("disabled")}};new p("#datetime-picker",C);o.addEventListener("click",u);function u(){o.setAttribute("disabled",!0),y.setAttribute("disabled",!0),o.removeEventListener("click",u);const t=s-Date.now();c(i(t));const n=setInterval(()=>{const e=s-Date.now();c(i(e)),e<1e3&&clearInterval(n)},1e3)}function i(t){const d=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:d,hours:l,minutes:m,seconds:h}}function c({days:t,hours:n,minutes:e,seconds:a}){S.textContent=r(t),b.textContent=r(n),g.textContent=r(e),F.textContent=r(a)}function r(t){return String(t).padStart(2,"0")}
//# sourceMappingURL=commonHelpers.js.map
