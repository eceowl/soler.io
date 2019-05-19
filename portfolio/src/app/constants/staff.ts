import {StaffMember} from "../models/staff-member";


export const staff = [
  new StaffMember("Dave Soler",
    "Lead Software Developer",
    "My name is Dave Soler and I've been creating software in the Philadelphia Area for over 6 years. " +
    "I have created responsive marketing websites for small businesses, mobile (Android and iOS) applications for Labor Unions, " +
    "and even am soon-to-be published for my software contributions to a study at the Children's Hospital of Philadelphia. " +
    "Needless to say, I am qualified and capable of solving any business problem that comes my way",
    ["Responsive Website Development", "Mobile App Development", "Ui/Ux Design"],
    "assets/img/DaveHeadshot.png"),

  new StaffMember("Gill Soler",
    "Digital Content Strategist",
    "My name is Gill Soler and Lorem Ipsum is simply dummy text of the printing and typesetting industry." +
    " Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley " +
    "of type and scrambled it to make a type specimen book. " +
    "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    ["Digital Content Strategy", "Copywriting", "Social Media Marketing", "Editorial Content"],
    "assets/img/GillHeadshot.jpg"),
];
