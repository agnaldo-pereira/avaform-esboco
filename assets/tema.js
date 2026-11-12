(function(){
const root=document.getElementById('qualificacao-esboco');
const select=document.getElementById('q-theme');
const logo=document.getElementById('q-logo');
const media=window.matchMedia('(prefers-color-scheme: dark)');
function apply(){
const choice=select.value;
const effective=choice==='auto'?(media.matches?'dark':'light'):choice;
root.dataset.theme=effective;root.style.colorScheme=effective;
document.documentElement.style.colorScheme=effective;
logo.src=effective==='dark'?logo.dataset.darkSrc:logo.dataset.lightSrc;
}
try{const saved=localStorage.getItem('avaform-theme');if(['auto','light','dark'].includes(saved))select.value=saved;}catch{}
select.addEventListener('change',()=>{apply();try{localStorage.setItem('avaform-theme',select.value);}catch{}});
media.addEventListener('change',()=>{if(select.value==='auto')apply();});
apply();
})();
