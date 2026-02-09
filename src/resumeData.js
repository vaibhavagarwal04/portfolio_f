// Resume data
export const resume = {
  name: 'Vaibhav Agarwal',
  phone: '8604656369',
  email: 'vaibhavagarwal3110@gmail.com',
  links: [
    { id: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/vaibhav-agarwal-26b319281/', description: 'Connect and view my experience.' },
    { id: 'github', label: 'GitHub', href: 'https://github.com/vaibhavagarwal04', description: 'Repositories and open-source work.' },
    { id: 'codechef', label: 'CodeChef', href: 'https://www.codechef.com/users/vaibh1204', description: '2★ profile and contest history.' },
    { id: 'leetcode', label: 'LeetCode', href: 'https://leetcode.com/vaibhav_agarwal31', description: 'Problem solving and contest rating.' },
    { id: 'codeforces', label: 'Codeforces', href: 'https://codeforces.com/profile/vaibhavagarwal277', description: 'Competitive programming profile.' },
  ],
  education: [
    { title: 'B.Tech (CS)', dates: 'Sep 2023 – present', institution: 'KIET Deemed To Be University', score: '80%', location: 'Uttar Pradesh, India' },
    { title: 'Intermediate (CBSE)', dates: '2022', institution: 'Army Public School, Ayodhya', score: '81%', location: 'Uttar Pradesh, India' },
    { title: 'Secondary (CBSE)', dates: '2020', institution: 'Army Public School, Ayodhya', score: '89%', location: 'Uttar Pradesh, India' },
  ],
  roles: [
    { title: 'Coordinator — Technocrats Club', dates: 'Nov 2024 – Present', organization: 'KIET Group of Institutions', location: 'Ghaziabad, India', bullets: ['Mentored students on Cyber Security fundamentals and Penetration Testing.', 'Conducted workshops and hands-on sessions to build awareness in ethical hacking.'] },
    { title: 'Placement Cell Coordinator', dates: '2025 – 2027', organization: 'KIET Group of Institutions', location: 'Ghaziabad, India', bullets: ['Coordinating placement activities for the 2027 Computer Science batch.', 'Worked closely with recruiters, faculty, and students to ensure smooth placement drives.'] },
  ],
  projects: [
    { id: 'budgetbuddy', name: 'BudgetBuddy', tagline: 'Personal finance tracker with real-time insights.', stack: ['React.js', 'Tailwind CSS', 'Supabase'], dates: 'July 2025', featured: true, links: { demo: 'https://thebudgetbuddyy.netlify.app/', repo: 'https://github.com/vaibhavagarwal04/BudgetBuddy-Expense-Tracker' }, bullets: ['Developed a personal finance management web app to track income, expenses, and savings with real-time updates.', 'Integrated Supabase for authentication and database management, ensuring secure user data storage.', 'Implemented interactive visualizations (Pie and Wave charts) for better financial insights.'] },
    { id: 'supabase-todo', name: 'Supabase ToDo', tagline: 'Full-stack To-Do app with real-time updates.', stack: ['React.js', 'Supabase', 'PostgreSQL'], dates: '2025', featured: true, links: { repo: 'https://github.com/vaibhavagarwal04/Supabase-ToDo' }, bullets: ['Built a CRUD To-Do application with authentication and hosted database using Supabase.', 'Implemented add/update/delete flows with a clean UI and fast interactions.', 'Used Supabase (Postgres) for data storage and retrieval with real-time capability.'] },
    { id: 'spotify-clone', name: 'Spotify Clone', tagline: 'UI clone focused on layout and responsiveness.', stack: ['React.js', 'CSS'], dates: '2024 – 2025', links: { repo: 'https://github.com/vaibhavagarwal04/spotify-clone' }, bullets: ['Created a Spotify-inspired interface with reusable components and responsive layout.', 'Focused on clean UI structure, spacing, and consistent visual hierarchy.'] },
    { id: 'recipe-finder', name: 'Recipe Finder', tagline: 'Search-first UI for discovering recipes.', stack: ['JavaScript', 'HTML', 'CSS'], dates: '2024', links: { repo: 'https://github.com/vaibhavagarwal04/recipe-finder' }, bullets: ['Built a lightweight UI to explore recipes with a search-focused experience.', 'Focused on fast UX, layout, and clean styling.'] },
    { id: 'dog-age', name: 'Dog Age Calculator', tagline: "Turn dog years into human years with ease.", stack: ['HTML', 'CSS', 'JavaScript'], dates: '2024', links: { repo: 'https://github.com/vaibhavagarwal04/Dog-Age' }, bullets: ["An interactive website that calculates a dog's age based on input.", 'Focused on simple UI, validation, and user-friendly output.'] },
    { id: 'frog-jumping', name: 'Frog Jumping', tagline: 'Arcade-style browser game where a frog jumps across platforms.', stack: ['HTML', 'CSS', 'JavaScript'], dates: '2023', featured: true, links: { demo: 'https://vaibhavagarwal04.github.io/frog_jumping/', repo: 'https://github.com/vaibhavagarwal04/frog_jumping' }, bullets: ['Built a small browser game with vanilla JavaScript and canvas/DOM for animations.', 'Focused on game mechanics, collision detection, and responsive controls for desktop/browser.'] },
  ],
  skills: { languages: ['C++', 'JavaScript', 'SQL'], coreSubjects: ['Data Structures & Algorithms', 'Operating Systems', 'DBMS', 'OOP'], frameworksAndLibraries: ['React.js', 'Next.js', 'Express.js', 'Tailwind CSS'], databaseAndBackend: ['Supabase', 'MongoDB'], developerTools: ['Git', 'Linux', 'VS Code'], softSkills: ['Public Speaking', 'Team Management'] },
  achievements: [ { title: 'Competitive Programming Ratings', dates: '2023 – Present', subtitle: 'CodeChef, LeetCode & Codeforces Online', bullets: ['Achieved a LeetCode rating of 1518, demonstrating consistent participation and problem-solving skills in rated contests.', 'Achieved a CodeChef rating of 1482 with 2 star, demonstrating consistent participation and problem-solving skills in rated contests.'] } ],
}
