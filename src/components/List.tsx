function List() {
  const namesArr = ["1: Atheism is rational?", "2: Why Islam?", "3: Why Ahle Sunnat?"];

  return (
    <>
      <h1>Questions:</h1>
      <ul className="list-group">
        {namesArr.map((name) => (
          <li className="list-group-item">{name}</li>
        ))}
      </ul>
    </>
  );
}

export default List;
