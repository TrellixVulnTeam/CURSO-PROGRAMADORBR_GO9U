import "./styles.css";
import Card from "../../components/Card";

import React from "react";
class Home extends React.Component {
    constructor(props) {
        super(props);

        // ESTADO
        this.state = { guestName: "", guestCard: [] };
        this.addGuest = this.addGuest.bind(this);
    }

    // FUNÇÃO
    addGuest() {
        const newGuest = {
            name: this.state.guestName,
            time: new Date().toLocaleTimeString("pt-br", {
                hour: "2-digit",
                minute: "2-digit",
            }),
        };

        this.setState((prevState) => {
            let newArray = prevState.guestCard;
            // prevState.guestCard.map((cont)=>{newArray.push(cont)})
            if (newGuest.name == "") {
                return;
            }
            newArray.push(newGuest);
            return { guestCard: newArray };
        });
    }
    componentDidMount(){

    }
    // RENDERIZAÇÃO
    render() {
        return (
            <div className="container">
                <header>
                    <h1>Lista de Presença</h1>
                    <div>
                        <strong>Juliu Cesar</strong>
                        <img
                            src="https://github.com/JuliuCesarC.png"
                            alt="Foto de perfil"
                        />
                    </div>
                </header>
                <input
                    type="text"
                    placeholder="Digite o nome..."
                    onChange={(e) => {
                        this.setState(() => {
                            return { guestName: e.target.value };
                        });
                    }}
                />
                <button type="button" onClick={this.addGuest}>
                    Adicionar
                </button>

                {this.state.guestCard.map((guest, index) => (
                    <Card key={index} name={guest.name} time={guest.time} />
                ))}
            </div>
        );
    }
}

export default Home;
