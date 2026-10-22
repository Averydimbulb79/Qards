export type Card={id:string,title:string,body:string};
export type SmartQard={id:string,type:'feature-cards',title:string,cards:Card[],background:string};
export type Box={id:string,x:number,y:number,width:number,height:number};
export const initial:SmartQard={id:'demo',type:'feature-cards',title:'Our Priorities',background:'#eef3fb',cards:[{id:'one',title:'Design',body:'Create polished slides'},{id:'two',title:'Structure',body:'Keep content organised'}]};
export function layoutCards(cards:Card[],width=1080,height=440):Box[]{const n=cards.length;if(!n)return [];const columns=Math.min(n,n>=7?4:3);const rows=Math.ceil(n/columns);const gap=20;const w=(width-gap*(columns-1))/columns;const h=(height-gap*(rows-1))/rows;return cards.map((card,i)=>({id:card.id,x:(i%columns)*(w+gap),y:Math.floor(i/columns)*(h+gap),width:w,height:h}));}
export function addCard(q:SmartQard):SmartQard{const n=q.cards.length+1;return {...q,cards:[...q.cards,{id:'item-'+n+'-'+Date.now(),title:'Priority '+n,body:'Click to edit this item'}]};}
