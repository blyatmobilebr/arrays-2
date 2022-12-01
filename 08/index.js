const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const primeiraLetraMaiuscula = frutas.map(fruta => fruta.toLowerCase()).map(fruta => fruta.replace(fruta[0], fruta[0].toUpperCase()));
const resposta = [];

