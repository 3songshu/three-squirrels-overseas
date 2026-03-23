function getInquiryList(){try{return JSON.parse(localStorage.getItem('three_squirrels_inquiry')||'[]');}catch{return [];}}
function saveInquiryList(list){localStorage.setItem('three_squirrels_inquiry',JSON.stringify(list));}
function updateCartBadge(){var n=getInquiryList().length,badge=document.getElementById('cartBadge');if(badge){badge.textContent=n;badge.style.display=n>0?'flex':'none';}}
function addToInquiry(id,name,price){var list=getInquiryList();if(list.some(function(i){return i.id===id;}))return;list.push({id:id,name:name,price:price,qty:1});saveInquiryList(list);updateCartBadge();}