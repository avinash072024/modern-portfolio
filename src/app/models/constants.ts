export class Constants {
    public static APP_NAME1: string = 'Avinash';
    public static APP_NAME2: string = ' Marbhal';
    public static APP_NAME_COMBINE: string = this.APP_NAME1 + '-' + this.APP_NAME2;
    public static APP_NAME: string = this.APP_NAME1 + ' ' + this.APP_NAME2;
    public static THEME_KEY: string = (this.APP_NAME_COMBINE + '-' + 'theme').toLowerCase();
    public static SKIN_KEY: string = (this.APP_NAME_COMBINE + '-' + 'skin').toLowerCase();

    // about me
    public static ABOUT_ME: any = {
        firstName: 'avinash',
        lastName: 'marbhal',
        email: 'avinashmarbhal1994@outlook.com',
        contact: '+91 87964 57407',
        whatsapp: 'https://api.whatsapp.com/send?phone=918796457407',
        linkedIn: 'https://www.linkedin.com/in/avinash-marbhal-808646264',
        gitHub: 'https://github.com/avinash072024',
        facebook: '',
        instagram: 'https://www.instagram.com/avinash.marbhal.09',
        location: 'Kolhapur, Maharashtra, India'
    }

    // tech stack
    public static TECH_STACK: any = [
        {
            title: 'Frontend Development',
            skills: [
                { name: 'HTML5', icon: 'fa-brands fa-html5', level: 98, color: '#e34f26' },
                { name: 'CSS3, SCSS, SASS', icon: 'fa-brands fa-css3-alt', level: 98, color: '#264de4' },
                { name: 'JavaScript', icon: 'fa-brands fa-js', level: 90, color: '#f7df1e' },
                { name: 'Angular 14+', icon: 'fa-brands fa-angular', level: 90, color: '#dd0031' },
                { name: 'TypeScript', icon: 'bi bi-typescript', level: 85, color: '#3178c6' },
                { name: 'Bootstrap, Tailwind CSS', icon: 'bi bi-bootstrap-fill', level: 95, color: '#7952b3' },
                { name: 'React, Next.js', icon: 'fa-brands fa-react', level: 70, color: '#61dafb' },
                { name: 'jQuery', icon: 'fa-brands fa-js', level: 80, color: '#0769ad' }
            ]
        },
        {
            title: 'Backend & Database',
            skills: [
                { name: 'Node.js', icon: 'ti ti-brand-nodejs', level: 80, color: '#339933' },
                { name: 'SQL Server', icon: 'bi-database-fill', level: 75, color: '#4479a1' },
                { name: 'MongoDB', icon: 'bi bi-leaf-fill', level: 85, color: '#47a248' }, // Added MongoDB
                { name: 'Firebase', icon: 'ti ti-brand-firebase', level: 70, color: '#ffca28' }
            ]
        },
        {
            title: 'Tools & Design',
            skills: [
                { name: 'VS Code', icon: 'bi bi-code-slash', level: 95, color: '#007acc' },
                { name: 'Figma', icon: 'ti ti-brand-figma', level: 85, color: '#f24e1e' },
                { name: 'Postman', icon: 'bi bi-send-fill', level: 90, color: '#ff6c37' }
            ]
        },
        {
            title: 'Version Control & DevOps',
            skills: [
                { name: 'Git', icon: 'fa-brands fa-git-alt', level: 92, color: '#f05032' },
                { name: 'GitHub', icon: 'fa-brands fa-github', level: 95, color: '#181717' },
                { name: 'GitLab', icon: 'fa-brands fa-gitlab', level: 80, color: '#fc6d26' }
            ]
        },
        {
            title: 'Payment Gateways',
            skills: [
                { name: 'Stripe', icon: 'bi bi-stripe', level: 90, color: '#635bff' },
                { name: 'Razorpay', icon: 'bi bi-credit-card-2-front-fill', level: 85, color: '#0d94fb' },
                { name: 'BillDesk', icon: 'bi bi-wallet2', level: 75, color: '#f58220' }
            ]
        }
    ];

    // my projects
    public static PROJECTS: any = [
        {
            title: 'SageSure – Secure Document Management Portal',
            category: 'Web',
            date: '2022',
            desc: [
                { line1: 'Engineered a robust portal to manage document exchange between SageSure and Laser Print Plus (LPP), offering real-time document tracking. Engineered a robust portal to manage document exchange between SageSure and Laser Print Plus (LPP), offering real-time document tracking.' },
                { line2: 'Implemented role-based access control (RBAC) to improve system security and reduce unauthorized interactions.' },
                { line3: 'Developed comprehensive admin dashboards for managing uploads, deletions, and user actions, increasing operational transparency and reducing turnaround time.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 14', 'TypeScript', 'Bootstrap 5', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: ''
        },
        {
            title: 'HRM Portal for Aptara Corporation',
            category: 'Web',
            date: '2022',
            desc: [
                { line1: 'Automate and manage hiring, document collection, role assignment, and exit procedures.' },
                { line2: 'Real-time tracking of employee attendance, leave applications, approvals, and balance monitoring.' },
                { line3: 'Generate salary slips, manage tax deductions, and process payroll with minimal manual effort.' },
                { line4: 'Allow employees to update profiles, view payslips, apply for leaves, and track attendance.' },
                { line5: 'Gain actionable insights with visual reports and metrics on workforce trends and HR operations.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 14', 'TypeScript', 'Bootstrap 5', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: ''
        },
        {
            title: 'Contract Management Tool',
            category: 'Web',
            date: '2022',
            desc: [
                { line1: 'Contract Creation & Templates: Allows users to generate standardized contracts using preapproved templates.' },
                { line2: 'Approval Workflow: Built-in multi-level approval system with role-based access ensures compliance and transparency.' },
                { line3: 'Document Management: Secure storage and version control of all contract-related documents in a searchable repository.' },
                { line4: 'Notifications & Reminders: Automated alerts for key milestones such as expiry dates, renewals, and review timelines.' },
                { line5: 'Audit Trail: Complete history of contract modifications and actions taken for accountability and governance.' },
                { line6: 'Reports & Dashboards: Real-time insights into contract statuses, pending approvals, and upcoming expirations.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 15', 'TypeScript', 'Bootstrap 5.2', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: ''
        },
        {
            title: 'Sutra Plus - Inventory App',
            category: 'Web',
            date: '2023',
            desc: [
                { line1: 'Real-Time Inventory Tracking: View live stock status across multiple locations to ensure accurate availability.' },
                { line2: 'Item Categorization & Master Management: Centralized control over item classifications, suppliers, and product details.' },
                { line3: 'Procurement Workflow: Streamlined purchase requisition, approval, and goods receipt process.' },
                { line4: 'Stock In/Out Management: Easy logging of stock entries, transfers, and issue returns with audit trails.' },
                { line5: 'Reports & Analytics: Generate insightful reports on inventory movements, valuation, shortages, and reorder levels.' },
                { line6: 'User Access Control: Role-based access to ensure secure and authorized operations.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 15', 'TypeScript', 'Bootstrap 5.2', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: ''
        },
        {
            title: 'Investment Portal',
            category: 'Web',
            date: '2023',
            desc: [
                { line1: 'Investment Proposal Management: Submission, evaluation, and approval workflows for new investment opportunities.' },
                { line2: 'Portfolio Tracking: Real-time monitoring of active investments, including ROI, maturity dates, and performance metrics.' },
                { line3: 'Approval Workflows: Role-based access and multi-level approval systems to ensure governance and accountability.' },
                { line4: 'Dashboards & Reports: Visual insights into investment trends, fund allocations, and overall portfolio performance.' },
                { line5: 'Alerts & Notifications: Automated reminders for maturity, renewals, and key investment milestones.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 15', 'TypeScript', 'Bootstrap 5.2', 'Angular Material', 'RxJS', 'jQuery', 'HTML5', 'SCSS', 'Ag-Grid'],
            link: ''
        },
        {
            title: 'Ticketing Tool',
            category: 'Web',
            date: '2023',
            desc: [
                { line1: 'Ticket Creation & Categorization: Users can log tickets with priority levels, issue types, and attachments for clarity.' },
                { line2: 'Automated Assignment: Smart routing of tickets to appropriate IT personnel or support teams based on issue type and priority.' },
                { line3: 'Real-Time Status Tracking: Transparency into ticket progress, from initiation to resolution, with live updates.' },
                { line4: 'SLA Management: Built-in Service Level Agreements to ensure timely resolution and accountability.' },
                { line5: 'Notifications & Reminders: Email and in-app alerts for updates, escalations, and closures.' },
                { line6: 'Reports & Dashboards: Analytics on ticket volume, response time, resolution efficiency, and team performance.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 15', 'TypeScript', 'Bootstrap 5.2', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: ''
        },
        {
            title: 'Pepper Advantage – Loan & Security Management Platform',
            category: 'Web',
            date: '2024',
            desc: [
                { line1: 'Loan Tracking: Real-time visibility into active and closed loans with EMI schedules, outstanding balances, and repayment history.' },
                { line2: 'Borrower Management: Centralized borrower profiles with associated documentation and financial background.' },
                { line3: 'Delinquency Monitoring: Automated alerts and dashboards to flag overdue payments and high risk accounts.' },
                { line4: 'Collateral Management: Tracks details of physical and financial securities pledged against loans (e.g., property, fixed deposits). ' },
                { line5: 'Document Vault: Secure storage and retrieval of property papers, valuation reports, legal documents, etc.' },
                { line6: 'Verification & Compliance: Workflow to handle legal and technical verification of assets and ensure regulatory compliance.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 16', 'TypeScript', 'Bootstrap 5.3', 'Angular Material', 'RxJS', 'jQuery', 'HTML5', 'SCSS', 'SyncFusion'],
            link: ''
        },
        {
            title: 'Virtual Bench – Resource Pool Management System',
            category: 'Web',
            date: '2024',
            desc: [
                { line1: 'Employee Profiling: Maintain detailed profiles of bench employees including skills, past projects, certifications, and availability.' },
                { line2: 'Project Matching: Intelligent matching of available resources with upcoming or open project requirements.' },
                { line3: 'Allocation Workflow: Streamlined process for initiating, approving, and tracking internal resource deployments.' },
                { line4: 'Status Dashboard: Live insights into resource bench count, deployment history, and utilization trends.' },
                { line5: 'Notifications & Alerts: Automated updates for new allocations, availability changes, and skill match opportunities.' },
                { line6: 'Reports & Analytics: Insights for HR and project managers on resource movement, idle time, and workforce planning.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 16', 'TypeScript', 'Bootstrap 5.3', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: ''
        },
        {
            title: 'Mahalaxmi Website',
            category: 'Web',
            date: '2025',
            desc: [
                { line1: 'Designed and developed responsive layouts using modern HTML, CSS, and Angular techniques.' },
                { line2: 'Implemented smooth UI animations for better user experience.' },
                { line3: 'Integrated BillDesk payment gateway for secure and reliable payment processing.' },
                { line4: 'Ensured cross-browser compatibility and optimized performance across devices.' }
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 19', 'TypeScript', 'Bootstrap 5.3', 'RxJS', 'jQuery', 'HTML5', 'SCSS'],
            link: 'https://mahalaxmikolhapur.com/home'
        },
        {
            title: 'Lifeline Suite (Government & Corporate)',
            category: 'Web',
            date: 'Current',
            desc: [
                { line1: 'A robust hospital solution with modules designed to streamline clinical, administrative, and operational workflows across hospital ' },
                { line2: 'Contributed to modules such as Patient Admission, Clinical Services, EMR, Diagnostics, Pharmacy, Inventory.' },
                { line3: 'Involved in implementing new features and addressing reported system bugs.' },
            ],
            image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800',
            tools: ['Angular 14', 'TypeScript', 'Bootstrap', 'RxJS', 'jQuery', 'HTML5', 'SCSS', 'HTML5', 'SCSS'],
            link: ''
        },
    ]
}
