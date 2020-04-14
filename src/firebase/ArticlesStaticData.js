import moment from 'moment';
import { database } from '../firebase/firebase';


database.ref('articles').push({
  title: 'Blog 12',
  article: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p> <p>Duis aute irure dolor in reprehenderit in voluptate velit. </p> <p>esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>',
  shortDescription: 'This is the twelfth test blog.',
  author: 1,
  tags: ['angular'],
  thumbPic: 'https://dmvie1.s3.us-east-2.amazonaws.com/train-with-intensity.jpg',
  featured: false,
  createdAt: moment().subtract(12, 'days').valueOf()
})