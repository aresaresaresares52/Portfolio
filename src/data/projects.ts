import type { Project } from '@/types'

export const projects: Project[] = [
    {
        id: '1',
        title: 'Cartelería e identidad visual',
        category: 'Diseño, publicidad',
        description: 'Conocimientos y experiencia en el mundo de la creación de identidades y elementos gráficos asociados a marcas o campañas',
        longDescription: '',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        technologies: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL'],
        date: 'Enero 2024'
    },
    {
        id: '2',
        title: 'Fotografía y edición',
        category: 'Fotografía',
        description: 'Versatilidad en todo tipo de fotografías: bodegones, sets en plató, iluminación, artística, retratos, de producto etc',
        longDescription: '',
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19251a68?q=80&w=1000&auto=format&fit=crop',
        technologies: ['Illustrator', 'Figma', 'Photoshop'],
        date: 'Marzo 2024'
    },
    {
        id: '3',
        title: 'Programación artística en Processing',
        category: 'Programación',
        description: 'Dominio del lenguaje de programación Processing (una simplificación de JavaScript) para la creación de arte digital y visualizaciones interactivas.',
        longDescription: '',
        image: '',
        technologies: ['React Native', 'Firebase', 'TypeScript'],
        date: 'Junio 2024'
    },
    {
        id: 'all',
        title: 'Ver más proyectos',
        category: 'Explorar',
        description: '',
        longDescription: '',
        image: '',
        technologies: [],
        date: ''
    }
]
