import "./App.css";
import pik from "./img/pika.png";
import { Wheel } from "react-custom-roulette";
import cavern from "./img/cavern.png";
import badge1 from "./img/FRLG_badge1.png";
import badge2 from "./img/FRLG_badge2.png";
import badge3 from "./img/FRLG_badge3.png";
import badge4 from "./img/FRLG_badge4.png";
import badge5 from "./img/FRLG_badge5.png";
import badge6 from "./img/FRLG_badge6.png";
import badge7 from "./img/FRLG_badge7.png";
import badge8 from "./img/FRLG_badge8.png";
import { Tooltip, Whisper } from "rsuite";
//import audio from "./img/Pika.mp3";
//import Sonoincredibile from "./img/Sonoincredibile.mp3";
//import splash from "./img/splash.mp3";
//import Explosion from "./img/Explosion.mp3";
//import dragonite from "./img/dragonite.mp3";
//import Evolution from "./img/Evolution.mp3";
import badge1_OFF from "./img/FRLG_badge1_OFF.png";
import badge2_OFF from "./img/FRLG_badge2_OFF.png";
import badge3_OFF from "./img/FRLG_badge3_OFF.png";
import badge4_OFF from "./img/FRLG_badge4_OFF.png";
import badge5_OFF from "./img/FRLG_badge5_OFF.png";
import badge6_OFF from "./img/FRLG_badge6_OFF.png";
import badge7_OFF from "./img/FRLG_badge7_OFF.png";
import badge8_OFF from "./img/FRLG_badge8_OFF.png";
import pika from "./img/pikachu-sinnohcap.gif";
import hitmonchan from "./img/hitmonchan.gif";
import logo from "./img/logo.png";
import save from "./img/save.svg";
import i18next from "i18next";
import "rsuite/dist/styles/rsuite-default.css";
import { Alert } from "rsuite";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
import React, { Component } from "react";
import { SelectPicker } from "rsuite";

const datarandom = [
  {
    option: "SINISTRA",
    style: { backgroundColor: "#387198", textColor: "#222222" }
  },
  {
    option: "CENTRO",
    style: { backgroundColor: "#ce7056", textColor: "#222222" }
  },
  {
    option: "DESTRA",
    style: { backgroundColor: "#77AC7F", textColor: "#222222" }
  }
];

const data = [
  {
    value: "AUTODISTRUZIONE BROCK",
    label: "AUTODISTRUZIONE BROCK"
  },
  {
    value: "TRUANT BROCK",
    label: "TRUANT BROCK"
  },
  {
    value: "3 SPLASH BROCK",
    label: "3 SPLASH BROCK"
  },
  {
    value: "BROCK CATERPIE/WRUMPLE/WEEDLE",
    label: "BROCK CATERPIE/WRUMPLE/WEEDLE"
  },
  {
    value: "EVOLVI SHELGON/DRAGONAIR",
    label: "EVOLVI SHELGON/DRAGONAIR"
  },
  {
    value: "BROCK CON SHINY",
    label: "BROCK CON SHINY"
  },
  {
    value: "3TH PIGLIAMOSCHE SENZA DANNO DIRETTO",
    label: "3TH PIGLIAMOSCHE SENZA DANNO DIRETTO"
  },
  {
    value: "RIVALE DOPO BROCK 2 STATS. +6",
    label: "RIVALE DOPO BROCK 2 STATS. +6"
  },
  {
    value: "NO STRUMENTI DAL LABORATORIO A FINE MONTE LUNA",
    label: "NO STRUMENTI DAL LABORATORIO A FINE MONTE LUNA"
  },
  {
    value: "BOSCO SMERALDO SOLO SHEDINJA",
    label: "BOSCO SMERALDO SOLO SHEDINJA"
  },
  {
    value: "EVOLVI POKEMON 1s AL 3s ORIGINALE",
    label: "EVOLVI POKEMON 1s AL 3s ORIGINALE"
  },
  {
    value: "SCONFIGGI PIGLIAMOSCE METRONOMO",
    label: "SCONFIGGI PIGLIAMOSCE METRONOMO"
  }
];

