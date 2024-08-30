import { useUsers } from "../hooks/useUsers"
import { UserRow } from "./UserRow"

export const UsersPage = () => {
  const { users, prevPage, nextPage } = useUsers()

  return (
    <>
      <h3>Usuarios:</h3>
      <table>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>

      <div>
        <button type="button" onClick={prevPage}>Anterior</button>
        <button type="button" onClick={nextPage}>Siguiente</button>
      </div>
    </>
  )
}