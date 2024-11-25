

const links =[
    {
        site:"google",
        image:"https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
    },
    {
        site:"facebook",
        image:"https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
    },
    {
        site:"twitter",
        image:"https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
    },
    {
        site:"instagram",
        image:"https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
    },
    {
        site:"youtube",
        image:"https://w7.pngwing.com/pngs/63/1016/png-transparent-google-logo-google-logo-g-suite-chrome-text-logo-chrome.png"
    }
]
const getImage =()=>{

    const link = document.getElementById("link").value;
    var foundLink = links.find((l)=>l.site === link)
    console.log(foundLink)
    if(foundLink){
        document.getElementById("image").src = foundLink.image;
    }else{
        document.getElementById("image").src = "https://cdn1.vectorstock.com/i/1000x1000/76/90/not-found-rubber-stamp-vector-13537690.jpg";
    }

    
}