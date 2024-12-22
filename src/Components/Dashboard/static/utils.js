
import box from "../../../assets/box.png"
import boxWithHand from "../../../assets/boxWithHand.png"
import boxes from "../../../assets/boxes.png"
import boy from "../../../assets/boy.png"
import car from "../../../assets/car.png"
import drawer from "../../../assets/drawer.png"
import kham from "../../../assets/kham.png"
import myProfile from "../../../assets/myProfile.png"
import pending from "../../../assets/pending.png"
import profile from "../../../assets/profile.png"
import redWarn from "../../../assets/redWarn.png"
import worker from "../../../assets/worker.png"


// static data separation
export let cardData1=[
    {icon:drawer,title:"Total Sample",total:2000151,bg:"bluish"},
    {icon:pending,title:"Pending",total:16,bg:"yellowish"},
    {icon:box,title:"Total Received",total:108,bg:"greenish"},
]


export const headers1=['ID','Sample Type','Quantity','Receiver Name','Company Name','Status','Date']

export const data1=[
    {id:5485,type:"Light",quantity:2,reciver:"Johnathan Smith",company:"EcoGlow Lamp",status:"Queued",date:"11-7-2014"},
    {id:5488,type:"Water Bottle",quantity:2,reciver:"Emily Parker",company:"FreshFusion Bottle",status:"Pending",date:"11-7-2014"},
    {id:5485,type:"Bedding",quantity:1,reciver:"Johnathan Smith",company:"LuxeSilk Pillow",status:"Delivered",date:"11-7-2014"},
    {id:5485,type:"Light",quantity:8,reciver:"ohnathan Smith",company:"AquaBloom Water",status:"Pending",date:"11-7-2014"},
    {id:5488,type:"Light",quantity:8,reciver:"Michael Roberts",company:"PureHarvest Snacks",status:"Pending",date:"11-7-2014"},
    {id:5485,type:"Bedding",quantity:4,reciver:"Johnathan Smith",company:"SmartSphere Tracker",status:"Delivered",date:"11-7-2014"},
    {id:5488,type:"Lighting",quantity:6,reciver:"AquaBloom Water",company:"AquaBloom Water",status:"Queued",date:"11-7-2014"},
    {id:5485,type:"Water",quantity:5,reciver:"Michael Roberts",company:"LuxeSilk Pillow",status:"Pending",date:"11-7-2014"},
    {id:5485,type:"Bedding",quantity:2,reciver:"Emily Parker",company:"AquaBloom Water",status:"Delivered",date:"11-7-2014"},
    {id:5488,type:"Water Bottle",quantity:1,reciver:"Michael Roberts",company:"LuxeSilk Pillow",status:"Queued",date:"11-7-2014"},
]



export let cardData2=[
    {icon:boxes,title:"Total Sample",total:24,bg:"greenish"},
    {icon:pending,title:"Pending",total:16,bg:"yellowish"},
    {icon:boxWithHand,title:"Delivered",total:8,bg:"greenish2"},
    {icon:car,title:"Total Dispatched",total:8,bg:"bluish"},
]


export const headers2=['Receiver Name','Sample Type','Quantity','Company Name','Status','Date']

export const data2=[
    {id:5485,type:"Light",quantity:2,reciver:"Johnathan Smith",company:"EcoGlow Lamp",status:"Queued",date:"11-7-2014"},
    {id:5488,type:"Water Bottle",quantity:2,reciver:"Emily Parker",company:"FreshFusion Bottle",status:"Pending",date:"11-7-2014"},
    {id:5485,type:"Bedding",quantity:1,reciver:"Johnathan Smith",company:"LuxeSilk Pillow",status:"Delivered",date:"11-7-2014"},
    {id:5485,type:"Light",quantity:8,reciver:"ohnathan Smith",company:"AquaBloom Water",status:"Pending",date:"11-7-2014"},
    {id:5488,type:"Light",quantity:8,reciver:"Michael Roberts",company:"PureHarvest Snacks",status:"Pending",date:"11-7-2014"},
    {id:5485,type:"Bedding",quantity:4,reciver:"Johnathan Smith",company:"SmartSphere Tracker",status:"Delivered",date:"11-7-2014"},
    {id:5488,type:"Lighting",quantity:6,reciver:"AquaBloom Water",company:"AquaBloom Water",status:"Queued",date:"11-7-2014"},
    {id:5485,type:"Water",quantity:5,reciver:"Michael Roberts",company:"LuxeSilk Pillow",status:"Pending",date:"11-7-2014"},
    {id:5485,type:"Bedding",quantity:2,reciver:"Emily Parker",company:"AquaBloom Water",status:"Delivered",date:"11-7-2014"},
    {id:5488,type:"Water Bottle",quantity:1,reciver:"Michael Roberts",company:"LuxeSilk Pillow",status:"Queued",date:"11-7-2014"},
]

export let cardData3=[
    {icon:worker,title:"Total Teams",total:8,bg:"ash"},
    {icon:boy,title:"Total User",total:108,bg:"ash2"},
    {icon:kham,title:"Total Incoming",total:108,bg:"greenish"},
    {icon:redWarn,title:"Outgoing Pending",total:5,bg:"redish"},
]


export const headers3=['Team Name','Team Description','Member Count']

export const data3=[
    {desc:"EcoGlow Lamp",name:"Accounts",count:10},
    {desc:"FreshFusion Bottle",name:"HR",count:17},
    {desc:"LuxeSilk Pillow",name:"Accounts",count:10},
    {desc:"AquaBloom Water",name:"HR",count:22},
    {desc:"PureHarvest Snacks",name:"Accounts",count:17},
    {desc:"SmartSphere Tracker",name:"HR",count:10},
    {desc:"AquaBloom Water",name:"Accounts",count:2},
    {desc:"LuxeSilk Pillow",name:"HR",count:22},
    {desc:"AquaBloom Water",name:"Accounts",count:10},
    {desc:"LuxeSilk Pillow",name:"Accounts",count:22},
]