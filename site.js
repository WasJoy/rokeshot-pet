'use strict';
const shareURL='https://wasjoy.github.io/rokeshot-pet/';
document.getElementById('copy-link').addEventListener('click',async()=>{
  const status=document.getElementById('copy-status');
  try{await navigator.clipboard.writeText(shareURL);status.textContent='링크를 복사했어요. Windows PC에서 열어주세요.';}
  catch{status.textContent=shareURL;}
});
