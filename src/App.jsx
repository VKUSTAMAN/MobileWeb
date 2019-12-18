import React, { Component } from 'react';
import logo from './icon1.png';
import Background from './bg1.png';
import telepon from './telepon.png';
import './App.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 680px)").matches,
    };
  }
  componentDidMount() {
    const handler = e => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 680px)").addListener(handler);
  }
  render() {
    const { matches } = this.state;
    return (
      <div clasName="wrapper" style={styles.wrapper}>
        <div style={matches ? styles.parent : styles.wrapper}>
          <div style={matches ? styles.quotes : styles.tulisan}>
            <h1 style={styles.tulisan}>Save Your Earth</h1>

            <h3 style={styles.tulisanPohon}>Menanam Satu Pohon, Menghasilkan Sejuta Manfaat</h3>
            <div style={{
              marginLeft: 80,
            }}>
              <div style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}>
                <div style={styles.parentButton}>
                  <img src={logo}
                    style={styles.logoPohon}
                    alt="Pohon" />
                  <div style={styles.DonasiPohon}>
                    Donasi Pohon
                        </div>
                </div>
                <div style={styles.parentButton1}>
                  <img src={telepon} alt="Telepon"
                    style={styles.logoTelepon} />
                  <div style={styles.Readmore1}>
                    Hubungi Kami
                        </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}
let h = window.innerHeight;

const styles = {
  wrapper: {
    display: "flex",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100%",
    backgroundPosition: "center center",
  },
  parent: {
    height: h,
    width: "100%",
    display: "flex",
    maxWidth: 700
  },
  quotes: {
    margin: 40,
  },
  parentButton: {
    display: "flex",
    borderColor: "transparent",
    borderStyle: "solid",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    margin: 16,
    background: "#00B894",
    fontFamily: "Pangolin",
  },
  DonasiPohon: {
    color: "#FFF",
    marginTop: -20,
    margin: 14,
    marginRight: 50,
    marginLeft: 20,
  },
  parentButton1: {
    display: "flex",
    borderStyle: "solid",
    borderColor: "#00B894",
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 20,
    margin: 16,
    background: "rgba(0, 184, 148, 0.1)",
    fontFamily: "Pangolin",
  },
  Readmore1: {
    color: "#00B894",
    margin: 14,
    marginRight: 50,
    marginLeft: 20,
  },
  tulisan: {
    fontFamily: "Pangolin",
    fontWeight: "normal",
    marginTop: 180,
    marginLeft: 100,
  },
  tulisanPohon: {
    marginLeft: 100,
    fontFamily: "pangolin",
    fontWeight: "normal",
    maxWidth: 700
  },
  logoPohon: {
    width: "10%",
    height: "8%",
    marginTop: 12,
    marginLeft: 10,
  },
  logoTelepon: {
    width: "8%",
    height: "8%",
    marginTop: 15,
    marginLeft: 10,
  }
}

export default App;