export class Kaizo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classifica: [],
      settings: false,
      classif: false,
      random: false,
      punteggio: 0,
      palestre: 0,
      prizeNumber: 0,
      try: 0,
      dungeon: 0,
      elite4: 0,
      select: true,
      value: "",
      nome: "",
      triggerWeedle: false,
      triggerDrago: false,
      triggerSplash: false,
      triggerExpolsion: false,
      triggerTraunt: false,
      triggerSilph: false,
      triggerShiny: false,
      triggerLegendary: false,
      triggerPigliamosche: false,
      triggerRivaleBrock: false,
      triggerNoitem: false,
      triggerEvolution: false,
      badge1_OFF: false,
      badge2_OFF: false,
      badge3_OFF: false,
      badge4_OFF: false,
      badge5_OFF: false,
      badge6_OFF: false,
      badge7_OFF: false,
      badge8_OFF: false,
      badge1pla_OFF: false,
      badge2pla_OFF: false,
      badge3pla_OFF: false,
      badge4pla_OFF: false,
      badge5pla_OFF: false,
      badge6pla_OFF: false,
      badge7pla_OFF: false,
      badge8pla_OFF: false,
      setMustSpin: false,
      request: false,
      compress: true,
      language: localStorage.getItem("lang"),
      version: true
    };
  }
  // FOR ALL VERSION
  componentDidMount() {
    if (this.props.location.state === undefined) {
      this.setState({ error: true });
    } else {
      axios
        .get(
          "https://kaizopoly-default-rtdb.firebaseio.com/firered/users/" +
            this.props.location.state.name +
            "|" +
            this.props.location.state.psw +
            ".json"
        )
        .then((response) => {
          this.setState({ nome: response.data.email });
          this.setState({ try: response.data.try });
          this.setState({ punteggio: response.data.punteggio });
          this.setState({ palestre: response.data.palestre });
          this.setState({ dungeon: response.data.dungeon });
          this.setState({ elite4: response.data.elite4 });
          this.setState({ rivale: response.data.rivale });
          if (response.data.palestre === 1) {
            this.setState({ badge1_OFF: true });
          }
          if (response.data.palestre === 2) {
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
          }
          if (response.data.palestre === 3) {
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
            this.setState({ badge3_OFF: true });
          }
          if (response.data.palestre === 4) {
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
            this.setState({ badge3_OFF: true });
            this.setState({ badge4_OFF: true });
          }
          if (response.data.palestre === 5) {
            this.setState({ badge5_OFF: true });
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
            this.setState({ badge3_OFF: true });
            this.setState({ badge4_OFF: true });
          }
          if (response.data.palestre === 6) {
            this.setState({ badge5_OFF: true });
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
            this.setState({ badge3_OFF: true });
            this.setState({ badge4_OFF: true });
            this.setState({ badge6_OFF: true });
          }
          if (response.data.palestre === 7) {
            this.setState({ badge7_OFF: true });
            this.setState({ badge5_OFF: true });
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
            this.setState({ badge3_OFF: true });
            this.setState({ badge4_OFF: true });
            this.setState({ badge6_OFF: true });
          }
          if (response.data.palestre === 8) {
            this.setState({ badge8_OFF: true });
            this.setState({ badge7_OFF: true });
            this.setState({ badge5_OFF: true });
            this.setState({ badge1_OFF: true });
            this.setState({ badge2_OFF: true });
            this.setState({ badge3_OFF: true });
            this.setState({ badge4_OFF: true });
            this.setState({ badge6_OFF: true });
          }

          if (response.data.dungeon === 0) {
            this.setState({ nome_dungeon100: "" });
            this.setState({ nome_dungeon: "MONTE LUNA" });
          }
          if (response.data.dungeon === 1) {
            this.setState({ nome_dungeon100: "MONTE LUNA 100%" });
            this.setState({ nome_dungeon: "M/N ANNA" });
          }
          if (response.data.dungeon === 2) {
            this.setState({ nome_dungeon100: "M/N ANNA 100%" });
            this.setState({ nome_dungeon: "TUNNEL ROCCIOSO" });
          }
          if (response.data.dungeon === 3) {
            this.setState({ nome_dungeon100: "TUNNEL ROCCIOSO 100%" });
            this.setState({ nome_dungeon: "TORRE LAV." });
          }
          if (response.data.dungeon === 4) {
            this.setState({ nome_dungeon100: "TORRE LAV. 100%" });
            this.setState({ nome_dungeon: "TEAM ROCKET HIDEOUT" });
          }
          if (response.data.dungeon === 5) {
            this.setState({ nome_dungeon100: "ROCKET HIDEOUT 100%" });
            this.setState({ nome_dungeon: "VILLA POKEMON" });
          }
          if (response.data.dungeon === 6) {
            this.setState({ nome_dungeon100: "VILLA POKEMON 100%" });
            this.setState({ nome_dungeon: "SILPH SPA" });
          }
          if (response.data.dungeon === 7) {
            this.setState({ nome_dungeon100: "SILPH SPA 100%" });
            this.setState({ nome_dungeon: "VIA VITTORIA" });
          }
          if (response.data.dungeon === 8) {
            this.setState({ nome_dungeon100: "VIA VITTORIA 100%" });
            this.setState({ nome_dungeon: "COMPLETATO" });
          }

          if (response.data.elite4 === 0) {
            this.setState({ nome_elite4: "LORELEI" });
          }
          if (response.data.elite4 === 1) {
            this.setState({ nome_elite4: "BRUNO" });
          }
          if (response.data.elite4 === 2) {
            this.setState({ nome_elite4: "AGATHA" });
          }
          if (response.data.elite4 === 3) {
            this.setState({ nome_elite4: "LANCE" });
          }
          if (response.data.elite4 === 4) {
            this.setState({ nome_elite4: "RIVALE" });
          }
        });
      this.interval = setInterval(() => this.trySave(), 300000);
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  // FOR ALL VERSION

  // FOR FIRE RED
  trySave = (e) => {
    axios
      .put(
        "https://kaizopoly-default-rtdb.firebaseio.com/firered/users/" +
          this.props.location.state.name +
          "|" +
          this.props.location.state.psw +
          ".json",
        {
          email: this.props.location.state.name,
          psw: this.props.location.state.psw,
          punteggio: this.state.punteggio,
          palestre: this.state.palestre,
          try: this.state.try,
          dungeon: this.state.dungeon,
          elite4: this.state.elite4,
          rivale: this.state.rivale
        }
      )
      .then((result) => {
        console.log(result.data);

        Alert.success("SALVATO", 4000);
      });
  };
  Handlecompress = (e) => {
    this.setState({ compress: !this.state.compress });
  };
  onClickreset = (e) => {
    console.log("reset all");

    this.setState({ elite4: 0 });
    this.setState({ rivale: 0 });
    this.setState({ nome_elite4: "LORELEI" });
    this.setState({ dungeon: 0 });
    this.setState({ nome_dungeon: "MONTE LUNA" });
    this.setState({ nome_dungeon100: "" });
    this.setState({ palestre: 0 });
    this.setState({
      badge1_OFF: false,
      badge2_OFF: false,
      badge3_OFF: false,
      badge4_OFF: false,
      badge5_OFF: false,
      badge6_OFF: false,
      badge7_OFF: false,
      badge8_OFF: false
    });
  };
  onClickPalestra = (e) => {
    console.log("palestre");
    if (this.state.palestre === 0) {
      let sum = this.state.punteggio + 80;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge1_OFF: true });
    }
    if (this.state.palestre === 1) {
      let sum = this.state.punteggio + 10;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge2_OFF: true });
    }
    if (this.state.palestre === 2) {
      let sum = this.state.punteggio + 15;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge3_OFF: true });
    }
    if (this.state.palestre === 3) {
      let sum = this.state.punteggio + 10;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge4_OFF: true });
    }
    if (this.state.palestre === 4) {
      let sum = this.state.punteggio + 55;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge5_OFF: true });
    }
    if (this.state.palestre === 5) {
      let sum = this.state.punteggio + 50;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge6_OFF: true });
    }
    if (this.state.palestre === 6) {
      let sum = this.state.punteggio + 50;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge7_OFF: true });
    }
    if (this.state.palestre === 7) {
      let sum = this.state.punteggio + 90;
      let punt = this.state.palestre + 1;
      this.setState({ palestre: punt });
      this.setState({ punteggio: sum });
      this.setState({ badge8_OFF: true });
    }
  };
  onClickLab = (e) => {
    let sum = this.state.punteggio + 20;
    this.setState({ punteggio: sum });
  };
  onClickAllenatore = (e) => {
    if (this.state.nome_dungeon100 === "MONTE LUNA 100%") {
      let sum = this.state.punteggio + 30;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "M/N ANNA 100%") {
      let sum = this.state.punteggio + 40;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "TUNNEL ROCCIOSO 100%") {
      let sum = this.state.punteggio + 35;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "ROCKET HIDEOUT 100%") {
      let sum = this.state.punteggio + 25;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "TORRE LAV. 100%") {
      let sum = this.state.punteggio + 20;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "SILPH SPA 100%") {
      let sum = this.state.punteggio + 100;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "VILLA POKEMON 100%") {
      let sum = this.state.punteggio + 15;
      this.setState({ punteggio: sum });
    }
    if (this.state.nome_dungeon100 === "VIA VITTORIA 100%") {
      let sum = this.state.punteggio + 100;
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon100: "COMPLETATO" });
    }
  };
  onClickDungeon = (e) => {
    if (this.state.dungeon === 0) {
      let sum = this.state.punteggio + 5;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "M/N ANNA" });
      this.setState({ nome_dungeon100: "MONTE LUNA 100%" });
    }
    if (this.state.dungeon === 1) {
      let sum = this.state.punteggio + 10;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "TUNNEL ROCCIOSO" });
      this.setState({ nome_dungeon100: "M/N ANNA 100%" });
    }
    if (this.state.dungeon === 2) {
      let sum = this.state.punteggio + 15;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "TORRE LAV." });
      this.setState({ nome_dungeon100: "TUNNEL ROCCIOSO 100%" });
    }
    if (this.state.dungeon === 3) {
      let sum = this.state.punteggio + 0;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "TEAM ROCKET HIDEOUT" });
      this.setState({ nome_dungeon100: "TORRE LAV. 100%" });
    }
    if (this.state.dungeon === 4) {
      let sum = this.state.punteggio + 10;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "VILLA POKEMON" });
      this.setState({ nome_dungeon100: "ROCKET HIDEOUT 100%" });
    }
    if (this.state.dungeon === 5) {
      let sum = this.state.punteggio + 10;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "SILPH SPA" });
      this.setState({ nome_dungeon100: "VILLA POKEMON 100%" });
    }
    if (this.state.dungeon === 6) {
      let sum = this.state.punteggio + 15;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon: "VIA VITTORIA" });
      this.setState({ nome_dungeon100: "SILPH SPA 100%" });
    }
    if (this.state.dungeon === 7) {
      let sum = this.state.punteggio + 5;
      let punt = this.state.dungeon + 1;
      this.setState({ dungeon: punt });
      this.setState({ punteggio: sum });
      this.setState({ nome_dungeon100: "VIA VITTORIA 100%" });
      this.setState({ nome_dungeon: "COMPLETATO" });
    }
  };
  onClickRivale = (e) => {
    if (this.state.rivale === 0) {
      let sum = this.state.punteggio + 20;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 1) {
      let sum = this.state.punteggio + 5;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 2) {
      let sum = this.state.punteggio + 10;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 3) {
      let sum = this.state.punteggio + 15;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 4) {
      let sum = this.state.punteggio + 10;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 5) {
      let sum = this.state.punteggio + 20;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 6) {
      let sum = this.state.punteggio + 20;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
    if (this.state.rivale === 7) {
      let sum = this.state.punteggio + 50;
      this.setState({ punteggio: sum });
      this.setState({ rivale: this.state.rivale + 1 });
    }
  };
  onClickSuper = (e) => {
    if (this.state.elite4 === 0) {
      this.setState({ nome_elite4: "BRUNO" });
      let punt = this.state.elite4 + 1;
      this.setState({ elite4: punt });
      let sum = this.state.punteggio + 100;
      this.setState({ punteggio: sum });
    }
    if (this.state.elite4 === 1) {
      this.setState({ nome_elite4: "AGATHA" });
      let punt = this.state.elite4 + 1;
      this.setState({ elite4: punt });
      let sum = this.state.punteggio + 120;
      this.setState({ punteggio: sum });
    }
    if (this.state.elite4 === 2) {
      this.setState({ nome_elite4: "LANCE" });
      let punt = this.state.elite4 + 1;
      this.setState({ elite4: punt });
      let sum = this.state.punteggio + 140;
      this.setState({ punteggio: sum });
    }
    if (this.state.elite4 === 3) {
      this.setState({ nome_elite4: "RIVALE" });
      let punt = this.state.elite4 + 1;
      this.setState({ elite4: punt });
      let sum = this.state.punteggio + 160;
      this.setState({ punteggio: sum });
    }
    if (this.state.elite4 === 4) {
      let punt = this.state.elite4 + 1;
      this.setState({ elite4: punt });
      let sum = this.state.punteggio + 500;
      this.setState({ punteggio: sum });
    }
  };
  onClickmenoCura = (e) => {
    let sum = this.state.punteggio - 5;
    this.setState({ punteggio: sum });
  };
  onClickmeno5 = (e) => {
    let sum = this.state.punteggio - 5;
    this.setState({ punteggio: sum });
  };
  onClickpiu5 = (e) => {
    let sum = this.state.punteggio + 5;
    this.setState({ punteggio: sum });
  };
  onClickmenoCmbia = (e) => {
    let sum = this.state.punteggio - 1;
    this.setState({ punteggio: sum });
  };
  SelectBonus = (value) => {
    console.log(value);
    if (value === "AUTODISTRUZIONE BROCK") {
      let sum = this.state.punteggio + 250;
      this.setState({ punteggio: sum });
      this.setState({ triggerExpolsion: true });
      // var audi = new Audio(Explosion);
      // audi.volume = 0.3;
      // audi.play();
      setTimeout(() => {
        this.setState({ triggerExpolsion: false });
      }, 5000);
    }
    if (value === "SCONFIGGI PIGLIAMOSCE METRONOMO") {
      let sum = this.state.punteggio + 300;
      this.setState({ punteggio: sum });
      this.setState({ triggerLegendary: true });

      setTimeout(() => {
        this.setState({ triggerLegendary: false });
      }, 5000);
    }
    if (value === "TRUANT BROCK") {
      let sum = this.state.punteggio + 350;
      this.setState({ punteggio: sum });
      this.setState({ triggerTraunt: true });

      setTimeout(() => {
        this.setState({ triggerTraunt: false });
      }, 5000);
    }
    if (value === "3 SPLASH BROCK") {
      let sum = this.state.punteggio + 350;
      this.setState({ punteggio: sum });
      this.setState({ triggerSplash: true });
      // var audi = new Audio(splash);
      // audi.volume = 0.3;
      // audi.play();
      setTimeout(() => {
        this.setState({ triggerSplash: false });
      }, 5000);
    }
    if (value === "EVOLVI SHELGON/DRAGONAIR") {
      let sum = this.state.punteggio + 300;
      this.setState({ punteggio: sum });
      this.setState({ triggerDrago: true });
      // var audi = new Audio(dragonite);
      // audi.volume = 0.3;
      // audi.play();
      setTimeout(() => {
        this.setState({ triggerDrago: false });
      }, 5000);
    }
    if (value === "SILPH SPA 100%") {
      let sum = this.state.punteggio + 250;
      this.setState({ punteggio: sum });
      this.setState({ triggerSilph: true });

      setTimeout(() => {
        this.setState({ triggerSilph: false });
      }, 5000);
    }
    if (value === "BROCK CATERPIE/WRUMPLE/WEEDLE") {
      let sum = this.state.punteggio + 500;
      this.setState({ punteggio: sum });
      this.setState({ triggerWeedle: true });
      // var audi = new Audio(Sonoincredibile);
      // audi.volume = 0.2;
      // audi.play();
      setTimeout(() => {
        this.setState({ triggerWeedle: false });
      }, 3500);
    }
    if (value === "3TH PIGLIAMOSCHE SENZA DANNO DIRETTO") {
      let sum = this.state.punteggio + 350;
      this.setState({ punteggio: sum });
      this.setState({ triggerPigliamosche: true });

      setTimeout(() => {
        this.setState({ triggerPigliamosche: false });
      }, 5000);
    }
    if (value === "RIVALE DOPO BROCK 2 STATS. +6") {
      let sum = this.state.punteggio + 200;
      this.setState({ punteggio: sum });
      this.setState({ triggerRivaleBrock: true });

      setTimeout(() => {
        this.setState({ triggerRivaleBrock: false });
      }, 5000);
    }
    if (value === "NO STRUMENTI DAL LABORATORIO A FINE MONTE LUNA") {
      let sum = this.state.punteggio + 300;
      this.setState({ punteggio: sum });
      this.setState({ triggerNoitem: true });

      setTimeout(() => {
        this.setState({ triggerNoitem: false });
      }, 5000);
    }
    if (value === "BOSCO SMERALDO SOLO SHEDINJA") {
      let sum = this.state.punteggio + 400;
      this.setState({ punteggio: sum });
      this.setState({ triggerSHEDINJA: true });

      setTimeout(() => {
        this.setState({ triggerSHEDINJA: false });
      }, 5000);
    }
    if (value === "EVOLVI POKEMON 1s AL 3s ORIGINALE") {
      let sum = this.state.punteggio + 300;
      this.setState({ punteggio: sum });
      this.setState({ triggerEvolution: true });
      // var audi = new Audio(Evolution);
      // audi.volume = 0.3;
      // audi.play();
      setTimeout(() => {
        this.setState({ triggerEvolution: false });
      }, 5000);
    }
    if (value === "BROCK CON SHINY") {
      let sum = this.state.punteggio + 500;
      this.setState({ punteggio: sum });
      this.setState({ triggerShiny: true });

      setTimeout(() => {
        this.setState({ triggerShiny: false });
      }, 5000);
    }
  };
  // FOR FIRE RED

  // FOR ALL VERSION
  TriggerModal = (e) => {
    this.setState({ settings: !this.state.settings });
  };
  selectLanguage = (e) => {
    this.setState({ language: e.target.value });
    localStorage.setItem("lang", e.target.value);
    window.location.reload();
  };
  onClickVersion = (e) => {
    this.setState({ version: !this.state.version });
  };
  classificationfalse = (e) => {
    this.setState({ classif: !this.state.classif });
  };
  classification = (e) => {
    this.setState({ classif: !this.state.classif });
    this.setState({ classifica: [] });
    axios
      .get("https://kaizopoly-default-rtdb.firebaseio.com/firered/users.json")
      .then((response) => {
        var cla;
        let dati = response.data;
        let dato = Object.keys(dati);
        for (let index = 0; index < dato.length; index++) {
          let nome = dati[dato[index]].email;
          let tenta = dati[dato[index]].try;
          let punt = dati[dato[index]].punteggio;
          cla = this.state.classifica;
          cla.push({
            nome: nome,
            punt: punt,
            tenta: tenta
          });
        }

        let classifica = cla.sort((a, b) => b.punt - a.punt);
        this.setState({ classifica: classifica });
      });
  };

  trymin = (e) => {
    let sum = this.state.try - 1;
    this.setState({ try: sum });
  };
  tryRandom = (e) => {
    this.setState({ random: !this.state.random });
    this.setState({ prizeNumber: Math.floor(Math.random() * data.length) });
    this.setState({ setMustSpin: true });
    if (this.state.nome !== "Droodthund3r") {
      setTimeout(() => {
        this.setState({ random: !this.state.random });
      }, 6000);
    }
  };
  Randomfalse = (e) => {
    this.setState({ random: !this.state.random });
  };
  tryplus = (e) => {
    let sum = this.state.try + 1;
    this.setState({ try: sum });
    this.setState({ request: true });
  };
  HandleNO = (e) => {
    this.setState({ request: false });
  };
  HandleSi = (e) => {
    console.log("try");
    this.setState({ request: false });
    this.onClickreset();
  };
  SpeakPika = (e) => {
    // var audi = new Audio(audio);
    // audi.volume = 0.05;
    // audi.play();
  };

  render() {
    if (this.state.error === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="App">
        <div
          style={{
            position: "absolute",
            bottom: "5px",
            left: "50%",
            fontFamily: "Gantari",
            fontSize: "16px",
            color: "#fff",
            transform: "translate(-50%, -50%)"
          }}
        >
          by <a href="https://www.instagram.com/enricosellanora/">Enrico</a>{" "}
          with &#10084;
        </div>
        <Whisper
          trigger="click"
          placement="right"
          speaker={
            <Tooltip>
              Ciao! Per poter capire al meglio il funzionamento del Tool per la
              Kaizo Challenge consulta la{" "}
              <Link
                style={{ marginRight: "10px" }}
                className="nohover"
                to="PolyIronmonLeague.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
              >
                Guida
              </Link>
            </Tooltip>
          }
        >
          <img
            onClick={this.SpeakPika}
            className="pikaHelper"
            src={pik}
            alt=""
          />
        </Whisper>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px"
          }}
          className="container"
        >
          <div
            className="containerTools"
            style={{
              width: "600px",
              border: "4px solid black",
              position: "relative"
            }}
          >
            <div
              style={{
                position: "absolute",
                bottom: "-41%",
                left: "50%",
                display: "flex",
                alignItems: "center",
                transform: "translate(-50%,-50%)"
              }}
            >
              <i
                onClick={this.trymin}
                style={{ fontSize: "70px", color: "#fff" }}
                className="far fa-minus-square"
              ></i>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  width: "200px",
                  height: "175px",
                  border: "8px solid #fff",
                  margin: "0px 20px",
                  borderRadius: "5px",
                  backgroundColor: "#222222"
                }}
              >
                <h2
                  style={{
                    fontSize: "60px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  TRY
                </h2>
                <h2 style={{ fontSize: "70px", color: "#fff" }}>
                  {this.state.try}
                </h2>
              </div>
              <i
                onClick={this.tryplus}
                style={{ fontSize: "70px", color: "#fff" }}
                className="far fa-plus-square"
              ></i>
            </div>
            {this.state.triggerWeedle ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase"
                  }}
                >
                  Mio padre!
                </h2>
                <img
                  style={{
                    height: "220px"
                  }}
                  src="https://c.tenor.com/lcRSaChOCh8AAAAM/caterpie-pilao-caterpie-bombadao.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +500
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.request ? (
              <div
                style={{
                  width: "350px",
                  height: "220px",
                  marginTop: "348px",
                  marginLeft: "133px",
                  border: "4px solid white",
                  position: "absolute",
                  background: "#495057",
                  zIndex: 99,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  borderRadius: "10px",
                  top: "-3px",
                  left: "-4px"
                }}
              >
                <h2
                  style={{
                    fontSize: "22px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    textAlign: "center"
                  }}
                >
                  Hai perso ? Vuoi refreshare anche i tasti ?
                </h2>
                <div>
                  <button
                    style={{
                      width: "124px",
                      fontFamily: "Gantari",
                      fontSize: "22px",
                      fontWeight: "bold",
                      position: "relative",
                      marginLeft: "20px",
                      textAlign: "center",
                      height: "52.27px",
                      marginTop: "0px"
                    }}
                    onClick={this.HandleNO}
                    className="
                    button button3 b8"
                  >
                    NO
                  </button>
                  <button
                    style={{
                      width: "124px",
                      fontFamily: "Gantari",
                      fontSize: "22px",
                      fontWeight: "bold",
                      position: "relative",
                      marginLeft: "20px",
                      textAlign: "center",
                      height: "52.27px",
                      marginTop: "0px"
                    }}
                    onClick={this.HandleSi}
                    className="button button3 b10"
                  >
                    SI
                  </button>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerDrago ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "50px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    textAlign: "center"
                  }}
                >
                  Evoluzione incredibile!
                </h2>
                <img
                  style={
                    this.state.compress
                      ? {
                          width: "430px"
                        }
                      : {
                          height: "180px"
                        }
                  }
                  src="https://c.tenor.com/Z_CnEHoG0lcAAAAC/best-evolution-with-pokemon.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +300
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerShiny ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "50px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    textAlign: "center"
                  }}
                >
                  IT'S SHINY BABY!
                </h2>
                <img
                  style={{
                    height: "220px"
                  }}
                  src="https://media.tenor.com/g4P59eXvUVoAAAAC/gyaradoes-pok%C3%A9mon-gyaradoes.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +500
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerSplash ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  SPLASH!
                </h2>
                <img
                  style={{
                    width: "508px"
                  }}
                  src="https://www.icegif.com/wp-content/uploads/angry-pokemon-icegif.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +350
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerExpolsion ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  BOOM!
                </h2>
                <img
                  style={
                    this.state.compress
                      ? {
                          width: "498px"
                        }
                      : {
                          height: "200px"
                        }
                  }
                  src="https://c.tenor.com/jQA-rWHlJXEAAAAC/self-destruct-pokemon.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +250
                </h2>
              </div>
            ) : (
              ""
            )}

            {this.state.triggerLegendary ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  RANDOM
                </h2>
                <img
                  style={
                    this.state.compress
                      ? {
                          width: "476px"
                        }
                      : {
                          height: "200px"
                        }
                  }
                  src="https://c.tenor.com/PSf-fa3QrhwAAAAC/munchlax-pokemon.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +300
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerTraunt ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  ResidentSleeper
                </h2>
                <img
                  style={
                    this.state.compress
                      ? {
                          width: "476px"
                        }
                      : {
                          height: "200px"
                        }
                  }
                  src="https://i.pinimg.com/originals/20/77/68/20776891228b10ea7a42267e2cbb5a9d.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +350
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerSilph ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase"
                  }}
                >
                  il più forte!
                </h2>
                <img
                  style={{
                    width: "498px"
                  }}
                  src="https://c.tenor.com/IA8iPm_2N2cAAAAC/mewtwo-pokemon.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +200
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerPigliamosche ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                >
                  weSmart{" "}
                  <img
                    style={{
                      width: "55px"
                    }}
                    src="https://cdn.frankerfacez.com/emoticon/165742/2"
                    alt=""
                  />
                </h2>
                <img
                  style={{
                    height: "200px"
                  }}
                  src="https://64.media.tumblr.com/cd871470d48d505a6b992714613545cc/tumblr_n7s25e2Psv1rd4ymxo1_500.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +350
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerRivaleBrock ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px"
                  }}
                ></h2>
                <img
                  style={
                    this.state.compress
                      ? {
                          width: "476px"
                        }
                      : {
                          height: "200px"
                        }
                  }
                  src="https://www.icbz4.it/alunnifermi/wp-content/uploads/2019/12/significato-stonks-1024x766.jpg"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +200
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerNoitem ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "40px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: "70px"
                  }}
                >
                  c'è luogo e tempo per ogni cosa
                </h2>
                <img
                  style={
                    this.state.compress
                      ? {
                          width: "450px"
                        }
                      : {
                          height: "200px"
                        }
                  }
                  src="https://www.pokemonmillennium.net/wp-content/uploads/2017/09/prof-oak-c%c3%a8-luogo-e-momento-ma-non-ora.jpg"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "100px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +300
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerSHEDINJA ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: "70px"
                  }}
                ></h2>
                <img
                  style={{
                    width: "302px"
                  }}
                  src="http://pa1.narvii.com/5748/64dd857491a1c932b30d41d6dd9cc7d9aa4558a5_00.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +400
                </h2>
              </div>
            ) : (
              ""
            )}
            {this.state.triggerEvolution ? (
              <div
                className="AnimateDiv"
                style={
                  this.state.compress
                    ? {
                        width: "600px",
                        height: "684.13px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                    : {
                        width: "600px",
                        height: "531px",
                        marginTop: "154px",
                        border: "4px solid black",
                        position: "absolute",
                        background: "#222222",
                        zIndex: 99,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "column",
                        top: "-3px",
                        left: "-4px"
                      }
                }
              >
                <h2
                  style={{
                    fontSize: "70px",
                    color: "#fff",
                    marginBottom: "20px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    lineHeight: "70px"
                  }}
                ></h2>
                <img
                  style={{
                    height: "208px"
                  }}
                  src="https://media.tenor.com/BSJdU4PZtjoAAAAC/pokemon-evolution.gif"
                  alt=""
                />
                <h2
                  style={{
                    fontSize: "130px",
                    color: "#fff",
                    marginTop: "40px"
                  }}
                >
                  +300
                </h2>
              </div>
            ) : (
              ""
            )}

            <div
              style={{
                width: "100%",
                position: "absolute",
                height: "151.5px",
                top: "0",
                right: "0",
                zIndex: "0",
                backgroundColor: "#387198"
              }}
            ></div>
            <div
              onClick={this.TriggerModal}
              className="buttonup"
              style={{
                position: "absolute",

                top: "45px",
                left: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                style={{
                  width: "40px"
                }}
                src="https://raw.githubusercontent.com/PunchablePlushie/godot_ggs/main/icon.png"
                alt=""
              />

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: "4PX",
                  fontFamily: "Gantari"
                }}
              >
                {i18next.t("SETTINGS")}
              </span>
            </div>

            <div
              onClick={this.onClickreset}
              className="buttonup"
              style={{
                position: "absolute",

                top: "45px",
                left: "90px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <i
                style={{
                  fontSize: "40px",
                  color: "white"
                }}
                className="fas fa-sync-alt"
              ></i>

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: "4PX",
                  fontFamily: "Gantari"
                }}
              >
                {i18next.t("RESET BUTTON")}
              </span>
            </div>

            <div
              onClick={this.trySave}
              className="buttonup"
              style={{
                position: "absolute",

                top: "45px",
                right: "20px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <img
                style={{
                  width: "40px"
                }}
                src={save}
                alt=""
              />

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: "4PX",
                  fontFamily: "Gantari"
                }}
              >
                {i18next.t("SAVE")}
              </span>
            </div>
            <div
              onClick={this.tryRandom}
              className="buttonup"
              style={{
                position: "absolute",

                top: "45px",
                right: "90px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <i
                style={{ fontSize: "40px", color: "white" }}
                class="fas fa-random"
              ></i>

              <span
                style={{
                  fontSize: "10px",
                  fontWeight: "bold",
                  color: "#fff",
                  marginTop: "4PX",
                  fontFamily: "Gantari"
                }}
              >
                {i18next.t("RANDOM")}
              </span>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                zIndex: "1"
              }}
            >
              <img
                style={
                  this.state.compress
                    ? { width: "163px", zIndex: "1", marginTop: "10px" }
                    : {
                        marginBottom: "38px",
                        width: "123px",
                        zIndex: "1",
                        marginTop: "10px"
                      }
                }
                src={logo}
                alt=""
              />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                marginTop: "30px",
                marginBottom: "20px"
              }}
            >
              <div
                style={{
                  width: "580px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "10px"
                }}
              >
                <button
                  style={{
                    width: "270px",
                    fontFamily: "Gantari",

                    fontSize: "17px",
                    fontWeight: "bold",
                    position: "relative",

                    textAlign: "end",
                    color: "black"
                  }}
                  onClick={this.onClickRivale}
                  className={
                    this.state.rivale !== 0 && this.state.rivale !== 5
                      ? "button b5"
                      : this.state.rivale === 0
                      ? "button b1"
                      : "button b3"
                  }
                >
                  {" "}
                  {this.state.rivale !== 0 && this.state.rivale !== 5 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-32px",
                        left: "5px",
                        width: "75px"
                      }}
                      src="https://media.pokemoncentral.it/wiki/a/a3/RFVF_Blu_Campione.png"
                      alt=""
                    />
                  ) : this.state.rivale === 0 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-23px",
                        left: "13px",
                        width: "50px"
                      }}
                      src={pika}
                      alt=""
                    />
                  ) : this.state.rivale === 5 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-32px",
                        left: "13px",
                        width: "50px"
                      }}
                      src={hitmonchan}
                      alt=""
                    />
                  ) : (
                    ""
                  )}{" "}
                  {this.state.rivale + 1 < 9
                    ? this.state.rivale === 0
                      ? "USCIRE DAL LAB"
                      : this.state.rivale === 5
                      ? "DOJO KARATE"
                      : this.state.rivale === 1
                      ? "SCONFIGGI RIVALE 1"
                      : this.state.rivale === 2
                      ? "SCONFIGGI RIVALE 2"
                      : this.state.rivale === 3
                      ? "SCONFIGGI RIVALE 3"
                      : this.state.rivale === 4
                      ? "SCONFIGGI RIVALE 4"
                      : this.state.rivale === 6
                      ? "SCONFIGGI RIVALE 5"
                      : this.state.rivale === 7
                      ? "SCONFIGGI RIVALE 6"
                      : ""
                    : "COMPLETATO"}
                </button>
              </div>
              <div
                style={{
                  width: "580px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "10px"
                }}
              >
                {this.state.nome_dungeon100 !== "" ? (
                  <button
                    style={{
                      width: "270px",
                      fontFamily: "Gantari",

                      fontSize: "17px",
                      marginRight: "20px",
                      position: "relative",
                      fontWeight: "bold",
                      textAlign: "end",
                      color: "black"
                    }}
                    onClick={this.onClickAllenatore}
                    className="button b2"
                  >
                    {" "}
                    <img
                      style={{
                        position: "absolute",
                        top: "3px",
                        left: "13px",
                        height: "40px"
                      }}
                      src="https://hotemoji.com/images/dl/a/100-emoji-by-google.png"
                      alt=""
                    />{" "}
                    {this.state.nome_dungeon100}
                  </button>
                ) : (
                  ""
                )}
                <div style={{ position: "relative" }}>
                  <button
                    style={{
                      width: "270px",
                      fontFamily: "Gantari",

                      fontSize: "17px",
                      fontWeight: "bold",
                      position: "relative",

                      textAlign: "end",
                      color: "black"
                    }}
                    onClick={this.onClickDungeon}
                    className="button b3"
                  >
                    {" "}
                    <img
                      style={{
                        position: "absolute",
                        top: "-23px",
                        left: "13px",
                        width: "50px"
                      }}
                      src={cavern}
                      alt=""
                    />{" "}
                    {this.state.nome_dungeon}
                  </button>
                </div>
              </div>
              <div
                style={{
                  width: "580px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "10px"
                }}
              >
                <div style={{ position: "relative" }}>
                  <button
                    style={{
                      width: "270px",
                      fontFamily: "Gantari",

                      fontSize: "17px",
                      fontWeight: "bold",
                      position: "relative",
                      marginRight: "20px",
                      textAlign: "end",
                      color: "black"
                    }}
                    onClick={this.onClickPalestra}
                    className="button b4"
                  >
                    {this.state.badge1_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "10px",
                          width: "30px"
                        }}
                        src={badge1}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "10px",
                          width: "30px"
                        }}
                        src={badge1_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge2_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "42px",
                          width: "30px"
                        }}
                        src={badge2}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "42px",
                          width: "30px"
                        }}
                        src={badge2_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge3_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "72px",
                          width: "30px"
                        }}
                        src={badge3}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "72px",
                          width: "30px"
                        }}
                        src={badge3_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge4_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "102px",
                          width: "30px"
                        }}
                        src={badge4}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "102px",
                          width: "30px"
                        }}
                        src={badge4_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge5_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "132px",
                          width: "30px"
                        }}
                        src={badge5}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "132px",
                          width: "30px"
                        }}
                        src={badge5_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge6_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "162px",
                          width: "30px"
                        }}
                        src={badge6}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "162px",
                          width: "30px"
                        }}
                        src={badge6_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge7_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "192px",
                          width: "30px"
                        }}
                        src={badge7}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "192px",
                          width: "30px"
                        }}
                        src={badge7_OFF}
                        alt=""
                      />
                    )}
                    {this.state.badge8_OFF ? (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "226px",
                          width: "30px"
                        }}
                        src={badge8}
                        alt=""
                      />
                    ) : (
                      <img
                        style={{
                          position: "absolute",
                          top: "-20px",
                          left: "226px",
                          width: "30px"
                        }}
                        src={badge8_OFF}
                        alt=""
                      />
                    )}
                    SCONFIGGI CAPOPALESTRA
                  </button>
                </div>

                <button
                  style={{
                    width: "270px",
                    fontFamily: "Gantari",

                    fontSize: "17px",
                    fontWeight: "bold",
                    position: "relative",

                    textAlign: "end",
                    color: "black"
                  }}
                  onClick={this.onClickSuper}
                  className="button b6"
                >
                  {" "}
                  {this.state.elite4 === 0 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-35px",
                        left: "2px",
                        width: "75px"
                      }}
                      src="https://media.pokemoncentral.it/wiki/4/4e/RFVF_Lorelei.png"
                      alt=""
                    />
                  ) : this.state.elite4 === 1 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-35px",
                        left: "2px",
                        width: "75px"
                      }}
                      src="https://media.pokemoncentral.it/wiki/a/a4/RFVF_Bruno.png"
                      alt=""
                    />
                  ) : this.state.elite4 === 2 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-35px",
                        left: "2px",
                        width: "75px"
                      }}
                      src="https://media.pokemoncentral.it/wiki/8/81/RFVF_Agatha.png"
                      alt=""
                    />
                  ) : this.state.elite4 === 3 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-35px",
                        left: "2px",
                        width: "75px"
                      }}
                      src="https://media.pokemoncentral.it/wiki/2/2d/RFVF_Lance.png"
                      alt=""
                    />
                  ) : this.state.elite4 === 4 ? (
                    <img
                      style={{
                        position: "absolute",
                        top: "-35px",
                        left: "2px",
                        width: "75px"
                      }}
                      src="https://media.pokemoncentral.it/wiki/a/a3/RFVF_Blu_Campione.png"
                      alt=""
                    />
                  ) : (
                    ""
                  )}
                  {this.state.elite4 < 5
                    ? "SCONFIGGI " + this.state.nome_elite4
                    : "SEI IL CAMPIONE!"}
                </button>
              </div>
              <div
                style={{
                  width: "580px",
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                  marginBottom: "10px"
                }}
              >
                <button
                  style={{
                    width: "124px",
                    fontFamily: "Gantari",
                    fontSize: "22px",
                    fontWeight: "bold",
                    position: "relative",
                    marginRight: "20px",
                    textAlign: "center",
                    height: "52.27px",
                    marginTop: "0px"
                  }}
                  onClick={this.onClickmeno5}
                  className="button button3 b8"
                >
                  -5
                </button>
                <div className="rainbow" style={{ position: "relative" }}>
                  {this.state.select ? (
                    <SelectPicker
                      data={data}
                      value={this.state.value}
                      onChange={this.SelectBonus}
                      appearance="LE 12 FATICHE"
                      placeholder="LE 12 FATICHE"
                      className="button brbow"
                      style={{
                        width: "270px",
                        fontFamily: "Gantari",
                        height: "45.28px",
                        fontSize: "17px",
                        fontWeight: "bold",
                        position: "relative"
                      }}
                    />
                  ) : (
                    ""
                  )}
                </div>

                <button
                  style={{
                    width: "124px",
                    fontFamily: "Gantari",
                    fontSize: "22px",
                    fontWeight: "bold",
                    position: "relative",
                    marginLeft: "20px",
                    textAlign: "center",
                    height: "52.27px",
                    marginTop: "0px"
                  }}
                  onClick={this.onClickpiu5}
                  className="button button3 b10"
                >
                  +5
                </button>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignitems: "center",
                marginTop: "40px",
                marginBottom: "40px"
              }}
            >
              <h2
                style={{
                  fontSize: "50px",
                  color: "white",
                  fontFamily: "Gantari",
                  fontWeight: "bold"
                }}
              >
                {i18next.t("SCORE")}:{" "}
                <span
                  style={{ fontSize: "95px", marginLeft: "10px" }}
                  id="clicks"
                >
                  {this.state.punteggio}
                </span>
              </h2>
            </div>
            {this.state.settings ? (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,.45)",
                  height: "100%",
                  justifyContent: "center",
                  left: "0",
                  overflowY: "scroll",
                  position: "fixed",
                  top: "0",
                  width: "100%",
                  zIndex: "99"
                }}
              >
                <div
                  style={{
                    display: "block",
                    position: "relative",
                    width: "604px",
                    border: "4px solid black",
                    height: "684.13px",
                    margin: "10px auto",
                    overflowY: "hidden",
                    backgroundColor: "#495057"
                  }}
                >
                  <i
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "30px",
                      fontSize: "40px",
                      color: "#fff",
                      cursor: "pointer"
                    }}
                    onClick={this.TriggerModal}
                    className="fas fa-times"
                  ></i>
                  <h2
                    style={{
                      marginTop: "20px",
                      textAlign: "center",
                      fontSize: "60px",
                      color: "#fff"
                    }}
                  >
                    {i18next.t("Option")}
                  </h2>
                  <div
                    style={{
                      display: "flex",
                      fontSize: "40px",
                      justifyContent: "center",
                      width: "100%"
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        fontSize: "25px",
                        flexDirection: "column",
                        width: "100%",
                        marginTop: "40px"
                      }}
                    >
                      <p style={{ marginLeft: "40px", marginBottom: "20px" }}>
                        {i18next.t("Languages")}
                      </p>
                      <div style={{ marginLeft: "40px", marginBottom: "40px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <select
                            onChange={this.selectLanguage}
                            value={this.state.language}
                            style={{
                              outline: "none",
                              border: "none",
                              height: "39px",
                              paddingLeft: "35px",
                              background: "#F5F6F7",
                              borderRadius: "5px",
                              padding: "10px 71px 10px 18px",
                              textDecoration: "none",
                              lineHeight: "19px",
                              color: "#49505C",
                              fontSize: "18px"
                            }}
                            name=""
                            id=""
                          >
                            <option value={"it"}>Italiano</option>
                            <option value={"en"}>English</option>
                            <option value={"es"}>Español</option>
                            <option value={"fr"}>Français</option>
                          </select>
                          {this.state.language === "it" ? (
                            <img
                              style={{ width: "39px", marginLeft: "10px" }}
                              src="https://cdn-icons-png.flaticon.com/512/197/197626.png"
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                          {this.state.language === "en" ? (
                            <img
                              style={{ width: "39px", marginLeft: "10px" }}
                              src="https://cdn-icons-png.flaticon.com/512/197/197374.png"
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                          {this.state.language === "es" ? (
                            <img
                              style={{ width: "39px", marginLeft: "10px" }}
                              src="https://cdn-icons-png.flaticon.com/512/197/197593.png"
                              alt=""
                            />
                          ) : (
                            ""
                          )}

                          {this.state.language === "fr" ? (
                            <img
                              style={{ width: "39px", marginLeft: "10px" }}
                              src="https://cdn-icons-png.flaticon.com/512/197/197560.png"
                              alt=""
                            />
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                    <div
                      style={{
                        display: "flex",
                        fontSize: "40px",
                        alignItems: "center",
                        flexDirection: "column",
                        width: "100%"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          fontSize: "40px",
                          justifyContent: "center",
                          width: "100%",
                          position: "relative"
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            top: "440px",
                            left: "-258px",
                            fontSize: "18px",
                            color: "#fff",
                            fontWeight: "bold"
                          }}
                        >
                          Pokemon Poly Ironmon League
                          <br />
                          By Enrico
                          <br />
                          <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://it.linkedin.com/in/enricosellanora"
                          >
                            <i class="fab fa-linkedin"></i> Linkedin
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.classif ? (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,.45)",
                  height: "100%",
                  justifyContent: "center",
                  left: "2px",
                  overflowY: "scroll",
                  position: "fixed",
                  top: "0",
                  width: "100%",
                  zIndex: "99"
                }}
              >
                <div
                  style={{
                    display: "block",
                    position: "relative",
                    width: "800px",
                    border: "4px solid black",
                    height: "684.13px",
                    margin: "10px auto",
                    overflowY: "scroll",
                    backgroundColor: "#495057"
                  }}
                >
                  <i
                    style={{
                      position: "absolute",
                      top: "20px",
                      right: "20px",
                      fontSize: "40px",
                      color: "#fff",
                      cursor: "pointer"
                    }}
                    onClick={this.classificationfalse}
                    className="fas fa-times"
                  ></i>
                  <div style={{}}>
                    <h2
                      style={{
                        fontSize: "40px",
                        color: "#fff",
                        textAlign: "center",
                        marginTop: "8px"
                      }}
                    >
                      Classifica
                    </h2>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <table
                        style={{
                          marginTop: "40px",
                          fontSize: "20px",
                          fontWeight: "bold"
                        }}
                      >
                        <thead style={{ fontSize: "25px" }}>
                          <tr
                            style={{
                              border: "1px solid #fff",
                              color: "#fff",
                              height: 41
                            }}
                          >
                            <th>No.</th>
                            <th>Nome</th>
                            <th>Punteggio</th>
                            <th>Try</th>
                            <th>AVG </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.classifica
                            ? this.state.classifica.map((lello, i) => (
                                <tr
                                  style={{
                                    border: "1px solid #fff",
                                    color: "#fff",
                                    height: 41
                                  }}
                                >
                                  <td>{i + 1}</td>
                                  <td
                                    style={{
                                      borderLeft: "1px solid #fff",
                                      borderRight: "1px solid #fff"
                                    }}
                                  >
                                    {lello.nome}
                                  </td>
                                  <td>{lello.punt}</td>
                                  <td>{lello.tenta}</td>
                                  <td>
                                    {parseFloat(
                                      lello.punt / lello.tenta
                                    ).toFixed(2)}{" "}
                                  </td>
                                </tr>
                              ))
                            : ""}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
            {this.state.random ? (
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,.45)",
                  height: "100%",
                  justifyContent: "center",
                  left: "0px",

                  position: "fixed",
                  top: "0",
                  width: "100%",
                  zIndex: "99"
                }}
              >
                <div
                  style={
                    this.state.compress
                      ? {
                          display: "block",
                          position: "relative",
                          width: "600px",
                          border: "4px solid black",
                          height: "684.13px",
                          margin: "10px auto",
                          backgroundColor: "#495057"
                        }
                      : {
                          display: "block",
                          position: "relative",
                          width: "600px",
                          border: "4px solid black",
                          height: "531px",
                          margin: "160px auto",
                          backgroundColor: "#495057"
                        }
                  }
                >
                  {this.state.nome === "Droodthund3r" ? (
                    <i
                      style={{
                        position: "absolute",
                        top: "20px",
                        right: "20px",
                        fontSize: "40px",
                        color: "#fff",
                        cursor: "pointer"
                      }}
                      onClick={this.Randomfalse}
                      className="fas fa-times"
                    ></i>
                  ) : (
                    ""
                  )}
                  <div>
                    {this.state.compress ? (
                      <h2
                        style={{
                          fontSize: "40px",
                          color: "#fff",
                          textAlign: "center",
                          marginTop: "8px"
                        }}
                      >
                        Randomizer
                      </h2>
                    ) : (
                      ""
                    )}
                    <div
                      style={{
                        display: "flex",
                        marginTop: "35px",
                        flexDirection: "column",
                        alignItems: "center"
                      }}
                    >
                      <Wheel
                        mustStartSpinning={this.state.setMustSpin}
                        prizeNumber={this.state.prizeNumber}
                        data={datarandom}
                        radiusLineColor="white"
                        innerBorderColor="white"
                        outerBorderColor="white"
                        onStopSpinning={() => {
                          this.setState({ setMustSpin: false });
                        }}
                        spinDuration={[0.06]}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        {this.state.nome === "Poly" ? (
          <div
            onClick={this.classification}
            className="buttonup"
            style={{
              position: "absolute",

              top: "20px",
              right: "20px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i
              style={{
                fontSize: "40px",
                color: "#fff"
              }}
              class="fas fa-list-ol"
            ></i>

            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#fff",
                marginTop: "4PX",
                fontFamily: "Gantari"
              }}
            >
              {i18next.t("CLASSIFICATION")}
            </span>
          </div>
        ) : (
          ""
        )}
        {this.state.compress ? (
          <div
            onClick={this.Handlecompress}
            className="buttonup"
            style={{
              position: "absolute",

              top: "20px",
              left: "20px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i
              style={{
                fontSize: "40px",
                color: "#fff"
              }}
              class="fas fa-compress"
            ></i>

            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#fff",
                marginTop: "4PX",
                fontFamily: "Gantari"
              }}
            >
              {i18next.t("SIZE")}
            </span>
          </div>
        ) : (
          <div
            onClick={this.Handlecompress}
            className="buttonup"
            style={{
              position: "absolute",

              top: "20px",
              left: "20px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <i
              style={{
                fontSize: "40px",
                color: "#fff"
              }}
              class="fas fa-expand"
            ></i>

            <span
              style={{
                fontSize: "10px",
                fontWeight: "bold",
                color: "#fff",
                marginTop: "4PX",
                fontFamily: "Gantari"
              }}
            >
              {i18next.t("SIZE")}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default Kaizo;
