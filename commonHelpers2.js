import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{i as l}from"./assets/vendor-3029c4a4.js";const n=({delay:i,value:e})=>new Promise((t,o)=>{setTimeout(()=>{e==="fulfilled"?t(e):o(e)},i)}),s=document.querySelector(".form");s.addEventListener("submit",c);function c(i){i.preventDefault();const e=s.querySelector('input[name="delay"]'),t=s.querySelector("input:checked"),o=e.value,r=t.value;e.value="",t.checked=!1,n({delay:o,value:r}).then(()=>{l.show({title:"OK",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"1.5",message:`Fulfilled promise in ${o}ms`,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"1.5",color:"#59A10D",progressBarColor:"#326101",position:"topRight",icon:"icon-ok"})}).catch(()=>{l.show({title:"Error",titleColor:"#FFF",titleSize:"16px",titleLineHeight:"1.5",message:`Rejected promise in ${o}ms`,messageColor:"#FFF",messageSize:"16px",messageLineHeight:"1.5",color:"#EF4040",progressBarColor:"#B51B1B",position:"topRight",icon:"icon-cancel",iconColor:"#FAFAFB"})})}
//# sourceMappingURL=commonHelpers2.js.map