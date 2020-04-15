import moment from 'moment';
import { database } from '../firebase/firebase';

// Learning 
// const learnings = [{
//   name: 'Expensify App',
//   course: 'ReactJS - Andrew Mead',
//   platform: 'Udemy',
//   thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/learnings/react-mead-2.jpg',
//   shortDescription: 'A ReactJS app to track a user expenses.',
//   longDescription: '',
//   tools: ['ReactJS', 'Webpack', 'Babel'],
//   libraries: [],
//   features: [
//     'Introductory ReactJS App'
//   ],
//   featuredSpiel: null,
//   githubLink: '',
//   liveSiteLink: null,
//   featured: false,
//   progress: 0,
//   buildTime: 0,
//   progressStatement: '',
//   createdAt: moment().subtract(2, 'days').valueOf(),
//   completed: false,
//   completedAt: null

// },
// {
//   name: 'Indecision App',
//   course: 'ReactJS - Andrew Mead',
//   platform: 'Udemy',
//   thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/learnings/react-mead-2.jpg',
//   shortDescription: 'An Introductory ReactJS App - Random Options Selector.',
//   longDescription: '',
//   tools: ['ReactJS', 'Webpack', 'Babel'],
//   libraries: [],
//   features: [
//     'Introductory ReactJS App'
//   ],
//   featuredSpiel: 'The most basic of React Apps,  but focuses teachings on fundamentals. Passing props through to child components,  class based and functional component styles.. At this point, (pre useState hooks) state is confined to class based components,  and  data is passed down ( pre hooks Context API )..',
//   githubLink: '',
//   liveSiteLink: null,
//   featured: true,
//   progress: 0,
//   buildTime: 0,
//   progressStatement: '',
//   createdAt: moment().subtract(2, 'days').valueOf(),
//   completed: false,
//   completedAt: null

// },
// {
//   name: 'Expenses App (again)',
//   course: 'ReactJS - Traversy Media',
//   platform: '( Universiy of ) YouTube',
//   thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/learnings/react-expenses-traversy.jpg',
//   shortDescription: 'An Introductory ReactJS App - Expenses Application.',
//   longDescription: '',
//   tools: ['ReactJS', 'Create-React-App', 'ContextAPI'],
//   libraries: [],
//   features: [
//     'Introductory ReactJS App'
//   ],
//   featuredSpiel: 'Another basic application introducing React,  this one creates uses a single page, no router, and employs hooks, and useContext',
//   githubLink: '',
//   liveSiteLink: null,
//   featured: true,
//   progress: 0,
//   buildTime: 0,
//   progressStatement: '',
//   createdAt: moment().subtract(2, 'days').valueOf(),
//   completed: false,
//   completedAt: null

// }
// ]

// database.ref('learnings').push({
//   name: 'Indecision App',
//   course: 'ReactJS - Andrew Mead',
//   platform: 'Udemy',
//   thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/learnings/react-mead-2.jpg',
//   shortDescription: 'An Introductory ReactJS App - Random Options Selector.',
//   longDescription: '',
//   tools: ['ReactJS', 'Webpack', 'Babel'],
//   libraries: [],
//   features: [
//     'Introductory ReactJS App'
//   ],
//   featuredSpiel: 'The most basic of React Apps,  but focuses teachings on fundamentals. Passing props through to child components,  class based and functional component styles.. At this point, (pre useState hooks) state is confined to class based components,  and  data is passed down ( pre hooks Context API )..',
//   githubLink: '',
//   liveSiteLink: null,
//   featured: true,
//   progress: 0,
//   buildTime: 0,
//   progressStatement: '',
//   createdAt: moment().subtract(2, 'days').valueOf(),
//   completed: false,
//   completedAt: null
// })


// Articles

// database.ref('articles').push({
//   title: 'Blog 12',
//   article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
//   shortDescription: 'This is the twelfth test blog.',
//   author: 1,
//   tags: ['angular'],
//   thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
//   featured: false,
//   createdAt: moment().subtract(12, 'days').valueOf()
// })



// // Projects

// const initialProjectsState = {
//   projects: [
//     {
//       id: 1,
//       name: 'The Dark Fund',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(2, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },
//     {
//       id: 2,
//       name: 'ShutterBlink',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/shutterblink.jpg',
//       shortDescription: 'Client Photography Website',
//       longDescription: 'Photography showcase with E-Commerce delivered via stripe, and MYSQL data store. NodeJS Server side',

//       tools: ['HTML', 'CSS', 'Javascript', 'ES6', 'NodeJS', 'MySQL'],
//       features: [
//         'Mobile First with Flexbox Design',
//         'Express Server side with Handlebars templating',
//         'Multer image uploading with Sharp editing',
//         'Site authentication using Bcrypt and JWT'
//       ],
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       featuredSpiel: null,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(1, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },
//     {
//       id: 3,
//       name: 'PRJMan',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/prjman.jpg',
//       shortDescription: 'Designed to track project,  RAG status, key milestones, resource allocation and more..',
//       longDescription: 'A project managment API end point, allowing for storing and retrieving projects and their data. Functionality allows for creating new projects and their sub tasks, monitoring progress against milestones, and features RAG flag notifications on deadlines.',
//       tools: ['HTML', 'CSS', 'ReactJS', 'Javascript', 'ES6', 'NodeJS', 'MongoDB', 'Mongoose'],
//       features: [
//         'NodeJS Express Server Routing',
//         'Multer image uploading with Sharp editing',
//         'Site Admin authentication',
//         'Data Store By MongoDB and Mongoose'
//       ],
//       githubLink: '',
//       liveSiteLink: null,
//       featured: true,
//       featuredSpiel: null,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(3, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },{
//       id: 4,
//       name: 'The Dork Fund',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(300, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },{
//       id: 5,
//       name: 'Test 5',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(111, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },{
//       id: 6,
//       name: 'Test 6',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(26, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },{
//       id: 7,
//       name: 'Test 7',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(4, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },{
//       id: 8,
//       name: 'Test 8',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(78, 'days').valueOf(),
//       completed: true,
//       completedAt: moment().subtract(70, 'days').valueOf()
//     },{
//       id: 9,
//       name: 'Test 9',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(114, 'days').valueOf(),
//       completed: false,
//       completedAt: null
//     },
//     {
//       id: 10,
//       name: 'Test 10',
//       thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/thedarkfund.jpg',
//       shortDescription: 'Client Site, blogging platform',
//       longDescription: 'A Blogging platform designed to clients requested layout, with admin area to manage posts. ',
//       tools: ['HTML', 'CSS', 'PHP', 'Javascript', 'MYSQL'],
//       features: [
//         'Design and Color Schemed to client request',
//         'PHP running Mysql Storage',
//         'Site Authentication',
//         'Controlled access to admin area'
//       ],
//       featuredSpiel: null,
//       githubLink: '',
//       liveSiteLink: null,
//       featured: false,
//       progress: 0,
//       buildTime: 0,
//       progressStatement: '',
//       createdAt: moment().subtract(305, 'days').valueOf(),
//       completed: true,
//       completedAt: moment().subtract(305, 'days').valueOf()
//     }
//   ],
//   error: null
// }
