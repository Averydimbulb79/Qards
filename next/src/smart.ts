import{createPresentation}from'./document';import type{Card,SmartSlide}from'./document';import{addItem,layoutItems}from'./layout';
export type{Card,SmartSlide};
export const initial=createPresentation().slides[0] as SmartSlide;
export const layoutCards=(cards:Card[],width=1080,height=440)=>layoutItems(cards,'feature-cards','grid',width,height);
export const addCard=addItem;
