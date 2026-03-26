import type { Project } from '@/types'

export const projects: Project[] = [
    {
        id: '1',
        title: 'Cartelería e identidad visual',
        category: 'Diseño, publicidad',
        description: 'Conocimientos y experiencia en el mundo de la creación de identidades y elementos gráficos asociados a marcas o campañas.',
        highlight: 'Estos son algunos de mis mejores trabajos:',
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
        id: 'pam26',
        title: 'PAM!26',
        category: 'Proyecto',
        description: 'Participación en el concurso de la identidad visual de la Muestra de Producciones Artísticas y Multimedia de la UPV (PAM).\n\nEste trabajo fue realizado junto con las compañeras Lucia Li Miralles, Maria José Pineda y Jiayi Li.\nNuestro proyecto fue preseleccionado, pero no resultó elegido',
        longDescription: '',
        image: '',
        technologies: [],
        date: ''
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
