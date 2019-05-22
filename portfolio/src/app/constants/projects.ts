import {Project} from "../models/project";

export const projects = [
  new Project("Website Redesign",
    "Wyndsor Farm",
    'Together we redesigned this 10-year-old website to be sleek, modern, and mobile friendly. ' +
    'Additionally, we created an intuitive event calendar and online booking system to streamline reservations. ',
    "https://www.wyndsorfarm.com",
    "assets/img/WyndsorFarmThumbnail.PNG",
    "far fa-window-maximize"),
  new Project('Instagram Rebranding',
    'Wyndsor Farm',
    'We\'re the eyes behind the Wyndsor Farm Instagram account. With daily updates and smart social tags, ' +
    'we\'ve boosted followers 50 percent and increased our follower engagement.',
    'https://www.instagram.com/wyndsor_farm/',
    "assets/img/WyndsorFarmInstagramThumbnail.PNG",
    "fab fa-instagram"),
];
