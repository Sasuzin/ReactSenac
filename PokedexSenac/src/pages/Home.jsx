import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "../componentes/Navbar/principal";
import PokemonCard from "../componentes/CardsPokemons/principal";
import { Skeletons } from "../componentes/Skeletons/principal";

export const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    buscarPokemons();
  }, []);

  const buscarPokemons = () => {
    var endpoints = [];
    for (var pokemon = 1; pokemon < 500; pokemon++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
    }
    axios.all(endpoints.map((endpoint) => axios.get(endpoint))).then((res) => setPokemons(res));
  };

  const pokemonFilter = (name) => {
    var filteredPokemons = [];
    if (name === "") {
      buscarPokemons();
    }
    for (var i in pokemons) {
      if (pokemons[i].data.name.includes(name)) {
        filteredPokemons.push(pokemons[i]);
      }
    }

    setPokemons(filteredPokemons);
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          {pokemons.length === 0 ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <Grid item xs={12} sm={6} md={4} lg={2} key={key}>
                <PokemonCard name={pokemon.data.name} image={pokemon.data.sprites.front_default} types={pokemon.data.types} weigth={pokemon.data.weigth} />
              </Grid>
            ))
          )}
        </Grid>
      </Container>
    </div>
  );
};
