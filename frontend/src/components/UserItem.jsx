function UserItem({item}) {
  return (
    <div className="item">
        <div>
            {new Date(item.createdAt).toLocaleDateString('en-US')}
        </div>
        <h2>{item.text}</h2>
    </div>
  )
}

export default UserItem