import type { Status } from "./site";
export interface Product { id:string; name:string; category:string; description:string; capabilities:string[]; price:string; status:Status; }
export const products: Product[] = [
 {id:"hydrocore",name:"HydroCore",category:"Automation",description:"Standalone monitoring and automation for essential hydroponic system parameters.",capabilities:["pH, EC, temperature, water-level and flow monitoring","Pump and fan/control outputs","ESP32-based architecture","Internet-independent operation"],price:"₹12,999",status:"DEVELOPING"},
 {id:"hydroedge",name:"HydroEdge",category:"Edge Intelligence",description:"An optional edge-computing layer for local data logging, camera integration and anomaly detection.",capabilities:["Local data logging","Camera integration","Edge processing","Expanded sensor data"],price:"₹27,999",status:"DEVELOPING"},
 {id:"hydroedge-ai",name:"HydroEdge AI",category:"AI Farm Intelligence",description:"An advanced intelligence layer for analytics, anomaly detection, prediction and decision support.",capabilities:["Sensor fusion","Plant data analytics","Prediction and decision support","Future constrained automation"],price:"₹44,999",status:"FUTURE"}
];
