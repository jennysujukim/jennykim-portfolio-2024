import { DisciplineType } from '../types/enums/DisciplineType';
import { Projects } from '../types/models/Projects';

export const getProjectsData = () => {
  return {
    projects: [
      {
        overview: {
          id: "work-1",
          discipline: [ DisciplineType.Frontend ],
          type: "Client Work",
          title: "Headless CMS Website",
          keywords: "Wordpress, Next.js",
          timeline: '3 months',
          role: 'Frontend developer',
          tools: "Wordpress, Next.js, TypeScript, TailwindCSS, GraphQL, Apollo",
          description: 'Building and optimizing a headless CMS service using Wordpress and Next.js for a client.',
          link: '/work/sadie-lee-cms-service',
        },
        livesite: 'https://seojeongkim.com',
        repoLink: 'https://github.com',
        content: {
          firstSections: [
            {
              id: 'section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 2',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      },
      {
        overview: {
          id: "work-2",
          discipline: [ DisciplineType.Frontend ],
          type: "Company Work @PhoneBox",
          title: "Partner Portal Mobile App",
          keywords: "React Native, Expo",
          timeline: '3 months',
          role: 'Frontend developer',
          tools: "React Native, Expo, TypeScript, Redux",
          description: 'frontend project 2 description.',
          link: '/work/phonebox-partner-portal-app',
        },
        content: {
          firstSections: [
            {
              id: 'section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      },
      {
        overview: {
          id: "work-3",
          discipline: [ DisciplineType.Frontend, DisciplineType.UIUX ],
          type: "Personal Work",
          title: "Daily Protein Tracker Web App",
          keywords: "MERN, TypeScript",
          timeline: '3 weeks',
          role: 'Frontend developer, UIUX designer, Visual designer',
          tools: "MongoDB, Express.js, React.js, Node.js, TypeScript, SCSS, Firebase",
          description: 'work 3 description.',
          link: '/work/daily-protein',
        },
        livesite: "https://seojeongkim.com/daily-protein",
        repoLink: 'https://github.com',
        prototypeLink: 'https://www.figma.com',
        content: {
          firstSections: [
            {
              id: 'first-section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 2',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'first-section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 2',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ],
          secondSections: [
            {
              id: 'second-section-1',
              title: 'sectionTitle 3',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'second-section-2',
              title: 'sectionTitle 4',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      },
      { 
        overview: {
          id: "work-4",
          discipline: [ DisciplineType.Frontend, DisciplineType.UIUX ],
          type: "Personal Work",
          title: "Typography Website",
          keywords: "HTML, CSS, JavaScript",
          timeline: '2 weeks',
          role: "Frontend developer, UIUX designer",
          tools: "HTML, CSS, JavaScript",
          description: 'work 4 description.',
          link: '/work/typography-website',
        },
        livesite: "https://seojeongkim.com/typography-website",
        repoLink: 'https://github.com',
        prototypeLink: 'https://www.figma.com',
        content: {
          firstSections: [
            {
              id: 'first-section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'first-section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ],
          secondSections: [
            {
              id: 'second-section-1',
              title: 'sectionTitle 3',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'second-section-2',
              title: 'sectionTitle 4',
              image: '',
              paragraphs: [
                {
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      },
      { 
        overview: {
          id: "work-5",
          discipline: [ DisciplineType.UIUX ],
          type: "Personal Work",
          title: "Habit Tracker App",
          keywords: "Figma, Adobe Illustrator",
          timeline: '2 weeks',
          role: "Product Designer, UIUX Designer",
          tools: "Figma, Adobe Illustrator",
          description: 'work 5 description.',
          link: '/work/work-5',
        },
        prototypeLink: 'https://www.figma.com',
        content: {
          firstSections: [
            {
              id: 'first-section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'first-section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      },
      { 
        overview: {
          id: "work-6",
          discipline: [ DisciplineType.Graphic ],
          type: "Company Work @X NIHILO",
          title: "Brand Identity Design",
          keywords: "Content Creation, Graphic Design, Digital Marketing",
          timeline: '1 year',
          role: "Digital Marketer, Content Creator, Graphic Designer",
          tools: "Photoshop, Shopify, OmniSend",
          description: 'work 6 description.',
          link: '/work/x-nihilo',
        },
        livesite: 'https://seojeongkim.com',
        content: {
          firstSections: [
            {
              id: 'first-section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'first-section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      },
      { 
        overview: {
          id: "work-7",
          discipline: [ DisciplineType.Graphic ],
          type: "Client Work @PAR BAR",
          title: "Logo ideation and design",
          keywords: "Logo design, graphic design",
          timeline: '3 weeks',
          role: "Logo Designer",
          tools: "Photoshop, Illustrator",
          description: 'work 7 description.',
          link: '/work/par-bar',
        },
        content: {
          firstSections: [
            {
              id: 'first-section-1',
              title: 'sectionTitle 1',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            },
            {
              id: 'first-section-2',
              title: 'sectionTitle 2',
              image: '',
              paragraphs: [
                {
                  subtitle: 'subtitle 1',
                  text: [ 'Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' ]
                },
                {
                  text: [ 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.' ]
                }
              ],
            }
          ]
        }
      }
    ]
  } as Projects
}