
const target=new Date('2026-06-20T02:00:00');
function tick(){
const d=Math.max(0,target-new Date());
days.textContent=Math.floor(d/86400000);
hours.textContent=Math.floor((d%86400000)/3600000);
minutes.textContent=Math.floor((d%3600000)/60000);
seconds.textContent=Math.floor((d%60000)/1000);
}
tick();setInterval(tick,1000);
