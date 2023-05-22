import React, { Component } from "react";
import api from "../services/api";
import {  Container, Header, Avatarperfil, Nameperfil, Stars, Starred, OwnerAvatar, Info, Title, Author, Bioperfil } from "./styles";

export default class User extends Component {
    state = {
        stars: []
    };

    async componentDidMount() {
        const { route } = this.props;
        const { user } = route.params;
        // const response = await api.get(`/api/character/?name=${newUser}`);

        // this.setState({ stars: response.data });
    }

    render() {
        const { route } = this.props;
        const { user } = route.params;
        const { stars } = this.state;

        return (
            <Container>
                <Header>
                    <Avatarperfil source={{ uri: user.image }} />
                    <Nameperfil>{user.name}</Nameperfil>
                    <Nameperfil>{user.status}</Nameperfil>
                    <Nameperfil>{user.episode}</Nameperfil>
                    <Nameperfil>{user.location}</Nameperfil>
                    {/* <Bioperfil>{user.bio}</Bioperfil> */}
                </Header>

                
            </Container>
        );
    }
}