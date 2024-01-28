import { DisciplineType } from '../types/enums/DisciplineType';
import { Project } from '../types/models/Project';


export const getProjectsData = (category: DisciplineType) => {
  let data;

  const projectsData = {
    [DisciplineType.All]: () => {
      return {
        ...projectsData[DisciplineType.Frontend](),
        ...projectsData[DisciplineType.UIUX](),
        ...projectsData[DisciplineType.Graphic](),
      }
    },
    [DisciplineType.Frontend]: () => {
      return {
        projects: [
          {
            overview: {
              id: "frontend-1",
              discipline: DisciplineType.Frontend,
              title: "Frontend Project 1",
              keywords: "React Native, Firebase",
              timeline: '1 weeks',
              role: 'Frontend developer, UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'frontend project 1 description',
              link: '/works/frontend-development/project-1',
            },
            livesite: 'https://seojeongkim.com',
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: ['Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          },
          {
            overview: {
              id: "frontend-2",
              discipline: DisciplineType.Frontend,
              title: "Frontend Project 2",
              keywords: "MERN, TypeScript",
              timeline: '2 weeks',
              role: 'Frontend developer, UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'frontend project 2 description',
              link: '/works/frontend-development/project-2',
            },
            livesite: 'https://seojeongkim.com',
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-5',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          },
          {
            overview: {
              id: "frontend-3",
              discipline: DisciplineType.Frontend,
              title: "Frontend Project 3",
              keywords: "JavaScript, Tailwind CSS",
              timeline: '3 weeks',
              role: 'Frontend developer, UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'frontend project 3 description',
              link: '/works/frontend-development/project-3',
            },
            livesite: 'https://seojeongkim.com',
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-5',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          },
          {
            overview: {
              id: "frontend-4",
              discipline: DisciplineType.Frontend,
              title: "Frontend Project 4",
              keywords: "JavaScript, Tailwind CSS",
              timeline: '4 weeks',
              role: 'Frontend developer, UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'frontend project 4 description',
              link: '/works/frontend-development/project-4',
            },
            livesite: 'https://seojeongkim.com',
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-5',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          }
        ]
      } as Project
    },
    [DisciplineType.UIUX]: () => {
      return {
        projects: [
          {
            overview: {
              id: "uiux-1",
              discipline: DisciplineType.UIUX,
              title: "UIUX Project 1",
              keywords: "React Native, Firebase",
              timeline: '1 weeks',
              role: 'UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'UIUX project 1 description',
              link: '/works/uiux-design/project-1',
            },
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: ['Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          },
          {
            overview: {
              id: "uiux-2",
              discipline: DisciplineType.UIUX,
              title: "UIUX Project 2",
              keywords: "MERN, TypeScript",
              timeline: '2 weeks',
              role: 'UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'UIUX project 2 description',
              link: '/works/uiux-design/project-2',
            },
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-5',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          },
          {
            overview: {
              id: "uiux-3",
              discipline: DisciplineType.UIUX,
              title: "UIUX Project 3",
              keywords: "JavaScript, Tailwind CSS",
              timeline: '3 weeks',
              role: 'UIUX designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'UIUX project 3 description',
              link: '/works/uiux-design/project-3',
            },
            link: 'https://github.com',
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-4',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-5',
                title: 'sectionTitle 4',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          }
        ]
      } as Project
    },
    [DisciplineType.Graphic]: () => {
      return {
        projects: [
          {
            overview: {
              id: "graphic-1",
              discipline: DisciplineType.Graphic,
              title: "Graphic Project 1",
              keywords: "React Native, Firebase",
              timeline: '1 weeks',
              role: 'Graphic designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'Graphic project 1 description',
              link: '/works/graphic-design/project-1',
            },
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: ['Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.', 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit.'],
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-3',
                title: 'sectionTitle 3',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          },
          {
            overview: {
              id: "graphic-2",
              discipline: DisciplineType.Graphic,
              title: "Graphic Project 2",
              keywords: "MERN, TypeScript",
              timeline: '2 weeks',
              role: 'Graphic designer',
              tech: 'React Native, Expo, Styled Components',
              description: 'Graphic project 2 description',
              link: '/works/graphic-design/project-2',
            },
            sections: [
              {
                id: 'section-1',
                title: 'sectionTitle 1',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              },
              {
                id: 'section-2',
                title: 'sectionTitle 2',
                content: 'Jenny (Seojeong) Kim develops and designs the digital products that create visual experiences Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
                image: '',
              }
            ]
          }
        ]
      } as Project
    },
    [DisciplineType.None]: () => {
      return {
        projects: [
          {
            overview: {
              id: '',
              discipline: DisciplineType.None,
              title: "",
              keywords: "",
              timeline: '',
              role: '',
              tech: '',
              description: '',
              link: '',
            },
            livesite: '',
            link: '',
            sections: [
              {
                id: '',
                title: '',
                content: [''],
                image: '',
              }
            ]
          }
        ]
      } as Project
    } 
  }

  if(projectsData[category]){
    data = projectsData[category];
  } else {
    data = projectsData[DisciplineType.None];
  }

  return data();
}
