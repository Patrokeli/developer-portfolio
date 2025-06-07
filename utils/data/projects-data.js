import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
    id: 1,
    name: 'Fiber Services System',
    description: "Me and my team are developing a comprehensive fiber services management system. I am working as a backend developer, focusing on building secure and scalable APIs. The system allows for the registration and management of users and service providers. I have implemented user authentication, role-based access control, and input validation using Laravel's built-in validation features. The backend is built with Laravel and MySQL, deployed on AWS EC2, with Nginx serving as the web server. Email notifications are handled via AWS SES and Laravel's mail system.",
    tools: ['Laravel', 'PHP', 'MySQL', 'AWS SES', 'Laravel Mail', 'Laravel Sanctum', 'Nginx', 'EC2', 'Supervisor'],
    role: 'Backend Developer',
    code: '',
    demo: '',
    image: crefin,
}
,
    {
  "id": 2,
  "name": "DevConnect Blog App",
  "description": "I'm currently developing a full-stack blog platform where users can post their projects, like and comment on others' posts, and follow fellow developers. The app is a community-driven space for showcasing and discovering tech projects. The project is still in progress and focuses on dynamic interaction and social features. The backend uses MySQL and Livewire, and it's being served through NGINX and other modern web technologies.",
  "tools": ["MySQL", "Livewire", "NGINX", "PHP", "Laravel", "Alpine.js", "Tailwind CSS"],
  "role": "Full Stack Developer",
  "code": "",
  "demo": "",
  "image": travel
}
,
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Newsroom Management',
        description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
        tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
        code: '',
        demo: '',
        image: ayla,
        role: 'Full Stack Developer',
    }
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },