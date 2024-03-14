const Resultados = props => {
    const { firstname, lastname, email, password, confirmpassword } = props.data;

    return (
        <div className="container mt-5">
            <h2>Resultados</h2>
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmpassword}</p>
        </div>
    );
};

export default Resultados