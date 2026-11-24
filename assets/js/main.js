(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please fill in your name, a valid email and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();

(function(){
function $(i){return document.getElementById(i);}
var SYM={normal:["Normal wash","The tub with no bar underneath: a full machine cycle at the stated temperature is fine.",["Use the number inside the tub as the maximum, not a target.","Dark colours keep their depth longer at 30&deg;C than at 40&deg;C.","Fill the drum about three quarters full so clothes can move."]],
gentle:["Gentle / delicate","One bar under the tub means a reduced spin and a shorter, gentler cycle.",["Use the delicate or synthetics programme, not the main cottons cycle.","Reduce the spin speed to 800 rpm or lower.","Wash with similar weights so nothing is battered by a heavy item."]],
hand:["Hand wash only","A hand in a tub: no machine, even on a hand-wash programme, unless you like risk.",["Use lukewarm water and a soap made for delicates.","Press the water through; never twist or wring.","Roll in a towel to take out water, then dry flat."]],
nowash:["Do not wash","The crossed tub means water will damage the item, usually because of construction rather than fibre.",["Air it between wears and spot-clean marks with a barely damp cloth.","Take it to a cleaner that handles the fabric in question.","Ask before you leave it; not every cleaner takes every item."]],
tumble:["Tumble dry allowed","A circle in a square. One dot is low heat, two is medium, three is high.",["Low heat for anything with elastane; heat is what kills stretch.","Take items out slightly damp and let them finish on a hanger.","Clean the lint filter every load or drying takes twice as long."]],
notumble:["Do not tumble dry","The crossed square means heat and tumbling will shrink or distort it.",["Dry flat on a towel for knitwear so the shoulders keep their shape.","Line dry shirts on a hanger and smooth the seams while damp.","Keep wool and silk out of direct sun."]],
iron2:["Iron, medium","Two dots on the iron: up to about 150&deg;C, which suits wool, polyester and most blends.",["Press on the reverse to avoid a shine on the surface.","Use a cloth between the iron and anything dark.","Steam does most of the work; weight does the rest."]],
noiron:["Do not iron","The crossed iron usually means a coating, a print or a fibre that melts.",["Hang it in a steamy bathroom to drop the creases.","Use a steamer held away from the surface if you have one.","Never press a print directly, even through a cloth."]],
bleach:["Do not bleach","A crossed triangle. Chlorine bleach weakens fibres and yellows whites over time.",["Use an oxygen-based whitener instead of chlorine.","Treat stains before washing rather than bleaching afterwards.","Check that your detergent is not an 'all-in-one with bleach'."]],
dryclean:["Dry clean only","A circle, sometimes with a letter showing which solvent the cleaner should use.",["Point out any stains and say what caused them.","Remove belts, pins and shoulder pads before you hand it over.","Take suits in as a pair so they age at the same rate."]]};
var sy=$('sym');
function symOut(){var d=SYM[sy.value];
 $('symOut').innerHTML='<h4>'+d[0]+'</h4><p>'+d[1]+'</p><ul><li>'+d[2].join('</li><li>')+'</li></ul>';}
if(sy){sy.addEventListener('change',symOut);symOut();}
var ST={grease:["Grease or oil","Washing-up liquid",["Blot, never rub; rubbing drives it into the weave.","Work a drop of washing-up liquid into the mark with a fingertip.","Leave fifteen minutes, then wash at the warmest temperature the label allows.","Do not tumble dry until the mark has gone; heat sets it permanently."]],
coffee:["Coffee or tea","Cold water, then detergent",["Rinse from the back of the fabric with cold water straight away.","Dab with a little liquid detergent and leave for ten minutes.","Wash normally; repeat before drying if a shadow remains.","On wool, use lukewarm water and no rubbing at all."]],
redwine:["Dark fruit or berry juice","Cold water and salt",["Blot up what you can, then flood from behind with cold water.","Cover the mark with salt to hold the colour while you work.","Soak in cold water with detergent for half an hour.","Never use hot water, which sets the pigment."]],
ink:["Ink","A cleaner made for ink",["Put an absorbent cloth underneath to catch what comes through.","Dab, do not wipe, so the mark does not spread.","Treat it the same day; dried ink often cannot be removed at home.","On anything valuable, go straight to a professional cleaner."]],
sweat:["Perspiration marks","White vinegar or an enzyme detergent",["Soak the area in a solution of one part white vinegar to four of water.","Follow with an enzyme detergent worked into the mark.","Avoid chlorine bleach, which turns these marks yellow.","Washing promptly after wear prevents most of them."]],
mud:["Mud","Patience, then a brush",["Let it dry completely; wet mud spreads and sets.","Brush the dry crust off outdoors with a soft brush.","Pre-treat what is left with detergent and wash normally.","Check before drying, because heat fixes the rest."]],
makeup:["Make-up","Micellar water or washing-up liquid",["Lift any solids off with the edge of a spoon.","Dab with micellar water on a cotton pad from the outside in.","Finish with a drop of detergent and a normal wash.","Powder marks often brush out dry; try that first."]],
sun:["Fading from sunlight","Prevention, not cure",["Faded dye cannot be restored at home; redyeing is the only route.","Dry dark items in shade and turn them inside out.","Rotate what you wear so no item takes all the light.","Store seasonal clothes away from windows."]]};
var stn=$('stain');
function stOut(){var d=ST[stn.value];
 $('stOut').innerHTML='<h4>'+d[0]+'</h4><p><b>Reach for:</b> '+d[1]+'</p><ul><li>'+d[2].join('</li><li>')+'</li></ul><p style="margin:.7em 0 0;font-size:.9rem">Test any treatment on an inside seam first, and check the care label before you start.</p>';}
if(stn){stn.addEventListener('change',stOut);stOut();}
function n(i){var v=parseFloat($(i).value);return isNaN(v)?0:v;}
function barHTML(l,v,txt){return '<div class="bar"><span>'+l+'</span><i><em style="width:'+Math.max(4,Math.min(100,v))+'%"></em></i><b>'+txt+'</b></div>';}
function loadOut(){var kg=n('ldKg'),type=$('ldType').value,soil=$('ldSoil').value,o=$('ldOut');
 var cap={small:5,mid:7,large:9,xl:11}[$('ldDrum').value];
 if(!(kg>0)){o.innerHTML='<h4>Enter a load weight</h4><p>Dry weight in kilograms. A full laundry basket is usually three to four kilograms.</p>';return;}
 var pct=kg/cap*100;
 var full=pct>85?'Overloaded':pct>70?'Full, which is ideal':pct>40?'Comfortable':'Half empty';
 var temp={everyday:30,towels:60,bedding:60,delicates:30,sports:30}[type];
 if(soil==='heavy'&&temp<60)temp=40;
 var spin={everyday:1200,towels:1400,bedding:1200,delicates:600,sports:800}[type];
 var det=Math.round(kg*13+(soil==='heavy'?12:soil==='light'?-4:0));
 var tips=[];
 tips.push(pct>85?'Leave a hand&#8217;s width of space at the top of the drum. Clothes that cannot move do not get clean.':'Three quarters full is the sweet spot: enough friction to clean, enough room to rinse.');
 tips.push(temp>=60?'This load needs the heat for hygiene, so accept the energy cost and run it less often.':'Thirty degrees cleans ordinary clothes and keeps colour and elastic alive for years longer.');
 if(type==='delicates')tips.push('Put small items in a mesh bag so straps do not wrap around the agitator.');
 if(type==='sports')tips.push('Skip the fabric conditioner; it coats synthetic fibres and locks odour in.');
 if(type==='towels')tips.push('Towels need a high spin and a long dry. Conditioner is what makes them stop absorbing.');
 o.innerHTML='<h4>'+full+'</h4><div class="bars">'+barHTML('Drum',pct,Math.round(pct)+'%')+barHTML('Temperature',temp/60*100,temp+'&deg;C')+barHTML('Spin',spin/1400*100,spin+' rpm')+'</div><p><b>Detergent:</b> roughly '+det+' ml of liquid, or one level scoop per 4 kg of powder. Soft water needs less.</p><ul><li>'+tips.join('</li><li>')+'</li></ul>';}
['ldKg','ldType','ldSoil','ldDrum'].forEach(function(i){var e=$(i);if(e)e.addEventListener('input',loadOut);});
if($('ldKg'))loadOut();
})();
