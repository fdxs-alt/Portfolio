import Project1 from '../images/scrnli_10_20_2020_9-34-38 AM.png';
import Project3 from '../images/scrnli_10_20_2020_9-43-21 AM.png';
import Project2 from '../images/scrnli_10_20_2020_11-50-32 AM.png';
import Project4 from '../images/scrnli_10_20_2020_9-48-51 AM.png';

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
];

export default data;
