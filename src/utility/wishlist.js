const getStoredWishBooks = () =>{
    const storedWishBook = localStorage.getItem('wish-book');
    if(storedWishBook){
        return JSON.parse(storedWishBook)
    }
    return []
}

const saveWishBooks = id =>{
    const storedWishBooks = getStoredWishBooks()
    const exixt = storedWishBooks.find(bookId=> bookId === id)
    if(!exixt){
        storedWishBooks.push(id)
        localStorage.setItem('wish-book', JSON.stringify(storedWishBooks))
    }
}

export {getStoredWishBooks , saveWishBooks}