'use strict'
 
const showCourse = async () => {
    const url = 'http://localhost:8080/curso'
    const response = await fetch(url)

    const listaCurso = await response.json()
    return listaCurso
}

export {
    showCourse
}