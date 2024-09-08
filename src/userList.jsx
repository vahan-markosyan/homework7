import { useContext } from "react"
import { UserContext } from "./context"
import Types from "prop-types"

export const UserList = () => {
    const{users, onRemove} = useContext(UserContext)
    console.log(users)

    return<div>
        <h3>UserList</h3>
        <table>
            <thead>

                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Age</th>
                    <th>Login</th>
                    <th>Actions</th>
                </tr>

            </thead>

            <tbody>

                {
                    users.map((user) =>
                        <tr key={user.id}>

                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.surname}</td>
                            <td>{user.age}</td>
                            <td>{user.login}</td>
                            <td>
                                <button onClick={() => onRemove(user.id)}>Delete</button>
                            </td>

                        </tr>
                    )
                }
            </tbody>

        </table>

    </div>
}

UserList.propTypes = {
    name:Types.string,
    surname:Types.string,
    age:Types.number,
    login:Types.string,
    password:Types.string
}