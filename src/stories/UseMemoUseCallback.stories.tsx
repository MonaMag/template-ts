import React, {useCallback, useMemo, useState} from "react";

export default {
    title: 'useMemo'
}
const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}


export const DifficultCountingExample = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);

    let resultA = 3;
    let resultB = 3;

    resultA = useMemo( () => {
        let tempResultA = 1;
        for(let i=1; i<= a; i++){
            let fake = 0;
            while(fake < 100000000){
                fake++;
                const fakeValue =  Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a]);

    for(let i=1; i<= b; i++){
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(Number(e.currentTarget.value))}/>
        <hr/>
        <div>
            Result a: {resultA}
        </div>
        <div>
            Result b: {resultB}
        </div>

    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret')
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)




export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem', 'Katya']);

    const newArray = useMemo ( () => {
       const newArray = users.filter(u => u.toLowerCase().indexOf('a') > -1);
       return newArray;
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}




type BookSecretType = {
    //books: Array<string>
    addBook: () => void
}

const BooksSecret = (props: BookSecretType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}>add book</button>
    </div>
}

const Book = React.memo(BooksSecret)


export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0);
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML']);


    const memoizedAddBook = useMemo( () => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks);
        }
    }, [books])


    const memoizedAddBook2 = useCallback( () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks);
    }, [books])



    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Book  addBook={memoizedAddBook}/>
    </>
}

