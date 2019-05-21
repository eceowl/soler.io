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
    "My name is Gill Soler and Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    ["Digital Content Strategy", "Copywriting", "Social Media Marketing", "Editorial Content"],
    "assets/img/GillHeadshot.jpg"),
];
