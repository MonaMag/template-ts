import React, {useState} from "react";

export default {
    title: 'React.memo demo'
}


const Counter = (props: { count: number}) => {
    return <div>{props.count}</div>
}


/*type UsersType = { user: Array<string>}*/

const UsersSecret = (props: { users: Array<string> }) => {
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Example = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(['Dima', 'Valera', 'Artem', 'Katya']);

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers);
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <Counter count={counter}/>
        <Users users={users}/>
    </>
}