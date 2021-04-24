import Project1 from '../images/scrnli_10_20_2020_9-34-38 AM.png';
import Project3 from '../images/scrnli_10_20_2020_9-43-21 AM.png';
import Project2 from '../images/scrnli_10_20_2020_11-50-32 AM.png';
import Project4 from '../images/scrnli_10_20_2020_9-48-51 AM.png';
import Project5 from '../images/Screenshot.png';
import Project6 from '../images/Screenshot2.png';
import Project7 from '../images/project7.png';
import Project8 from '../images/form-creator.png';

const data = [
  {
    photo: Project1,
    description:
      'Simple app, built with React and Express, with MongoDB, allowing user to shorten their links.',
    link: 'https://github.com/fdxs-alt/url-shortener',
    workInProgress: false,
    deploy: 'https://url-shortener-jsss.herokuapp.com/',
  },
  {
    photo: Project2,
    description:
      'Chat app built with React and Redux on frontend, on backend Node.js with Express framework. It allows user to register, log in, creating/deleting rooms, and sending messages via websockets.',
    link: 'https://github.com/fdxs-alt/Chatty',
    workInProgress: false,
    deploy: 'https://chatty.herokuapp.com/',
  },
  {
    photo: Project3,
    description:
      'Clone of popular page nofluffjobs.com created with Apollo GraphQl + Typescript + TypeGraphQL, allowing users to menage their company, or sending cvs and storing them in database',
    link: 'https://github.com/fdxs-alt/nofluffjobs-clone',
    workInProgress: false,
  },
  {
    photo: Project4,
    description:
      'Clone of twitter with React, MobX and Nestjs with TypeORM+PostgreSQL (work in progress). Most complicated project so far. It is supposed to provide all basic Twitter functionality and also sending messages.',
    link: 'https://github.com/fdxs-alt/twitter-clone',
    workInProgress: true,
  },
  {
    photo: Project5,
    link: 'https://github.com/fdxs-alt/Artesania-shop',
    description:
      'Landing page build for Artesania company. Created with Next.js and DatoCMS as headless cms. Added animations using react-spring, protected by recaptcha. Seo provided with package Next-seo.',
    workInProgress: false,
    deploy: 'https://sklep-artesania.pl/',
  },
  {
    photo: Project6,
    description:
      'Application which is using microservice architecture – a gateway pattern, gatway „talks” with other microservices. Pretty simple app, my introduction to learning docker, and docker-compose. More in readme',
    link: 'https://github.com/fdxs-alt/express-docker',
    workInProgress: false,
  },
  {
    photo: Project7,
    description:
      'Nextjs app allowing admin to sell games. Using DatoCMS as headless CMS. Paymenets provided by stripe. Full cart functionality. Data about orders stored in MongoDB.',
    deploy: 'https://next-shop-stripe.vercel.app/',
    link: 'https://github.com/fdxs-alt/nextjs-shop',
    workInProgress: false,
  },
  {
    photo: Project8,
    description:
      'Nextjs app allowing user to create custom forms like those at Google Forms. Using MongoDB as DB and mongoose as ORM. Types of input: email, date, checkbox, radio, text, textarea and number. Form provider can access the result. Authentication provided by Auth0',
    deploy: 'https://form-creator.vercel.app/',
    link: 'https://github.com/fdxs-alt/form-creator',
    workInProgress: false,
  },
];

export default data;
