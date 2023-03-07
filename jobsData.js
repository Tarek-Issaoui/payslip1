



 /* this is yassin's work*/

const jobs = [
    { jobTitle: 'Software Engineer', averageSalary: 3500,jobDiscription: "A Software Engineer is an IT professional who designs, develops and maintains computer software at a company. They use their creativity and technical skills and apply the principles of software engineering to help solve new and ongoing problems for an organization."},
    { jobTitle: 'Product Manager', averageSalary: 2165 , jobDiscription: "A Product Manager is the person who identifies customer needs and more prominent business objectives for a particular project, articulates what success looks like in this case study and rallies team members to help turn that vision into reality." }, 
    { jobTitle: 'Data Analyst', averageSalary: 4653,jobDiscription: "Data analysts gather and scrutinise data using specialist tools to generate information that helps others make decisions. They will respond to questions about data and look for trends, patterns and anomalies within it."  },
    { jobTitle: 'Marketing Manager', averageSalary: 2954, jobDiscription:"Marketing Managers are responsible for developing, implementing and executing strategic marketing plans for an entire organization (or lines of business and brands within an organization) in order to attract potential customers and retain existing ones." },
    { jobTitle: 'Graphic Designer', averageSalary: 2600,jobDiscription:"Graphic designers create visual text and imagery concepts, by hand or using computer software, to communicate ideas that inspire, inform, or captivate consumers. They develop the overall layout and production design for advertisements, brochures, magazines, and corporate reports, etc."  },
    { jobTitle: 'Sales Representative', averageSalary:2000 ,jobDiscription: "The Sales Representative is responsible for selling products and meeting customer needs while obtaining orders from existing or potential sales outlets. They ensure that the customer is satisfied and adequately taken care of while making a purchase. This way, they can establish new accounts for their employer." },
    { jobTitle: 'Project Manager', averageSalary: 4000,jobDiscription:"A project manager is responsible for planning and overseeing projects within an organisation, from the initial ideation through to completion. They coordinate people and processes to deliver projects on time, within budget and with the desired outcomes aligned to objectives." },
    { jobTitle: 'Human Resources Manager', averageSalary: 3956,jobDiscription:"The Human Resource Manager will lead and direct the routine functions of the Human Resources (HR) department including hiring and interviewing staff, administering pay, benefits, and leave, and enforcing company policies and practices."  },
    { jobTitle: 'Accountant', averageSalary: 1958 ,jobDiscription:"An Accountant helps businesses make critical financial decisions by collecting, tracking, and correcting the company's finances. They are responsible for financial audits, reconciling bank statements, and ensuring financial records are accurate throughout the year." },
    { jobTitle: 'UX Designer', averageSalary: 3864 ,jobDiscription:"UX designers turn applications into something that people like and want to use. UX (user experience) designers measure and optimise applications (usually web based) to improve ease of use (usability), and create the best user experience by exploring many different approaches to solve end-users' problems." },
    { jobTitle: 'Business Analyst', averageSalary: 2650 ,jobDiscription:"Business analysts assess how organisations are performing and help them improve their processes and systems. They conduct research and analysis in order to come up with solutions to business problems and help to introduce these solutions to businesses and their clients." },
    { jobTitle: 'Web Developer', averageSalary: 2800 ,jobDiscription:"A web developer makes and maintains websites. They are in charge of a site's overall look and feel. Web developers also handle the technical aspects of a website, including its performance (website speed) and capacity (the maximum amount of traffic the site could handle at a given time)." },
    { jobTitle: 'Operations Manager', averageSalary: 4000 ,jobDiscription:"Operations Managers oversee operational activities at every level of an organization. Their duties include hiring and training employees and managing quality assurance programs. An operations manager also strategizes process improvements to ensure everyone completes their tasks on schedule." },
    { jobTitle: 'Financial Analyst', averageSalary: 2561 ,jobDiscription:"Analyze current and past financial data and performance. Prepare reports and projections based on analysis. Evaluate current capital expenditures and depreciation. Explore investment opportunities. Establish and evaluate profit plans." },
    { jobTitle: 'Customer Service Representative', averageSalary: 2100 ,jobDiscription:"A customer service representative supports customers by providing helpful information, answering questions, and responding to complaints. They're the front line of support for clients and customers and they help ensure that customers are satisfied with products, services, and features." },
    { jobTitle: 'IT Manager', averageSalary: 4589 ,jobDiscription:"An IT Manager is a professional who ensures that all employees have the technology they need to get their job done, from a reliable laptop and VPN access for remote workers who can't be reached otherwise, to up-close coordination with other departments like HR or finance so data is secure." },
    { jobTitle: 'Network Administrator', averageSalary: 3576,jobDiscription: "Network administrators are responsible for maintaining computer networks and solving any problems that may occur with them. Typical responsibilities of the job include: installing and configuring computer networks and systems. identifying and solving any problems that arise with computer networks and systems."},
    { jobTitle: 'Content Writer', averageSalary: 1521,jobDiscription: "A Content Writer is a professional who writes informative and engaging articles to help brands showcase their products. They write on a range of subjects and are responsible for creating the best possible written or visual content, from blog posts to press releases." },
    { jobTitle: 'Art Director', averageSalary: 2000 ,jobDiscription: "An Art Director is a professional who is in charge of developing and maintaining a creative vision that speaks to the reader, viewer, or user. To accomplish this, they manage teams of designers who work on creative projects such as film and television advertising, graphic design, and marketing."},
    { jobTitle: 'Mechanical Engineer', averageSalary: 3600 ,jobDiscription:"Mechanical engineers research, design, develop, build, and test mechanical and thermal sensors and devices, including tools, engines, and machines." },
    { jobTitle: 'Social Media Manager', averageSalary: 2300 ,jobDiscription:"A Social Media Manager is responsible for overseeing a company's interactions with the public by implementing social media platforms' content strategies. Their duties include analyzing engagement data, identifying trends in customer interactions and planning digital campaigns to build community online." },
    { jobTitle: 'Executive Assistant', averageSalary: 1800 ,jobDiscription:"An Executive Assistant is a professional responsible for managing the schedules and communications of key executives in their company. They prioritize emails and phone calls and arrange meetings and business events." },
    { jobTitle: 'Technical Writer', averageSalary: 1625 ,jobDiscription:"A Technical Writer is a professional responsible for creating documentation that clarifies the product's features and benefits. They work on requirements like content strategy or scoping out new products to ensure all necessary information has been included for users to understand what they're reading quickly." },
    { jobTitle: 'Software Developer', averageSalary: 2200 ,jobDiscription:"Researching, designing, implementing, and managing software programs. Testing and evaluating new programs. Identifying areas for modification in existing programs and subsequently developing these modifications. Writing and implementing efficient code." },
    { jobTitle: 'Account Manager', averageSalary: 2500 ,jobDiscription:"An Account Manager is in charge of making sure each department meets the needs of their clients and customers. They handle customer complaints, find solutions to their issues, and maintain a positive relationship between both parties for future business ventures." },
    { jobTitle: 'Data Scientist', averageSalary: 5255 ,jobDiscription:"A data scientist turns raw data into valuable insights that an organisation needs in order to grow and compete. They interpret and analyse data from multiple sources to come up with imaginative solutions to problems." },
    { jobTitle: 'Digital Marketing Manager', averageSalary: 3800 ,jobDiscription:"Digital Marketing Managers are generally responsible for planning, developing, implementing and managing the overall digital marketing strategy. In addition, they are responsible for managing, guiding and training digital marketers and other marketing positions in the team." },
    { jobTitle: 'IT Support Specialist', averageSalary:2600 ,jobDiscription:"The Information Technology Support Specialist performs analytical, technical, and administrative work in the planning and installation of new and existing personal devices and workstations; diagnoses and resolves problems in response to customer reported incidents; confers with end users to determine types of hardware ..." },
    { jobTitle: 'Business Development Manager', averageSalary: 3400 ,jobDiscription:"Business development managers are responsible for driving business growth within a company. They develop a network of contacts to attract new clients, research new market opportunities and oversee growth projects, making sales projections and forecasting revenue, in line with projected income." },
    { jobTitle: 'Artificial Intelligence Engineer', averageSalary: 5864 ,jobDiscription:"The Artificial Intelligence Engineer is an IT expert whose mission is to develop intelligent algorithms capable of learning, analysing and predicting future events. Their role is to create machines capable of reasoning like the human brain." },
  ];
  
 /* this is yassin's work*/

  const jobRoles = [
    {
      role: "Software Engineer",
      requirements: [
        "Programming languages",
        "Problem-solving",
        "Attention to detail",
        "Teamwork",
        "Continuous learning"
      ]
    },
    {
      role: "Product Manager",
      requirements: [
        "Product development",
        "Market research",
        "Project management",
        "Communication",
        "Strategic thinking"
      ]
    },
    {
      role: "Data Analyst",
      requirements: [
        "Data analysis",
        "Database management",
        "Statistics",
        "Critical thinking",
        "Communication"
      ]
    },
    {
      role: "Marketing Manager",
      requirements: [
        "Marketing strategy",
        "Market research",
        "Communication",
        "Creativity",
        "Project management"
      ]
    },
    {
      role: "Graphic Designer",
      requirements: [
        "Graphic design software",
        "Visual communication",
        "Typography",
        "Creative thinking",
        "Attention to detail"
      ]
    },
    {
      role: "Sales Representative",
      requirements: [
        "Sales techniques",
        "Communication",
        "Negotiation",
        "Interpersonal skills",
        "Product knowledge"
      ]
    },
    {
      role: "Project Manager",
      requirements: [
        "Leadership",
        "Communication",
        "Planning and organization",
        "Problem-solving",
        "Risk management"
      ]
    },
    {
      role: "Human Resources Manager",
      requirements: [
        "Recruitment and talent management",
        "Employee relations",
        "Employment law",
        "Training and development",
        "Strategic thinking"
      ]
    },
    {
      role: "Accountant",
      requirements: [
        "Accounting knowledge",
        "Attention to detail",
        "Analytical skills",
        "Communication",
        "Technology skills"
      ]
    }
      ,
      {
        role: "UX Designer",
        requirements: [
          "User research",
          "Information architecture",
          "Wireframing and prototyping",
          "Usability testing",
          "Visual design"
        ]
      },
      {
        role: "Business Analyst",
        requirements: [
          "Business analysis",
          "Requirements gathering",
          "Data analysis",
          "Problem-solving",
          "Communication"
        ]
      },
      {
        role: "Web Developer",
        requirements: [
          "Web development languages",
          "Front-end and back-end development",
          "Web design principles",
          "Problem-solving",
          "Continuous learning"
        ]
      },
      {
        role: "Operations Manager",
        requirements: [
          "Operations management",
          "Project management",
          "Supply chain management",
          "Leadership",
          "Communication"
        ]
      },
      {    role: "Financial Analyst",    requirements: [      "Financial analysis",      "Accounting",      "Financial modeling",      "Data analysis",      "Critical thinking"    ]
    },
    {
    role: "Customer Service Representative",
    requirements: [
      "Customer service",
      "Communication",
      "Problem-solving",
      "Interpersonal skills",
      "Attention to detail"
    ]
    },
    {
    role: "IT Manager",
    requirements: [
      "Information technology",
      "Project management",
      "Leadership",
      "Communication",
      "Problem-solving"
    ]
    },
    {    role: "Network Administrator",    requirements: [      "Network administration",      "Security protocols",      "Technical troubleshooting",      "Hardware knowledge",      "Software knowledge"    ]
    },
    {
      role: "Content Writer",
      requirements: [
        "Writing",
        "Editing",
        "Research",
        "SEO knowledge",
        "Social media management"
      ]
    },
    {
      role: "Art Director",
      requirements: [
        "Graphic design",
        "Artistic ability",
        "Leadership",
        "Creative thinking",
        "Attention to detail"
      ]
    },
    {
      role: "Mechanical Engineer",
      requirements: [
        "Mechanical engineering",
        "Physics",
        "Mathematics",
        "Problem-solving",
        "Design skills"
      ]
    },
    {
      role: "Social Media Manager",
      requirements: [
        "Social media strategy",
        "Content creation",
        "Analytics",
        "Marketing knowledge",
        "Communication"
      ]
    },
    {
      role: "Executive Assistant",
      requirements: [
        "Administrative support",
        "Organizational skills",
        "Time management",
        "Communication",
        "Attention to detail"
      ]
    },
    {
      role: "Technical Writer",
      requirements: [
        "Technical writing",
        "Editing",
        "Research",
        "Attention to detail",
        "Subject matter expertise"
      ]
    },
    {
      role: "Software Developer",
      requirements: [
        "Programming languages",
        "Problem-solving",
        "Attention to detail",
        "Teamwork",
        "Continuous learning"
      ]
    },
    {    role: "Account Manager",    requirements: [      "Customer relationship management",      "Sales skills",      "Communication",      "Negotiation",      "Organizational skills"    ]
    },
    {
    role: "Data Scientist",
    requirements: [
      "Data analysis",
      "Machine learning",
      "Programming languages",
      "Statistics",
      "Critical thinking"
    ]
    },
    {
    role: "Digital Marketing Manager",
    requirements: [
      "Digital marketing",
      "Marketing strategy",
      "Social media management",
      "SEO knowledge",
      "Analytics"
    ]
    },
    {
    role: "IT Support Specialist",
    requirements: [
      "Technical support",
      "Hardware knowledge",
      "Software knowledge",
      "Troubleshooting",
      "Communication"
    ]
    },
    {
    role: "Business Development Manager",
    requirements: [
      "Sales",
      "Negotiation",
      "Communication",
      "Strategic thinking",
      "Networking"
    ]
    },
    {
    role: "Artificial Intelligence Engineer",
    requirements: [
      "Machine learning",
      "Programming languages",
      "Data analysis",
      "Algorithm development",
      "Problem-solving"
    ]
    } 
    ]
    