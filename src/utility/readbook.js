const getStoredReadBooks = () =>{
    const storedReadBook = localStorage.getItem('read-book');
    if(storedReadBook){
        return JSON.parse(storedReadBook)
    }
    return []
}

const saveReadBooks = id =>{
    const storedReadBooks = getStoredReadBooks()
    const exixt = storedReadBooks.find(bookId=> bookId === id)
    if(!exixt){
        storedReadBooks.push(id)
        localStorage.setItem('read-book', JSON.stringify(storedReadBooks))
    }
}

export {getStoredReadBooks , saveReadBooks}