<script>
    import Project from "./Project.svelte";
    import Experience from "./Experience.svelte";
    let steps = [
        {name: 'Weather App', icon: '/src/images/project_1.png', href: 'https://github.com/vishvaprakash24/weather-application'},
        {name: 'Philips Trimmer', icon: '/src/images/project_2.png', href: 'https://github.com/vishvaprakash24/philips'},
        {name: 'Bubble Game', icon: '/src/images/project_3.png', href: 'https://github.com/vishvaprakash24/bubble-game'},
        {name: 'NutriMeal', icon: '/src/images/Project_4.png', href: 'https://github.com/vishvaprakash24/nutrimeal'},
        {name: 'Portfolio', icon: '/src/images/Project_5.png', href: 'https://github.com/vishvaprakash24/nutrimeal'}
    ]
    let exp = [
        {name: 'GeeksforGeeks', role: 'Technical Content Writer',icon: '/src/images/experience_1.svg', duration: 'May 2023 - October 2023'},
        {name: 'iNeuBytes', role: 'Web Developer Intern', icon: '/src/images/experience_2.svg', duration: 'July 2023 - Aug-2023'},
        {name: 'Marquee Equity', role: 'Fellowship', icon: '/src/images/experience_3.svg', duration: 'September 2023 - Present'},
        {name: 'Chegg Inida', role: 'Managed Network Expert', icon: '/src/images/experience_4.svg', duration: 'October 2023 - Present'}
    ]
</script>

<main class="flex flex-col p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex lg:ml-7 flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I'm <span class="poppins text-violet-400">Vishva Prakash</span> Maddheshiya. <br> Full Stack <span class="poppins text-violet-400">Developer</span></h2>
            <p class=" text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> includes JavaScript (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!</p>

            <a href="https://www.linkedin.com/feed/" class="blueShadow overflow-hidden mx-auto lg:mr-auto lg:ml-0 text-base sm:text-lg md:text-xl poppins relative px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violet-400 opacity-20 group-hover:translate-x-full z-0 duration-200">        </div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>      

        </div>
        <div class="relative shadow-2xl lg:order-none grid place-items-center">
            <!-- svelte-ignore a11y-img-redundant-alt -->
            <img src="/src/images/profile.jpg" alt="Profile image" class="object-cover z-[2] w-[440px] h-[475px] rounded-full max-h-[70vh]">
        </div>

    </section>
    <section id="about" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text-xl md:text-2xl">Want to know more?</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">A bit <span class="poppins text-violet-400">about</span> me.</h3>
        </div>
        <p class="px-32 mx-auto poppins text-center text-lg sm:text-xl md:text-2xl"> I am 2024 Batch CSE Graduate. I am looking for internship opportunities as well as Full Time Roles. Below are my Skills:</p>
        <div class="px-32 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-12 lg:gap-10">
            <div class="p-4 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/python.svg" alt="">
                <h3 class="font-semibold text-xl">Python</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/html-5.svg" alt="">
                <h3 class="font-semibold text-xl">HTML</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/css-icon.svg" alt="">
                <h3 class="font-semibold text-xl">CSS</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/js.svg" alt="">
                <h3 class="font-semibold text-xl">Javascript</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/react.svg" alt="">
                <h3 class="font-semibold text-xl">ReactJS</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/nodejs.svg" alt="">
                <h3 class="font-semibold text-xl">NodeJS</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/express.svg" alt="">
                <h3 class="font-semibold text-xl">ExpressJS</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/mongo.svg" alt="">
                <h3 class="font-semibold text-xl">MongoDB</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/mysql.svg" alt="">
                <h3 class="font-semibold text-xl">mySQL</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/git.svg" alt="">
                <h3 class="font-semibold text-xl">Git</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/github.svg" alt="">
                <h3 class="font-semibold text-xl">GitHub</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/tailwind.svg" alt="">
                <h3 class="font-semibold text-xl">Tailwind</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/figma.svg" alt="">
                <h3 class="font-semibold text-xl">Figma</h3>
                <p class="text-base">Intermediate</p>
            </div>
            <div class="p-4 sm:p-1 md:p-8 flex flex-col items-center gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200">
                <img src="/src/icons/nextjs.svg" alt="">
                <h3 class="font-semibold text-xl">NextJS</h3>
                <p class="text-base">Basic</p>
            </div>
        </div>
    </section>
    <section id="experience" class="py-20 pt-10 lg:pt-16 lg:py-32 flex flex-col gap-16 sm:gap-20 md:gap-24 relative">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-6">
            <!-- <h6 class="text-lg sm:text-xl md:text-2xl">Want to k</h6> -->
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl"><span class="poppins text-violet-400">Experience</span></h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Experience exp={exp[0]}/>
            <Experience exp={exp[1]}/>
            <Experience exp={exp[2]}/>
            <Experience exp={exp[3]}/>
        </div>
    </section>
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center relative before:absolute before:top-0 before:left-0 before:w-2/3 before:h-1.5 before:bg-violet-700 after:absolute after:bottom-0 after:right-0 after:w-2/3 after:h-1.5 after:bg-violet-700 py-4">
            <h6 class="text-lg sm:text=xl md:text-2xl">
                A few of my creative endeavors.
            </h6>
            <h3 class="font-semibold text-3xl">
                Curious to <span class="poppins text-violet-400">see</span> my work?
            </h3>
            
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Project step={steps[0]}>
                <p>This is a modern weather application created using <strong class="text-violet-400">HTML, CSS, JavaScript and Weather API.</strong>That provide hourly temperature and many more information.</p>
            </Project>
            <Project step={steps[1]}>
                <p>This is a landing page for philips trimmer made with <strong class="text-violet-400">HTML, CSS and JavaScript.</strong>That provides you the brief introduction of the product.</p>
            </Project>
            <Project step={steps[2]}>
                <p>This is a Game created with <strong class="text-violet-400">HTML, CSS and JavaScript.</strong>It is created to understand the JavaScript Event Bubbling.</p>
            </Project>
            <Project step={steps[3]}>
                <p>This is a website for Healthy foods created with <strong class="text-violet-400">HTML, CSS and JavaScript.</strong></p>
            </Project>
            <Project step={steps[4]}>
                <p>This is my portfolio website created with <strong class="text-violet-400">SvelteKit and TailwindCSS.</strong>It is created to showcase my skills and projects.</p>
            </Project>
        </div>
    </section>
</main>