import { ref } from 'vue'
import { projects } from '@/data/projects'

export function useProjects() {
    const allProjects = ref(projects)

    const getProjectById = (id: string | string[]) => {
        const projectId = Array.isArray(id) ? id[0] : id
        return allProjects.value.find(p => p.id === projectId)
    }

    return {
        allProjects,
        getProjectById
    }
}
