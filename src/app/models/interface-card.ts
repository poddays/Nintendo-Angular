export interface ICard{
image: string;
title: string;
price:number;
link:string;
category?: category;
topBar: availability;
sale?:number;
newPrice?: number;
heartBtn?:boolean;
}

export enum category{
switch = "Nintendo Switch",
hardware ="hardware",
ds = "Nintendo 3DS / 2DS",
}


export enum availability{
now = "",
new = "New!",
freeDemo = "Free demo",
dlc = "DLC bundle",
preOrder = "Pre-order now",
free= "Free download",
sale= "Now on sale",
age = "2022",
TBD= "TBD",
DLC= "DLC"
}