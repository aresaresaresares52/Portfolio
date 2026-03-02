import type { Project } from '@/types'

export const projects: Project[] = [
    {
        id: '1',
        title: 'Cartelería e identidad visual',
        category: 'Diseño, publicidad',
        description: 'Conocimientos y experiencia en el mundo de la creación de identidades y elementos gráficos asociados a marcas o campañas',
        longDescription: 'Este proyecto consistió en el desarrollo integral de una tienda online, enfocada en la experiencia de usuario y el rendimiento. Se utilizó Vue 3 para el frontend y Node.js para el backend.',
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop',
        technologies: ['Vue 3', 'TypeScript', 'Node.js', 'PostgreSQL'],
        date: 'Enero 2024'
    },
    {
        id: '2',
        title: 'Fotografía y edición',
        category: 'Fotografía',
        description: 'Versatilidad en todo tipo de fotografías: bodegones, sets en plató, iluminación, artística, retratos, etc',
        longDescription: 'Creación de logotipo, paleta de colores y manual de marca para una empresa emergente en el sector de la inteligencia artificial. El objetivo era transmitir innovación y confianza.',
        image: 'https://images.unsplash.com/photo-1522542550221-31fd19251a68?q=80&w=1000&auto=format&fit=crop',
        technologies: ['Illustrator', 'Figma', 'Photoshop'],
        date: 'Marzo 2024'
    },
    {
        id: '3',
        title: 'Programación artística en Processing',
        category: 'Programación',
        description: 'Dominio del lenguaje de programación Processing (una simplificación de JavaScript) para la creación de arte digital y visualizaciones interactivas.',
        longDescription: 'Diseño y desarrollo de una app móvil que permite a los usuarios registrar su actividad física, dieta y horas de sueño. Incluye visualizaciones de datos y recordatorios personalizados.',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop',
        technologies: ['React Native', 'Firebase', 'TypeScript'],
        date: 'Junio 2024'
    }
]
