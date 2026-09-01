const products = [
  // 依照「目前上架菜單」工作表建立；可持續在此新增或調整品項。
  { id:'hey-beer', category:'drink', emoji:'🍺', name:'嘿啤', detail:'單點飲品', price:150, photo:'S__21495852.jpg', focus:'15px 0%' },
  { id:'wake-tea', category:'drink', emoji:'🫖', name:'保護甦醒茶', detail:'單點飲品', price:150, photo:'S__21495854.jpg', focus:'15px 90%' },
  { id:'shield', category:'drink', emoji:'🛡️', name:'光芒護盾', detail:'單點飲品', price:150, photo:'S__21495852.jpg', focus:'-10px -40px' },
  { id:'chill', category:'drink', emoji:'🌙', name:'躺著 Chill', detail:'單點飲品', price:250, photo:'S__21495854.jpg', focus:'-10px 10px' },
  { id:'pink-engine', category:'drink', emoji:'🌸', name:'粉紅引擎', detail:'單點飲品', price:150, photo:'S__21495850.jpg', focus:'10px 10px' },
  { id:'fat-burn', category:'drink', emoji:'🔥', name:'瘦得 Chill', detail:'單點飲品', price:250, photo:'S__21495853.jpg', focus:'10px 0px' },
  { id:'collagen', category:'drink', emoji:'✨', name:'膠原炸彈', detail:'單點飲品', price:180, photo:'S__21495850.jpg', focus:'-20px -25px' },
  { id:'aloe-mojito', category:'drink', emoji:'🍋', name:'蘆薈 mojito', detail:'單點飲品', price:180, photo:'S__21495854.jpg', focus:'-30px -20px' },
  { id:'good-night', category:'drink', emoji:'🌾', name:'晚安奶昔', detail:'單點飲品', price:280, photo:'S__21495855.jpg', focus:'15px -35px' },
  { id:'raspberry-latte', category:'drink', emoji:'🫐', name:'覆盆子拿鐵', detail:'單點飲品', price:250, photo:'S__21495857.jpg', focus:'10px -15px' },
  { id:'ginger-latte', category:'drink', emoji:'☕', name:'蜜薑拿鐵', detail:'單點飲品', price:250, photo:'S__21495856.jpg', focus:'-15px 5px' },
  { id:'cocoa-mocha', category:'drink', emoji:'🍫', name:'舒心可可摩卡', detail:'單點飲品', price:250, photo:'S__21495856.jpg', focus:'15px -35px' },
  { id:'protein-shake', category:'drink', emoji:'🥤', name:'能量蛋白奶昔', detail:'單點飲品', price:220, photo:'S__21495855.jpg', focus:'-15px 5px' },
  { id:'cr7', category:'drink', emoji:'⚡', name:'CR7 勁能飲', detail:'單點飲品', price:150 },
  { id:'card-5', category:'card', emoji:'💳', name:'五格卡', detail:'空分者可拿 NT$200', price:980, units:5, tea:'瓜茶' },
  { id:'card-15', category:'card', emoji:'💳', name:'十五格卡', detail:'空分者可拿 NT$600', price:2800, units:15, tea:'瓜茶' },
  { id:'card-active-5', category:'card', emoji:'⚡', name:'換舒活飲 5 格', detail:'空分者可拿 NT$200', price:1120, units:5, tea:'舒活飲' },
  { id:'card-active-15', category:'card', emoji:'⚡', name:'換舒活飲 15 格', detail:'空分者可拿 NT$600', price:3200, units:15, tea:'舒活飲' },
  { id:'card-tea-5', category:'card', emoji:'🍃', name:'換草本茶 5 格', detail:'空分者可拿 NT$200', price:980, units:5, tea:'草本茶' },
  { id:'card-tea-15', category:'card', emoji:'🍃', name:'換草本茶 15 格', detail:'空分者可拿 NT$600', price:3000, units:15, tea:'草本茶' },
  { id:'card-combo-5', category:'card', emoji:'🎁', name:'奶昔＋膠原＋瓜茶 5 格', detail:'空分者可拿 NT$200', price:1400, units:5, tea:'瓜茶' },
  { id:'card-combo-15', category:'card', emoji:'🎁', name:'奶昔＋膠原＋瓜茶 15 格', detail:'空分者可拿 NT$600', price:3930, units:15, tea:'瓜茶' },
  { id:'special-mix-card', category:'card', emoji:'🎫', name:'特調寄杯卡', detail:'2 杯 $250＋1 杯 $180＋2 杯 $150・送鷹嘴豆脆脆 2 份', price:980, bonus:'鷹嘴豆脆脆 2 份' },
  { id:'workshop-single', category:'workshop-card', emoji:'🌿', name:'單堂體驗', detail:'工作坊單堂票／可使用 1 次', price:650, units:1 },
  { id:'workshop-five', category:'workshop-card', emoji:'📅', name:'五次套票', detail:'工作坊套票／可使用 5 次', price:2800 },
  { id:'charity-sound', category:'workshop-card', emoji:'🕊️', name:'公益價｜音缽冥想單堂票', detail:'全月限量 10 位・限預約音缽冥想', price:350, units:1, charityType:'sound' },
  { id:'charity-hatha', category:'workshop-card', emoji:'🕊️', name:'公益價｜哈達瑜伽單堂票', detail:'全月限量 10 位・限預約哈達／伸展瑜伽', price:350, units:1, charityType:'hatha' }
];
const workshopEvents = [
  ['yoga-0904','伸展瑜伽','2026-09-04','10:00','11:00'],['yoga-0905','伸展瑜伽','2026-09-05','10:00','11:00'],['sound-0905','音缽冥想｜夜間好眠','2026-09-05','19:30','20:30'],['sound-0906','音缽冥想｜循環提升','2026-09-06','10:30','11:30'],['yoga-0911','伸展瑜伽','2026-09-11','10:00','11:00'],['yoga-0912','伸展瑜伽','2026-09-12','10:00','11:00'],['yoga-0918','伸展瑜伽','2026-09-18','10:00','11:00'],['yoga-0920','伸展瑜伽','2026-09-20','10:00','11:00'],['bar-0927','微醺 Bar 派對','2026-09-27','14:00','16:00'],
  ...['02','09','16','23','30'].map(d=>[`bowl-${d}`,'音缽冥想',`2026-09-${d}`,'10:00','11:00']),
  ...['03','10','17','24'].map(d=>[`bowl-thu-${d}`,'音缽冥想',`2026-09-${d}`,'10:00','11:00']),
  ...['03','10','17','24'].map(d=>[`nutrition-${d}`,'營養小學堂Ｘ奶昔派對',`2026-09-${d}`,'14:00','16:00'])
].map(([id,title,date,start,end])=>({id,title,date,start,end,capacity:10}));
const SYNC_ENDPOINT = 'https://script.google.com/macros/s/AKfycbxboZ_pGS10uW5wS-Thry6NrWljmGV1lCFPqGqW71ksyrMqmr_rAxWf89_Tb7mfAP0l/exec';
let activeCategory = 'drink'; let cart = []; let vipActive = false; let vipGrid = null; let vipSelections = { flavor:[], boost:[] }; let selectedWorkshopEvent = null; let managedCalendarEventId = null; let drinkSaleMode = 'regular';
const $ = s => document.querySelector(s); const money = n => `NT$${n.toLocaleString('zh-TW')}`;
const getOrders = () => JSON.parse(localStorage.getItem('store-pos-orders') || '[]');
const saveOrders = orders => { localStorage.setItem('store-pos-orders', JSON.stringify(orders)); queueCloudSync(); };
const getMemberships = () => JSON.parse(localStorage.getItem('store-pos-memberships') || '[]');
const saveMemberships = memberships => { localStorage.setItem('store-pos-memberships', JSON.stringify(memberships)); queueCloudSync(); };
const getWorkshopBookings = () => JSON.parse(localStorage.getItem('store-pos-workshop-bookings') || '[]');
const saveWorkshopBookings = bookings => { localStorage.setItem('store-pos-workshop-bookings', JSON.stringify(bookings)); queueCloudSync(); };
const getCustomEvents = () => JSON.parse(localStorage.getItem('store-pos-custom-events') || '[]');
const saveCustomEvents = events => { localStorage.setItem('store-pos-custom-events', JSON.stringify(events)); };
const getWorkshopEvents = () => [...workshopEvents,...getCustomEvents()];
function charitySlotsLeft(type) { return Math.max(0,10-getMemberships().filter(member=>member.charityType===type).length); }
function membershipCanBookEvent(member,event) { if(!member?.charityType)return true; return member.charityType==='sound'?/音缽/.test(event.title):/哈達|伸展瑜伽/.test(event.title); }
const today = () => new Date().toLocaleDateString('en-CA');
function membershipExpiryDate(member) { if(member.type==='寄杯')return '無使用期限'; const date=new Date(`${member.purchasedAt||today()}T12:00:00`); date.setMonth(date.getMonth()+(member.type==='工作坊'?2:1)); return date.toLocaleDateString('en-CA'); }
function isMembershipExpired(member) { return today()>(member.expiresAt||membershipExpiryDate(member)); }
function ensureExpiryDates() { const memberships=getMemberships(); let changed=false; memberships.forEach(member=>{if(!member.expiresAt){member.expiresAt=membershipExpiryDate(member);changed=true;}}); if(changed) saveMemberships(memberships); }
const makeBookingCode = () => `LB-${Array.from({length:6},()=> 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'[Math.floor(Math.random()*32)]).join('')}`;
let syncTimer = null; let pendingDeletedMembershipIds=[]; let pendingDeletedBookingIds=[];
let loadingCloud = false;
function setSyncStatus(message, state='') { const status=$('#syncStatus'); if(status){status.textContent=message;status.dataset.state=state;} }
function withRecordIds(records, prefix) { let changed=false; const result=records.map((record,index)=>{if(record.id)return record;changed=true;return {...record,id:`${prefix}-legacy-${Date.now()}-${index}-${Math.random().toString(16).slice(2)}`};}); return {result,changed}; }
function ensureRecordIds() { const orders=withRecordIds(getOrders(),'order'),memberships=withRecordIds(getMemberships(),'membership'),bookings=withRecordIds(getWorkshopBookings(),'booking'); if(orders.changed)localStorage.setItem('store-pos-orders',JSON.stringify(orders.result));if(memberships.changed)localStorage.setItem('store-pos-memberships',JSON.stringify(memberships.result));if(bookings.changed)localStorage.setItem('store-pos-workshop-bookings',JSON.stringify(bookings.result)); }
function queueCloudSync() { clearTimeout(syncTimer); syncTimer=setTimeout(syncToCloud,450); }
async function syncToCloud() { if(loadingCloud)return;const deletedMembershipIds=[...pendingDeletedMembershipIds],deletedBookingIds=[...pendingDeletedBookingIds];try{setSyncStatus('正在同步…','busy');const response=await fetch(SYNC_ENDPOINT,{method:'POST',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'sync',orders:getOrders(),memberships:getMemberships(),bookings:getWorkshopBookings(),deletedMembershipIds,deletedBookingIds})});const result=await response.json();if(!result.ok)throw new Error(result.error||'同步失敗');pendingDeletedMembershipIds=pendingDeletedMembershipIds.filter(id=>!deletedMembershipIds.includes(id));pendingDeletedBookingIds=pendingDeletedBookingIds.filter(id=>!deletedBookingIds.includes(id));setSyncStatus('已同步','ok');}catch(error){console.warn('Cloud sync failed:',error);setSyncStatus('離線：資料已留在本機','error');} }
function mergeRecords(local, cloud) { const merged=new Map(cloud.map(record=>[record.id,record])); local.forEach(record=>{const remote=merged.get(record.id);if(!remote)merged.set(record.id,record);else if(!remote.bookingCode&&record.bookingCode)merged.set(record.id,{...remote,bookingCode:record.bookingCode});}); return [...merged.values()]; }
async function loadCloudData() { if(loadingCloud)return;loadingCloud=true;try{setSyncStatus('正在載入雲端…','busy');const response=await fetch(`${SYNC_ENDPOINT}?action=bootstrap`);const result=await response.json();if(!result.ok)throw new Error(result.error||'載入失敗');const orders=result.orders||[],memberships=result.memberships||[],bookings=result.bookings||[];localStorage.setItem('store-pos-orders',JSON.stringify(orders));localStorage.setItem('store-pos-memberships',JSON.stringify(memberships));localStorage.setItem('store-pos-workshop-bookings',JSON.stringify(bookings));renderMenu();renderVipControls();renderCart();setSyncStatus('已連線','ok');queueCloudSync();}catch(error){console.warn('Cloud load failed:',error);setSyncStatus('離線：使用本機資料','error');}finally{loadingCloud=false;} }
function fixLegacyFifteenCards() {
  const memberships=getMemberships(); let changed=false;
  memberships.forEach(m=>{ if(m.type==='VIP' && m.total===5 && /十五|15/.test(m.name)){m.total=15;m.remaining=Math.min(15,m.remaining+10);changed=true;} if(m.type==='VIP'&&!m.tea){m.tea=/舒活/.test(m.name)?'舒活飲':/草本/.test(m.name)?'草本茶':'瓜茶';changed=true;} });
  if(changed) saveMemberships(memberships);
}
function ensureBookingCodes() {
  const memberships=getMemberships(); let changed=false;
  memberships.forEach(member=>{if(member.type==='工作坊'&&!member.bookingCode){member.bookingCode=makeBookingCode();changed=true;}});
  if(changed) saveMemberships(memberships);
}

