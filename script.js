
const roles=['Actuarial Professional','Clinical Statistical Programmer','Data Scientist'];
let i=0;setInterval(()=>{document.getElementById('typing').textContent=roles[i++%roles.length]},1800);
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('show')}));
document.querySelectorAll('.reveal').forEach(x=>obs.observe(x));
