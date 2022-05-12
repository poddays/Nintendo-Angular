export interface INavButton{
id: navPosition;
imgSvg: string; 
title: string; 
link: string; 
}
export enum navPosition{ 
store= 0,
games= 1,
switch= 2,
playNint= 3
}