import React, { useState } from "react";



export default function Login() {
    const user={Uemail:"relativity@gmail.com",
          upassword:"Relativity"}
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const validateForm = () => {
        if (email.length > 0 && password.length > 0)
            return console.log("ok")
        else
            return ("error")
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    // const goTodo = () => {
    //     if (validateForm() === true) { navigate('/Todo'); }


    return (
        <div className="container mb-2 mt-4 Login">
            <form>
                <div className="container form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" value={email}className="form-control" onChange={(e) => setEmail(e.target.value)}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                </div>
                <div className="container form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password" />
                </div >


            </form>



            <div className="container mt-3">
                <button type="submit" className="btn btn-primary mx-2">Sign in</button>
            </div>

            {/* <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button block="true" size="lg" type="submit" onClick={validateForm}>
                    Login
                </Button>
            </Form> */}
        </div>
    );
}