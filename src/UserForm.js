function UserForm(props) {
    const handleChange = (event) => {
      props.setName(event.target.value);
    };
  
    return (
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" onChange={handleChange} />
      </div>
    );
  }
  
  export default UserForm;
  