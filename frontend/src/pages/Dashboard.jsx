import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import ItemForm from "../components/ItemForm"
import Spinner from "../components/Spinner"
import {getItems} from "../features/items/itemSlice"

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)
  const { items, isLoading, isError, message } = useSelector((state) => state.items)

  useEffect(() => {
    if (isError) {
      navigate('/login')
    }

    if (!user) {
      navigate('/login')
      return
    }

    dispatch(getItems())

  }, [user, navigate, isError, message, dispatch])
  
  if (isLoading) {
    return <Spinner />
  }

  return <>
  <section className="heading">
    <h1>Welcome {user && user.name}</h1>
    <p>Items Dashboard</p>
  </section>

  <ItemForm />
  </>

}

export default Dashboard