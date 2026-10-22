export const SCHEMA_VERSION=1 as const;
export type Background={kind:'solid';color:string}|{kind:'gradient';from:string;to:string;angle:number}|{kind:'picture';assetId:string;fallback:string};
export type TextStyle={fontFamily:string;fontSize:number;color:string;bold?:boolean;align?:'left'|'center'|'right'};
export type Card={id:string;title:string;body:string};
export type SmartLayout='feature-cards'|'comparison'|'steps'|'kpi';
export type SmartSlide={id:string;mode:'smart';layout:SmartLayout;title:string;items:Card[];background:Background;variant:'grid'|'stack'|'row';overrides?:Record<string,{x:number;y:number}>};
export type FreeformSlide={id:string;mode:'freeform';title:string;background:Background;objects:FreeformObject[]};
export type FreeformObject={id:string;kind:'text';x:number;y:number;width:number;height:number;text:string;style:TextStyle};
export type Slide=SmartSlide|FreeformSlide;
export type Presentation={format:'qards';schemaVersion:typeof SCHEMA_VERSION;id:string;name:string;slides:Slide[];activeSlideId:string};
export const createPresentation=():Presentation=>{const slide:SmartSlide={id:'slide-1',mode:'smart',layout:'feature-cards',title:'Our Priorities',variant:'grid',background:{kind:'solid',color:'#eef3fb'},items:[{id:'one',title:'Design',body:'Create polished slides'},{id:'two',title:'Structure',body:'Keep content organised'}]};return{format:'qards',schemaVersion:SCHEMA_VERSION,id:'demo',name:'Untitled presentation',slides:[slide],activeSlideId:slide.id}};
export function isPresentation(value:unknown):value is Presentation{if(!value||typeof value!=='object')return false;const p=value as Partial<Presentation>;return p.format==='qards'&&p.schemaVersion===1&&typeof p.name==='string'&&Array.isArray(p.slides)&&p.slides.every(s=>s&&typeof s.id==='string'&&((s.mode==='smart'&&Array.isArray(s.items))||(s.mode==='freeform'&&Array.isArray(s.objects))))}
