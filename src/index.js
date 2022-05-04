import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();

let ads = [
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/b500f9bb-51be-4926-9b19-d61e5f4205921651561592637-DK-extra-300-Off1.gif"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/cff82361-5d8a-4b71-b4c1-1cab1e5a0e4c1651572595212-DK--599-store.gif"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/3fdacbb0-bc4d-4d0d-af05-44c16c52d2e81651573303883-DK-Min-50---Off-without-logo.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/384950eb-5634-4a3a-a23b-0d42335221871651573752238-DK-western-wear.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/72397f24-a2de-4f96-9fec-681ef4fbb0b21651573900958-DK-myntra-unique-styleswithout-logo.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/19327d40-7d49-4681-8133-1e07a8cdd0731651573965770-DK-Hand-picked.jpg"},
    {img:"https://assets.myntassets.com/f_webp,w_980,c_limit,fl_progressive,dpr_2.0/assets/images/2022/5/3/0cdc8248-30b5-4544-8891-e6f33003a8061651574034836-DK-Summer-styles.jpg"}
]
let i=0;
let append=document.getElementById("append_ad1");
function ad()
{
   
    setInterval(function(){
        if(i==ads.length)
        {
            i=0;
        }
        append.src=ads[i].img;
       i++
    }, 5000);
  
}

ad();