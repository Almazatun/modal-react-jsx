import React, {useState} from "react";
import "./styles.css";
import {Modal} from "./components/Modal/Modal";
import {Form} from './components/Form/Form'


const App = () => {

    const [modalToggle, setModalToggle] = useState(false);
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

    const modalHandler = () => {
        setModalToggle(!modalToggle);
    };

    const onChangeTitle = (value) => {
        setTitle(value);
    };

    const sendMessage = (title) => {
        setMessage(title);
        setTimeout(() => {
            setMessage("");
        }, 3000);
    };

    return (
        <div className="App">
            <h1>Hello everyone</h1>
            <h2>Modal test</h2>
            <Modal
                show={modalToggle}
                onChangeTitle={onChangeTitle}
                modalClosed={modalHandler}
            >
                <Form
                    title={title}
                    onChangeTitle={onChangeTitle}
                    modalClosed={modalHandler}
                    sendMessage={sendMessage}
                />
            </Modal>
            <button onClick={modalHandler}>show Modal</button>
            {message && <h3 style={{fontSize: "35px", color: "yellow"}}>{message}</h3>}
        </div>
    );
};

export default App;
