import {StaffMember} from "../models/staff-member";


export const staff = [
  new StaffMember("Dave Soler",
    "Lead Software Developer",
    "My name is Dave Soler and I've been creating software in the Philadelphia Area for over 6 years. " +
    "I've created Android and iOS apps for teacher's and carpenter's unions, I've developed marketing websites for a local farm, " +
    "I've even written software for the Children's Hospital of Philadelphia to help analyze patient data. " +
    "Needless to say, I've seen it all and am confident I can help create software to solve your business needs.",
    ["Responsive Website Development", "Mobile App Development", "IT Services", "Ui/Ux Design"],
    "assets/img/DaveHeadshot.png"),

  new StaffMember("Gill Soler",
    "Digital Content Strategist",
    "My name is Gillian Soler and I write things people like to read. Still here? Yay. I've been a digital " +
    "content writer and strategist since 2012. Every social media account I made, every blog I started, every chance I " +
    "could I would craft a colorful version of myself and the brands I worked for. I break rules, I have fun, I end " +
    "sentences with prepositions and don't give a sh*t. I'll make your brand look baller and leave my sailor mouth " +
    "at sea... unless you're into that sort of thing.",
    ["Digital Content Strategy", "Copywriting", "Social Media Marketing", "Editorial Content"],
    "assets/img/GillHeadshot.jpg"),
];
