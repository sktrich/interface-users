import { useEffect, useState, useRef } from "react";
import "./styles.css";
import Trash from "../../assets/excluir.png";
import api from "../../services/api"

function Home() {
  const [users, setUsers] = useState([]);

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()
  
function limpaInputs(){
   inputName.current.value = '',
   inputAge.current.value = '',
   inputEmail.current.value = ''
}

  async function getUsers() {
    const usersFromApi = await api.get('/users') 

    setUsers(usersFromApi.data)
  }

  async function createUsers() {
    await api.post('/users', {
      name: inputName.current.value,
      age: parseInt(inputAge.current.value,10),
      email: inputEmail.current.value
    }) 

    getUsers()
    limpaInputs()
  }

  async function deleteUsers(id) {
    await api.delete(`/users/${id}`)

    getUsers()
  }
  
  useEffect(() => {
    getUsers()
  },[])

  return (
    <>
      <div className="container">
        <form action="">
          <h1>Cadastro de Usuários</h1>
          <input placeholder="Nome" name="nome" type="text" ref={inputName}/>
          <input placeholder="Idade" name="idade" type="number" ref={inputAge}/>
          <input placeholder="Email" name="email" type="email" ref={inputEmail}/>
          <button type="button" onClick={createUsers}>Cadastrar</button>
        </form>

        {users.map((user) => (
          <div key={user.id} className="card">
            <div>
              <p>
                Nome: <span>{user.name}</span>
              </p>
              <p>
                Idade: <span>{user.age} </span>
              </p>
              <p>
                Email: <span>{user.email}</span>
              </p>
            </div>
            <button onClick={() => deleteUsers(user.id)}>
              <img src={Trash} alt="Lixeira" width="20" height="20" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