function renderMenu() {
  if (vipActive) {
    $('#menuGrid').innerHTML = `<div class="vip-bundle"><span>VIP 餐卡兌換</span><strong>選擇會員、格數與口味</strong><p>請在右側完成奶昔口味與 Boost 選擇；本筆不計入單點營收。</p></div>`;
    return;
  }
  if (activeCategory === 'workshop') {
    const bookings=getWorkshopBookings();
    $('#menuGrid').innerHTML = getWorkshopEvents().sort((a,b)=>`${a.date}${a.start}`.localeCompare(`${b.date}${b.start}`)).map(event=>{const used=bookings.filter(b=>b.eventId===event.id).length, left=event.capacity-used, selected=selectedWorkshopEvent?.id===event.id; return `<button class="workshop-event ${selected?'selected':''}" data-workshop-event="${event.id}" ${left<1?'disabled':''}><span>${event.date.replace('2026-','')}（${['日','一','二','三','四','五','六'][new Date(`${event.date}T12:00`).getDay()]}）</span><strong>${event.title}</strong><small>${event.start}–${event.end}</small><b>${left?`剩 ${left} 位`:'已額滿'}</b></button>`;}).join('');
    return;
  }
  if (activeCategory === 'calendar') {
    const bookings=getWorkshopBookings();
    const days=['日','一','二','三','四','五','六'], firstDay=new Date('2026-09-01T12:00').getDay();
    const blanks=Array.from({length:firstDay},()=>'<div class="calendar-day blank"></div>').join('');
    const dates=Array.from({length:30},(_,i)=>{const day=i+1,date=`2026-09-${String(day).padStart(2,'0')}`, events=getWorkshopEvents().filter(event=>event.date===date).sort((a,b)=>a.start.localeCompare(b.start)); return `<section class="calendar-day"><strong class="calendar-date">${day}</strong>${events.map(event=>{const guests=bookings.filter(b=>b.eventId===event.id),left=event.capacity-guests.length,selected=selectedWorkshopEvent?.id===event.id;return `<button class="calendar-event ${selected?'selected':''}" data-workshop-event="${event.id}" ${left<1?'disabled':''}><b>${event.start} ${event.title}</b><small>剩 ${left} 位</small><p class="guest-list ${guests.length?'booked':'empty'}">${guests.length?guests.map(g=>g.customer).join('、'):'尚無預約'}</p></button>`}).join('')}</section>`;}).join('');
    $('#menuGrid').innerHTML = `<div class="calendar-month"><div class="calendar-title">2026 年 9 月工作坊預約 <button id="addEvent" class="secondary">＋ 新增課程</button></div><p class="calendar-manager-hint">點選日曆中的課程，可立即查看與管理該堂課的客人。</p><div class="calendar-week">${days.map(day=>`<span>星期${day}</span>`).join('')}</div><div class="calendar-board">${blanks}${dates}</div></div>`;
    return;
  }
  $('#menuGrid').innerHTML = products.filter(p => activeCategory === 'workshop' ? ['workshop','workshop-card'].includes(p.category) : p.category === activeCategory).map(p => { const left=p.charityType?charitySlotsLeft(p.charityType):null, soldOut=left===0, detail=p.charityType?`${p.detail}・剩 ${left} 位`:p.detail, image=p.photo ? `<span class="product-photo"><img src="assets/menu/${p.photo}" alt="${p.name} 飲品照片" style="object-position:${p.focus}" /></span>` : `<span class="emoji">${p.emoji}</span>`; return `<button class="product" data-id="${p.id}" ${soldOut?'disabled':''}>${image}<span class="product-info"><strong>${p.name}</strong><small>${detail}</small><b>${soldOut?'已額滿':money(p.price)}</b></span><span class="add">+</span></button>`; }).join('');
}
function syncWorkshopMemberPicker() {
  const picker=$('#workshopMemberPicker'), current=$('#customerName').value.trim();
  const members=[...new Set(getMemberships().filter(m=>m.type==='工作坊'&&m.remaining>0&&!isMembershipExpired(m)).map(m=>m.customer))].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
  picker.innerHTML='<option value="">請選擇會員</option>'+members.map(name=>`<option value="${name}">${name}</option>`).join('');
  if(members.includes(current)) picker.value=current;
}
function selectWorkshopEvent(id) {
  if(activeCategory==='calendar'){showCalendarEventManager(id);return;}
  selectedWorkshopEvent=getWorkshopEvents().find(event=>event.id===id);
  cart=selectedWorkshopEvent?[{id:`workshop-${id}`,name:selectedWorkshopEvent.title,category:'workshop-booking',price:0,qty:1}]:[];
  $('#workshopSelected').textContent=selectedWorkshopEvent?`已選：${selectedWorkshopEvent.date} ${selectedWorkshopEvent.start}–${selectedWorkshopEvent.end}｜${selectedWorkshopEvent.title}`:'請從左側選擇欲預約的課程';
  renderMenu();renderCart();
}
function selectedVipMembership() { return getMemberships().find(m => m.id === $('#vipMembership').value); }
function selectedWorkshopMembership() { return getMemberships().find(m => m.id === $('#workshopMembership').value); }
function syncVipMemberPicker() {
  const picker=$('#vipMemberPicker'), current=$('#customerName').value.trim();
  const members=[...new Set(getMemberships().filter(m=>m.type==='VIP' && m.remaining>0&&!isMembershipExpired(m)).map(m=>m.customer))].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
  picker.innerHTML='<option value="">請選擇會員</option>'+members.map(name=>`<option value="${name}">${name}</option>`).join('');
  if(members.includes(current)) picker.value=current;
}
function syncVipMemberships() {
  const member = $('#customerName').value.trim();
  const eligible = getMemberships().filter(m => m.type === 'VIP' && m.customer === member && m.remaining > 0 && !isMembershipExpired(m));
  const select = $('#vipMembership'); const previous = select.value;
  select.innerHTML = '<option value="">手動登記卡別</option>' + eligible.map(m => `<option value="${m.id}">${m.name}｜剩 ${m.remaining} 格</option>`).join('');
  if (eligible.some(m=>m.id===previous)) select.value=previous;
  else if (eligible.length===1) select.value=eligible[0].id;
  const selected = selectedVipMembership();
  if (selected) { $('#vipCardType').value = String(selected.total); vipGrid = selected.usedGrids.length + 1; }
}
function syncWorkshopMemberships() {
  const member=$('#customerName').value.trim(), select=$('#workshopMembership'), previous=select.value;
  const eligible=getMemberships().filter(m=>m.type==='工作坊' && m.customer===member && m.remaining>0&&!isMembershipExpired(m));
  select.innerHTML='<option value="">請選擇套票</option>'+eligible.map(m=>`<option value="${m.id}">${m.name}｜剩 ${m.remaining} 次</option>`).join('');
  if(eligible.some(m=>m.id===previous)) select.value=previous;
  else if(eligible.length===1) select.value=eligible[0].id;
}
function storedDrinkRule(member) {
  if (member.storedProductId) { const product=products.find(item=>item.id===member.storedProductId); return {kind:'product',value:member.storedProductId,label:product?.name||member.name.replace(/寄杯/g,'')}; }
  if (member.storedPrice) return {kind:'price',value:Number(member.storedPrice),label:`NT$${member.storedPrice} 飲品`};
  if (/CR7/i.test(member.name)) return { kind:'product', value:'cr7', label:'CR7 勁能飲' };
  const price = Number((member.name.match(/\$\s?(\d+)/) || [])[1]);
  return price ? { kind:'price', value:price, label:`NT$${price} 飲品` } : null;
}
function storedDrinkCanCover(member) {
  const rule=storedDrinkRule(member), quantity=cart.reduce((sum,item)=>sum+item.qty,0);
  if (!rule || !quantity || quantity>member.remaining || cart.some(item=>item.category!=='drink')) return false;
  return rule.kind==='product' ? cart.every(item=>item.id===rule.value) : cart.every(item=>item.price===rule.value);
}
function selectedDrinkCreditMembership() { return getMemberships().find(member=>member.id===$('#drinkCreditMembership').value); }
function syncDrinkCreditMembers() {
  const customerPicker=$('#drinkCreditCustomer'), membershipPicker=$('#drinkCreditMembership');
  if (!customerPicker || !membershipPicker) return;
  const previousCustomer=customerPicker.value, previousMembership=membershipPicker.value;
  const cards=getMemberships().filter(member=>member.type==='寄杯'&&member.remaining>0);
  const customers=[...new Set(cards.map(member=>member.customer))].sort((a,b)=>a.localeCompare(b,'zh-Hant'));
  customerPicker.innerHTML='<option value="">不使用寄杯</option>'+customers.map(customer=>`<option value="${customer}">${customer}</option>`).join('');
  if(customers.includes(previousCustomer)) customerPicker.value=previousCustomer;
  const selectedCustomer=customerPicker.value;
  const customerCards=cards.filter(member=>member.customer===selectedCustomer);
  membershipPicker.disabled=!selectedCustomer;
  membershipPicker.innerHTML=selectedCustomer ? '<option value="">選擇寄杯額度</option>'+customerCards.map(member=>{const rule=storedDrinkRule(member);return `<option value="${member.id}">${member.name}｜剩 ${member.remaining} 杯${rule?`（限 ${rule.label}）`:''}</option>`;}).join('') : '<option value="">請先選擇客人</option>';
  if(customerCards.some(member=>member.id===previousMembership)) membershipPicker.value=previousMembership;
  else if(customerCards.length===1) membershipPicker.value=customerCards[0].id;
  const selected=selectedDrinkCreditMembership(), info=$('#drinkCreditInfo');
  if(!selected) info.textContent=selectedCustomer?'請選擇要扣除的寄杯額度。':'選擇客人後，系統會提示這筆飲品可使用的寄杯額度。';
  else if(storedDrinkCanCover(selected)) info.textContent=`本筆可使用「${selected.name}」，將扣除 ${cart.reduce((sum,item)=>sum+item.qty,0)} 杯，剩餘 ${selected.remaining} 杯。`;
  else { const rule=storedDrinkRule(selected); info.textContent=`此額度限兌換 ${rule?.label||'指定飲品'}；請確認購物車品項、單價與杯數。`; }
}
function useStoredDrinkMembership(id, quantity) {
  if (!id || !quantity) return false;
  const memberships=getMemberships(), card=memberships.find(member=>member.id===id);
  if (!card || card.type!=='寄杯' || !storedDrinkCanCover(card)) return false;
  card.remaining-=quantity; saveMemberships(memberships); return true;
}
function renderVipGrid() {
  const max = Number($('#vipCardType').value);
  const selected = selectedVipMembership();
  $('#vipTeaInfo').classList.toggle('hidden', !selected);
  $('#vipTeaInfo').textContent = selected ? `本卡搭配茶：${selected.tea}` : '';
  if (vipGrid > max) vipGrid = null;
  $('#gridNumber').innerHTML = Array.from({length:max}, (_,i) => { const grid=i+1, used=selected?.usedGrids.includes(grid); return `<button type="button" class="${vipGrid===grid?'active':''} ${used?'used':''}" data-grid="${grid}" ${used?'disabled':''}>第 ${grid} 格</button>`; }).join('');
}
function renderVipControls() {
  $('#vipFields').classList.toggle('hidden', !vipActive);
  $('#customerField').classList.toggle('hidden', vipActive);
  if (vipActive) { syncVipMemberPicker(); renderVipGrid(); }
}
function renderDrinkSaleMode() {
  const visible=activeCategory==='drink', field=$('#drinkSaleModeFields');
  field.classList.toggle('hidden',!visible);
  if(!visible)return;
  document.querySelectorAll('[data-drink-sale-mode]').forEach(button=>button.classList.toggle('active',button.dataset.drinkSaleMode===drinkSaleMode));
  $('#drinkSaleModeInfo').textContent=drinkSaleMode==='regular'?'現場飲用會直接加入一般訂單。':drinkSaleMode==='product'?'指定寄杯：點選飲品後，客人日後只能兌換同一款。':'同價任選寄杯：點選飲品後，客人日後可兌換任一相同單價飲品。';
}
function renderCart() {
  const regularTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const workshopBooking = activeCategory === 'workshop', calendarPage = activeCategory === 'calendar';
  const drinkCredit=selectedDrinkCreditMembership(), usingDrinkCredit=activeCategory==='drink'&&!!drinkCredit;
  const drinkCreditValid=usingDrinkCredit&&storedDrinkCanCover(drinkCredit);
  const total = (vipActive || workshopBooking || drinkCreditValid) ? 0 : regularTotal;
  const hasWorkshop = cart.some(i => i.category === 'workshop');
  $('#itemCount').textContent = vipActive ? 'VIP 兌換' : calendarPage ? '行事曆預約管理' : workshopBooking ? '工作坊預約' : `${cart.reduce((n,i)=>n+i.qty,0)} 項`;
  $('#subtotal').textContent = $('#total').textContent = money(total);
  const requiresMember = cart.some(i => i.category === 'card' || i.category === 'workshop-card' || i.category === 'stored-drink');
  $('#checkout').disabled = calendarPage || cart.length === 0 || (vipActive && (!$('#customerName').value.trim() || !vipGrid)) || (workshopBooking && (!$('#customerName').value.trim() || !$('#workshopMembership').value || !selectedWorkshopEvent)) || (requiresMember && !$('#customerName').value.trim()) || (usingDrinkCredit&&!drinkCreditValid);
  $('#checkout').textContent = calendarPage ? '請點選日曆中的課程' : vipActive ? '完成 VIP 兌換登記' : workshopBooking ? '完成工作坊預約' : usingDrinkCredit ? (drinkCreditValid?'完成寄杯兌換':'寄杯額度不符合本筆飲品') : '完成結帳';
  $('#bookingFields').classList.toggle('hidden', !hasWorkshop);
  $('#workshopBookingFields').classList.toggle('hidden', !workshopBooking);
  $('#drinkCreditFields').classList.toggle('hidden', activeCategory!=='drink');
  $('#customerField').classList.toggle('hidden', vipActive || workshopBooking || calendarPage);
  if(activeCategory==='drink') { syncDrinkCreditMembers(); renderDrinkSaleMode(); }
  $('#cartItems').innerHTML = calendarPage ? '<div class="calendar-side-guide"><strong>新版預約管理</strong><p>直接點選左側日曆中的課程，即可查看該堂課的客人名單、取消預約，或查看客人的其他預約。</p></div>' : vipActive ? '<p class="empty-cart">請完成右側的會員、格數、口味與 Boost 選擇</p>' : workshopBooking ? '<p class="empty-cart">請從左側選擇可預約課程，再選擇持票會員</p>' : (cart.length ? cart.map(i => `<div class="cart-row"><div><strong>${i.name}</strong><small>${money(i.price)}／份</small><div class="line-actions"><button class="qty" data-action="minus" data-id="${i.id}">−</button><span class="quantity">${i.qty}</span><button class="qty" data-action="plus" data-id="${i.id}">+</button><button class="remove" data-action="remove" data-id="${i.id}">移除</button></div></div><span class="line-price">${money(i.price*i.qty)}</span></div>`).join('') : '<p class="empty-cart">從左側選擇品項開始點單</p>');
}
function addProduct(id) { const p = products.find(x=>x.id===id); if(!p)return; if(p.category==='drink'&&drinkSaleMode!=='regular'){addStoredDrinkProduct(id,drinkSaleMode);return;} const line = cart.find(x=>x.id===id); if(p.charityType&&((line?.qty||0)>=charitySlotsLeft(p.charityType))){alert('這個公益名額本月已無剩餘名額。');return;} line ? line.qty++ : cart.push({...p,qty:1}); if(p.category==='workshop') syncWorkshopMemberships(); renderCart(); }
function addStoredDrinkProduct(id, mode='product') { const product=products.find(item=>item.id===id); if(!product || product.category!=='drink')return; const isPriceMode=mode==='price', storedId=`stored-${isPriceMode?'price':'product'}-${id}`, line=cart.find(item=>item.id===storedId), name=isPriceMode?`同價任選寄杯 NT$${product.price}`:`${product.name} 寄杯`; line ? line.qty++ : cart.push({...product,id:storedId,name,category:'stored-drink',storedProductId:isPriceMode?'':product.id,storedPrice:isPriceMode?product.price:0,qty:1}); renderCart(); }
function resetOrder() { cart=[]; vipActive=false; activeCategory='drink'; selectedWorkshopEvent=null; vipGrid=null; vipSelections={flavor:[],boost:[]}; drinkSaleMode='regular'; $('#customerName').value=''; $('#coachName').value=''; $('#vipMemberPicker').innerHTML='<option value="">請選擇會員</option>'; $('#vipMembership').innerHTML='<option value="">手動登記卡別</option>'; $('#workshopMemberPicker').innerHTML='<option value="">請選擇會員</option>'; $('#workshopMembership').innerHTML='<option value="">請先選擇會員</option>'; $('#drinkCreditCustomer').innerHTML='<option value="">不使用寄杯</option>'; $('#drinkCreditMembership').innerHTML='<option value="">請先選擇客人</option>'; $('#bookingDate').value=''; $('#bookingContact').value=''; $('#orderNote').value=''; document.querySelectorAll('[data-vip-choice] button').forEach(b=>b.classList.remove('active')); document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.category==='drink')); renderVipControls(); renderMenu(); renderCart(); }
function todayOrders() { return getOrders().filter(o=>o.date===today()); }
function createMemberships(order) {
  const memberships = getMemberships();
  order.items.filter(i => i.category === 'card' || i.category === 'workshop-card' || i.category === 'stored-drink').forEach(item => {
    if (item.id==='special-mix-card') {
      for(let n=0;n<item.qty;n++) ['250','250','180','150','150'].forEach((price,index)=>memberships.push({id:`membership-${Date.now()}-${n}-${index}-${Math.random().toString(16).slice(2)}`,customer:order.customer,name:`特調卡同價任選寄杯（NT$${price}）`,type:'寄杯',total:1,remaining:1,tea:'',bookingCode:'',usedGrids:[],storedPrice:Number(price),purchasedAt:order.date,expiresAt:'無使用期限'}));
      return;
    }
    if (item.category==='stored-drink') {
      memberships.push({id:`membership-${Date.now()}-${Math.random().toString(16).slice(2)}`,customer:order.customer,name:item.name,type:'寄杯',total:item.qty,remaining:item.qty,tea:'',bookingCode:'',usedGrids:[],storedProductId:item.storedProductId||'',storedPrice:item.storedPrice||0,purchasedAt:order.date,expiresAt:'無使用期限'});
      return;
    }
    const total = item.units || (item.category === 'workshop-card' ? 5 : 5);
    const type = item.category === 'workshop-card' ? '工作坊' : 'VIP';
    for (let n=0; n<item.qty; n++) { const purchasedAt=order.date, expiresAt=membershipExpiryDate({type,purchasedAt}); memberships.push({ id:`membership-${Date.now()}-${Math.random().toString(16).slice(2)}`, customer:order.customer, name:item.name, type, total, remaining:total, tea:item.tea||'', charityType:item.charityType||'', bookingCode:type==='工作坊'?makeBookingCode():'', usedGrids:[], purchasedAt, expiresAt }); }
  });
  saveMemberships(memberships);
}
function useVipMembership(vip) {
  if (!vip.membershipId) return;
  const memberships=getMemberships(), card=memberships.find(m=>m.id===vip.membershipId);
  if (!card || card.remaining<1 || isMembershipExpired(card) || card.usedGrids.includes(vip.grid)) return;
  card.usedGrids.push(vip.grid); card.remaining-=1; saveMemberships(memberships);
}
function useWorkshopMembership(id) {
  if (!id) return;
  const memberships=getMemberships(), card=memberships.find(m=>m.id===id);
  if (!card || card.remaining<1 || isMembershipExpired(card)) return;
  card.remaining-=1; saveMemberships(memberships);
}
function bookWorkshop(membershipId) {
  if(!selectedWorkshopEvent || !membershipId || isMembershipExpired(getMemberships().find(m=>m.id===membershipId)||{})) return false;
  const bookings=getWorkshopBookings(), eventBookings=bookings.filter(b=>b.eventId===selectedWorkshopEvent.id);
  if(eventBookings.length>=selectedWorkshopEvent.capacity || eventBookings.some(b=>b.membershipId===membershipId)) return false;
  bookings.push({id:`booking-${Date.now()}`,eventId:selectedWorkshopEvent.id,membershipId,customer:$('#customerName').value.trim(),createdAt:new Date().toISOString()});
  saveWorkshopBookings(bookings); return true;
}
function eventLabel(event) { return `${event.date} ${event.start}｜${event.title}`; }
function renderCalendarManager(event) { const bookings=getWorkshopBookings().filter(booking=>booking.eventId===event.id), available=getMemberships().filter(member=>member.type==='工作坊'&&member.remaining>0&&!isMembershipExpired(member)&&!bookings.some(booking=>booking.membershipId===member.id)), full=bookings.length>=event.capacity; return `<section class="calendar-manager"><div><p class="eyebrow">BOOKING MANAGER</p><h3>${eventLabel(event)}｜已預約 ${bookings.length} 位</h3></div><div class="calendar-add-booking"><strong>新增客人預約</strong><div><select id="calendarMembershipPicker" ${full?'disabled':''}><option value="">選擇客人／工作坊票券</option>${available.map(member=>`<option value="${member.id}">${member.customer}｜${member.name}｜剩 ${member.remaining} 次</option>`).join('')}</select><button class="primary" data-calendar-book="${event.id}" ${full?'disabled':''}>加入預約</button></div><small>${full?'這堂課已額滿':available.length?'選擇客人的工作坊票券後加入。':'目前沒有可用的工作坊票券。'}</small></div>${bookings.length?`<div class="booking-manager-list">${bookings.map(booking=>`<div class="booking-manager-row"><div><strong>${booking.customer}</strong><small>目前預約這堂課</small></div><div class="booking-manager-actions"><button class="secondary" data-member-bookings="${booking.membershipId}">查看所有預約</button><button class="danger" data-booking-action="cancel" data-booking-id="${booking.id}">取消預約</button></div></div>`).join('')}</div>`:'<p class="empty-cart">這堂課目前尚無預約</p>'}</section>`; }
function showCalendarEventManager(eventId) { const event=getWorkshopEvents().find(item=>item.id===eventId); if(!event)return; managedCalendarEventId=eventId; $('#bookingManagerContent').innerHTML=renderCalendarManager(event); if(!$('#bookingDialog').open)$('#bookingDialog').showModal(); }
function showMemberBookings(membershipId) { const bookings=getWorkshopBookings().filter(booking=>booking.membershipId===membershipId), member=getMemberships().find(item=>item.id===membershipId), events=getWorkshopEvents(); $('#bookingManagerContent').innerHTML=`<section class="calendar-manager"><button class="secondary" data-calendar-back>← 回到這堂課名單</button><div class="member-booking-title"><p class="eyebrow">ALL BOOKINGS</p><h3>${member?.customer||bookings[0]?.customer||'客人'} 的全部預約</h3></div>${bookings.length?`<div class="booking-manager-list">${bookings.map(booking=>{const event=events.find(item=>item.id===booking.eventId);return `<div class="booking-manager-row"><div><strong>${event?eventLabel(event):'找不到活動'}</strong><small>已預約</small></div><div class="booking-manager-actions"><button class="danger" data-booking-action="cancel" data-booking-id="${booking.id}">取消這堂</button></div></div>`;}).join('')}</div>`:'<p class="empty-cart">目前沒有其他預約</p>'}</section>`; }
function addCalendarBooking(eventId) { const membershipId=$('#calendarMembershipPicker')?.value, event=getWorkshopEvents().find(item=>item.id===eventId), memberships=getMemberships(), member=memberships.find(item=>item.id===membershipId), bookings=getWorkshopBookings(); if(!membershipId||!event||!member){alert('請先選擇客人的工作坊票券。');return;} if(member.remaining<1||isMembershipExpired(member)){alert('這張票券目前無法使用。');return;} if(!membershipCanBookEvent(member,event)){alert('這張公益票僅能預約指定類型的課程。');return;} if(bookings.filter(item=>item.eventId===eventId).length>=event.capacity){alert('這堂課已額滿。');return;} bookings.push({id:`booking-${Date.now()}-${Math.random().toString(16).slice(2)}`,eventId,membershipId,customer:member.customer,createdAt:new Date().toISOString(),source:'staff-calendar'}); member.remaining-=1; saveMemberships(memberships); saveWorkshopBookings(bookings); renderMenu(); renderCart(); showCalendarEventManager(eventId); }
function addCustomEvent(){const title=$('#eventTitle').value.trim(),date=$('#eventDate').value,start=$('#eventStart').value,end=$('#eventEnd').value,capacity=Math.max(1,Number($('#eventCapacity').value)||10);if(!title||!date||!start||!end){alert('請完整填寫課程名稱、日期與時間。');return;}saveCustomEvents([...getCustomEvents(),{id:`custom-${Date.now()}`,title,date,start,end,capacity}]);$('#eventDialog').close();renderMenu();}
function showBookingManager() {
const bookings=getWorkshopBookings().sort((a,b)=>{const ea=getWorkshopEvents().find(e=>e.id===a.eventId),eb=getWorkshopEvents().find(e=>e.id===b.eventId);return `${ea?.date||''}${ea?.start||''}`.localeCompare(`${eb?.date||''}${eb?.start||''}`);});
  $('#bookingManagerContent').innerHTML=bookings.length?`<div class="booking-manager-list">${bookings.map(booking=>{const event=workshopEvents.find(e=>e.id===booking.eventId);return `<div class="booking-manager-row"><div><strong>${booking.customer}</strong><small>目前：${event?eventLabel(event):'找不到活動'}</small></div><select data-booking-select="${booking.id}">${workshopEvents.map(item=>`<option value="${item.id}" ${item.id===booking.eventId?'selected':''}>${eventLabel(item)}</option>`).join('')}</select><div class="booking-manager-actions"><button class="secondary" data-booking-action="save" data-booking-id="${booking.id}">更新活動</button><button class="danger" data-booking-action="cancel" data-booking-id="${booking.id}">取消預約</button></div></div>`;}).join('')}</div>`:'<p class="empty-cart">目前沒有工作坊預約</p>';
  if(!$('#bookingDialog').open) $('#bookingDialog').showModal();
}
function updateWorkshopBooking(id) {
  const select=document.querySelector(`[data-booking-select="${id}"]`), eventId=select?.value, bookings=getWorkshopBookings(), booking=bookings.find(item=>item.id===id), event=workshopEvents.find(item=>item.id===eventId);
  if(!booking||!event||booking.eventId===eventId) { showBookingManager(); return; }
  const sameEvent=bookings.filter(item=>item.eventId===eventId&&item.id!==id);
  if(sameEvent.length>=event.capacity) { alert('這堂課已額滿，請選擇其他活動。'); return; }
  if(sameEvent.some(item=>item.membershipId===booking.membershipId)) { alert('此會員已預約這堂活動。'); return; }
  booking.eventId=eventId; booking.updatedAt=new Date().toISOString(); saveWorkshopBookings(bookings); renderMenu(); renderCart(); if(activeCategory==='calendar')showCalendarEventManager(managedCalendarEventId);else showBookingManager();
}
function cancelWorkshopBooking(id) {
  const bookings=getWorkshopBookings(), booking=bookings.find(item=>item.id===id);
  if(!booking) return;
  const membership=getMemberships().find(item=>item.id===booking.membershipId);
  if(membership) { membership.remaining=Math.min(membership.total,membership.remaining+1); saveMemberships(getMemberships()); }
  saveWorkshopBookings(bookings.filter(item=>item.id!==id)); renderMenu(); renderCart(); if(activeCategory==='calendar')showCalendarEventManager(managedCalendarEventId);else showBookingManager();
}
function membershipLabel(member) { return member.type==='工作坊' ? (member.bookingCode||`票券 ${member.id.slice(-5).toUpperCase()}`) : `餐卡 ${member.id.slice(-5).toUpperCase()}`; }
function membershipGroupsMarkup(memberships, emptyMessage) {
  if(!memberships.length) return `<p class="empty-cart">${emptyMessage}</p>`;
  const groups=memberships.reduce((map,member)=>{(map[member.customer]??=[]).push(member);return map;},{});
  return `<div class="membership-list">${Object.entries(groups).map(([customer,cards])=>`<section class="membership-group"><div class="membership-group-header"><strong>${customer}</strong><span>${cards.length} 張卡／票券</span></div>${cards.map(member=>{const unit=member.type==='VIP'?'格':member.type==='寄杯'?'杯':'次',expired=isMembershipExpired(member);return `<article class="membership-row"><div class="membership-card-title"><span class="membership-kind">${member.type}</span>${expired?'<span class="membership-expired">已到期</span>':''}<strong>${member.name}</strong><small>教練：${member.coach||'未指定'}・${membershipLabel(member)}・有效至 ${member.expiresAt||membershipExpiryDate(member)}${member.type==='工作坊'?`・預約碼 ${member.bookingCode||'產生中…'}`:''}</small></div><div class="membership-balance"><strong>剩餘 ${member.remaining}／${member.total} ${unit}</strong><button class="danger membership-delete" data-membership-delete="${member.id}">刪除卡</button></div></article>`;}).join('')}</section>`).join('')}</div>`;
}
function showMemberships() {
  const query=($('#membershipSearch')?.value||'').trim().toLocaleLowerCase(), sort=$('#membershipSort')?.value||'stroke', strokeCollator=new Intl.Collator('zh-Hant-u-co-stroke'), all=getMemberships().sort((a,b)=>{if(sort==='newest')return String(b.purchasedAt).localeCompare(String(a.purchasedAt))||strokeCollator.compare(a.customer,b.customer);if(sort==='oldest')return String(a.purchasedAt).localeCompare(String(b.purchasedAt))||strokeCollator.compare(a.customer,b.customer);if(sort==='expiry')return String(a.expiresAt||membershipExpiryDate(a)).localeCompare(String(b.expiresAt||membershipExpiryDate(b)))||strokeCollator.compare(a.customer,b.customer);return strokeCollator.compare(a.customer,b.customer)||String(a.purchasedAt).localeCompare(String(b.purchasedAt));});
  const memberships=query?all.filter(member=>`${member.customer} ${member.name} ${member.type} ${member.bookingCode||''}`.toLocaleLowerCase().includes(query)):all;
  const active=memberships.filter(member=>Number(member.remaining)>0&&!isMembershipExpired(member)), archived=memberships.filter(member=>Number(member.remaining)<=0||isMembershipExpired(member));
  $('#membershipContent').innerHTML = memberships.length ? `<section class="membership-section"><div class="membership-section-heading"><div><strong>目前可使用</strong><small>剩餘次數大於 0 的卡／票券</small></div><b>${active.length} 張</b></div>${membershipGroupsMarkup(active,query?'找不到符合的可用卡／票券。':'目前沒有可使用的卡／票券。')}</section><details class="membership-archive"><summary><span>已用完歷史紀錄</span><b>${archived.length} 張</b><small>點此展開查看</small></summary>${membershipGroupsMarkup(archived,query?'找不到符合的已用完紀錄。':'目前沒有已用完的紀錄。')}</details>` : `<p class="empty-cart">${query?'找不到符合的會員或票券。':'目前尚未建立 VIP 卡或工作坊套票紀錄'}</p>`;
  if (!$('#membershipDialog').open) $('#membershipDialog').showModal();
}
function deleteMembership(id) { const member=getMemberships().find(item=>item.id===id); if(!member)return; const relatedBookings=getWorkshopBookings().filter(item=>item.membershipId===id); if(!confirm(`確定要刪除「${member.customer}」的 ${member.name} 嗎？${relatedBookings.length?`\n這也會取消 ${relatedBookings.length} 筆工作坊預約。`:''}`))return; pendingDeletedMembershipIds.push(id); pendingDeletedBookingIds.push(...relatedBookings.map(item=>item.id)); saveMemberships(getMemberships().filter(item=>item.id!==id)); saveWorkshopBookings(getWorkshopBookings().filter(item=>item.membershipId!==id)); showMemberships(); renderMenu(); renderCart(); }
function addExistingMembership() {
  const customer=$('#membershipCustomer').value.trim(), kind=$('#membershipKind').value;
  if (!customer) { $('#membershipCustomer').focus(); return; }
  const config={ 'vip-5':{type:'VIP',name:'VIP 5 格卡',total:5,tea:'瓜茶'}, 'vip-15':{type:'VIP',name:'VIP 15 格卡',total:15,tea:'瓜茶'}, 'workshop-1':{type:'工作坊',name:'工作坊單堂票',total:1,tea:''}, 'workshop-5':{type:'工作坊',name:'工作坊五次套票',total:5,tea:''}, 'stored-cr7':{type:'寄杯',name:'CR7 勁能飲寄杯（NT$150）',tea:''}, 'stored-180':{type:'寄杯',name:'特調飲品寄杯（NT$180）',tea:''}, 'stored-250':{type:'寄杯',name:'特調飲品寄杯（NT$250）',tea:''} }[kind];
  const entered=Math.max(1,Number($('#membershipRemaining').value)||1), total=config.total||entered, remaining=Math.min(total,entered);
  const usedGrids=config.type==='VIP'?Array.from({length:config.total-remaining},(_,i)=>i+1):[];
  const purchasedAt=today(), expiresAt=membershipExpiryDate({type:config.type,purchasedAt});
  saveMemberships([...getMemberships(),{id:`membership-${Date.now()}-${Math.random().toString(16).slice(2)}`,customer,name:config.name,type:config.type,total,remaining,tea:config.tea,bookingCode:config.type==='工作坊'?makeBookingCode():'',usedGrids,purchasedAt,expiresAt}]);
  $('#membershipCustomer').value=''; $('#membershipRemaining').value=config.total||1; showMemberships();
}
function showReport() {
  const orders=todayOrders(), vipUses=orders.filter(o=>o.vip), sales=orders.reduce((s,o)=>s+o.total,0), cups=orders.reduce((s,o)=>s+o.items.filter(i=>i.category==='drink').reduce((a,i)=>a+i.qty,0),0) + vipUses.length*2, cards=orders.reduce((s,o)=>s+o.items.filter(i=>i.category==='card').reduce((a,i)=>a+i.qty,0),0), bookings=orders.reduce((s,o)=>s+o.items.filter(i=>i.category==='workshop-booking').reduce((a,i)=>a+i.qty,0),0);
  const count={}; orders.forEach(o=>o.items.forEach(i=>count[i.name]=(count[i.name]||0)+i.qty));
  const vipList = vipUses.length ? vipUses.map(o=>`<div class="vip-report-row"><strong>${o.customer}</strong><span>${o.vip.cardType} 格卡・第 ${o.vip.grid} 格${o.vip.coach ? `・${o.vip.coach}` : ''}</span><small>${o.vip.tea ? `搭配茶：${o.vip.tea}｜` : ''}${o.vip.flavor.length ? `口味：${o.vip.flavor.join('、')}` : '未選口味'}${o.vip.boost.length ? `｜${o.vip.boost.join('、')}` : ''}</small></div>`).join('') : '<p class="empty-cart">今天尚無 VIP 餐卡兌換紀錄</p>';
  $('#reportContent').innerHTML=`<div class="report-grid"><div class="metric"><span>今日營收</span><strong>${money(sales)}</strong></div><div class="metric"><span>飲品杯數</span><strong>${cups} 杯</strong></div><div class="metric"><span>VIP 卡銷售</span><strong>${cards} 張</strong></div><div class="metric"><span>VIP 兌換</span><strong>${vipUses.length} 筆</strong></div><div class="metric"><span>活動預約</span><strong>${bookings} 位</strong></div></div><h3>VIP 今日兌換</h3><div class="report-list vip-report-list">${vipList}</div><h3>品項統計</h3><div class="report-list">${Object.keys(count).length ? Object.entries(count).sort((a,b)=>b[1]-a[1]).map(([n,q])=>`<div class="report-row"><span>${n}</span><strong>${q} 份</strong></div>`).join('') : '<p class="empty-cart">今天還沒有結帳紀錄</p>'}</div>`;
  $('#reportDialog').showModal();
}
function exportCSV() { const rows=[['時間','顧客／桌號','品項','數量','金額','VIP 卡別','第幾格','搭配茶','教練','奶昔口味','加強選項','活動日期','聯絡方式','備註']]; todayOrders().forEach(o=>o.items.forEach(i=>rows.push([o.time,o.customer,i.name,i.qty,o.vip?0:i.price*i.qty,o.vip?.cardType||'',o.vip?.grid||'',o.vip?.tea||'',o.vip?.coach||'',o.vip?.flavor.join('、')||'',o.vip?.boost.join('、')||'',o.bookingDate,o.contact,o.note]))); const blob=new Blob(['\uFEFF'+rows.map(r=>r.map(x=>`"${String(x||'').replaceAll('"','""')}"`).join(',')).join('\n')],{type:'text/csv;charset=utf-8'}); const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=`POS-${today()}.csv`;a.click();URL.revokeObjectURL(a.href); }
document.addEventListener('click', e=>{ const membershipDelete=e.target.closest('[data-membership-delete]'); if(membershipDelete){deleteMembership(membershipDelete.dataset.membershipDelete);return;} const bookingAction=e.target.closest('[data-booking-action]'); if(bookingAction){if(bookingAction.dataset.bookingAction==='save')updateWorkshopBooking(bookingAction.dataset.bookingId);if(bookingAction.dataset.bookingAction==='cancel')cancelWorkshopBooking(bookingAction.dataset.bookingId);return;} const workshop=e.target.closest('[data-workshop-event]'); if(workshop) selectWorkshopEvent(workshop.dataset.workshopEvent); const saleMode=e.target.closest('[data-drink-sale-mode]'); if(saleMode){drinkSaleMode=saleMode.dataset.drinkSaleMode;renderCart();return;} const product=e.target.closest('.product'); if(product) addProduct(product.dataset.id); const action=e.target.dataset.action; if(action){const line=cart.find(i=>i.id===e.target.dataset.id); if(action==='plus')line.qty++; if(action==='minus')line.qty===1?cart=cart.filter(i=>i!==line):line.qty--; if(action==='remove')cart=cart.filter(i=>i!==line); renderCart();} const grid=e.target.closest('[data-grid]'); if(grid){vipGrid=Number(grid.dataset.grid);renderVipGrid();renderCart();} const choice=e.target.closest('[data-vip-choice] button'); if(choice){const type=choice.closest('[data-vip-choice]').dataset.vipChoice; choice.classList.toggle('active'); vipSelections[type]=[...choice.parentElement.querySelectorAll('.active')].map(b=>b.textContent); } if(e.target.matches('[data-close]'))e.target.closest('dialog').close(); });
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{const wasVip=vipActive, wasWorkshop=['workshop','calendar'].includes(activeCategory);activeCategory=t.dataset.category;vipActive=activeCategory==='vip';if(vipActive)cart=[{id:'vip-shake',name:'大杯能量蛋白飲',category:'vip',price:0,qty:1},{id:'vip-tea',name:'機能甦醒茶',category:'vip',price:0,qty:1}];else if(['workshop','calendar'].includes(activeCategory)){cart=[];selectedWorkshopEvent=null;$('#workshopSelected').textContent='請從左側選擇欲預約的課程';syncWorkshopMemberPicker();}else if(wasVip||wasWorkshop)cart=[];document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('active',x===t));renderVipControls();if(vipActive){syncVipMemberships();renderVipGrid();}renderMenu();renderCart();}));
$('#newOrder')?.addEventListener('click',resetOrder); $('#showReports')?.addEventListener('click',showReport); $('#showMemberships')?.addEventListener('click',showMemberships); $('#addMembership')?.addEventListener('click',addExistingMembership); $('#membershipSearch')?.addEventListener('input',showMemberships); $('#membershipSort')?.addEventListener('change',showMemberships); $('#membershipKind')?.addEventListener('change',()=>{const kind=$('#membershipKind').value;$('#membershipRemaining').value=kind==='vip-15'?15:kind==='workshop-1'?1:kind.startsWith('stored-')?1:5;}); $('#exportData')?.addEventListener('click',exportCSV);
document.addEventListener('click',e=>{if(e.target.closest('#addEvent'))$('#eventDialog').showModal();}); $('#saveEvent').addEventListener('click',addCustomEvent);
document.addEventListener('click',e=>{const add=e.target.closest('[data-calendar-book]');if(add){addCalendarBooking(add.dataset.calendarBook);return;}const member=e.target.closest('[data-member-bookings]');if(member){showMemberBookings(member.dataset.memberBookings);return;}if(e.target.closest('[data-calendar-back]'))showCalendarEventManager(managedCalendarEventId);});
$('#vipCardType').addEventListener('change',()=>{vipGrid=null;renderVipGrid();renderCart();});
$('#vipMemberPicker').addEventListener('change',()=>{$('#customerName').value=$('#vipMemberPicker').value;syncVipMemberships();const selected=selectedVipMembership();if(selected){$('#vipCardType').value=String(selected.total);vipGrid=selected.usedGrids.length+1;}renderVipGrid();renderCart();});
$('#vipMembership').addEventListener('change',()=>{const selected=selectedVipMembership();if(selected){$('#vipCardType').value=String(selected.total);vipGrid=selected.usedGrids.length+1;}renderVipGrid();renderCart();});
$('#workshopMemberPicker').addEventListener('change',()=>{$('#customerName').value=$('#workshopMemberPicker').value;syncWorkshopMemberships();renderCart();});
$('#drinkCreditCustomer').addEventListener('change',()=>{if($('#drinkCreditCustomer').value)$('#customerName').value=$('#drinkCreditCustomer').value;syncDrinkCreditMembers();renderCart();});
$('#drinkCreditMembership').addEventListener('change',()=>{const card=selectedDrinkCreditMembership();if(card)$('#customerName').value=card.customer;renderCart();});
$('#customerName').addEventListener('input',()=>{syncWorkshopMemberships();if(vipActive){syncVipMemberships();renderVipGrid();}renderCart();});
$('#checkout').addEventListener('click',()=>{const workshopBooking=['workshop','calendar'].includes(activeCategory), drinkCard=activeCategory==='drink'?selectedDrinkCreditMembership():null, drinkQuantity=cart.reduce((sum,item)=>sum+item.qty,0), usingDrinkCredit=!!drinkCard;if(usingDrinkCredit&&!storedDrinkCanCover(drinkCard)){alert('這張寄杯額度無法兌換目前的飲品或杯數。');return;}const total=(vipActive||workshopBooking||usingDrinkCredit)?0:cart.reduce((s,i)=>s+i.price*i.qty,0), selectedCard=selectedVipMembership();const vip=vipActive?{membershipId:$('#vipMembership').value,cardType:$('#vipCardType').value,grid:vipGrid,tea:selectedCard?.tea||'',coach:$('#coachName').value,flavor:vipSelections.flavor,boost:vipSelections.boost}:null;const workshopMembershipId=$('#workshopMembership').value;if(workshopBooking&&!bookWorkshop(workshopMembershipId)) return;const gifts=cart.filter(item=>item.bonus).flatMap(item=>Array.from({length:item.qty},()=>item.bonus));const order={id:`order-${Date.now()}-${Math.random().toString(16).slice(2)}`,date:today(),time:new Date().toLocaleTimeString('zh-TW',{hour:'2-digit',minute:'2-digit'}),customer:$('#customerName').value.trim(),bookingDate:workshopBooking?selectedWorkshopEvent.date:$('#bookingDate').value,contact:$('#bookingContact').value.trim(),note:$('#orderNote').value.trim(),items:cart,total,vip,workshopMembershipId,drinkCreditMembershipId:drinkCard?.id||'',drinkCreditName:drinkCard?.name||'',drinkCreditQuantity:usingDrinkCredit?drinkQuantity:0,gifts,workshopEvent:workshopBooking?selectedWorkshopEvent:null};createMemberships(order);useVipMembership(vip||{});useWorkshopMembership(workshopMembershipId);if(usingDrinkCredit)useStoredDrinkMembership(drinkCard.id,drinkQuantity);saveOrders([...getOrders(),order]);$('#successMessage').textContent=vip?`${order.customer} 已登記 ${vip.cardType} 格卡第 ${vip.grid} 格。`:workshopBooking?`${order.customer} 已預約 ${selectedWorkshopEvent.title}。`:usingDrinkCredit?`${order.customer} 已使用 ${drinkCard.name} 兌換 ${drinkQuantity} 杯，剩餘 ${drinkCard.remaining} 杯。`:gifts.length?`本筆金額 ${money(total)}，已建立特調寄杯額度；請贈送 ${gifts.join('、')}。`:`本筆金額 ${money(total)}，已納入今天統計。`;$('#successDialog').showModal();resetOrder();});
fixLegacyFifteenCards(); ensureBookingCodes(); ensureExpiryDates(); ensureRecordIds(); renderMenu(); renderVipControls(); renderCart(); loadCloudData(); setInterval(loadCloudData,30000);
