import { Header } from "../../components/header/header";
import SinUpImg from "../../assets/images/singUp.png";
import "./singUp.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { BASE_URL } from "../../constants/url";

export function SingUp() {
  return (
    <div className="pg-singup">
      <header>
        <Header header={"none"} />
      </header>
      <div className="pg-singup-body">
        <div className="pg-singup-txt-img">
          <span>Heureux de vous revoir !</span>
          <img src={SinUpImg} alt="Conference table" />
        </div>
        <SignUpForm />
      </div>
    </div>
  );
}

function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);


  const handleLogin = async (e) => {
    e.preventDefault();
    await axios
      .post(
        `${BASE_URL}/auth/login`,
        {
          username: email,
          password: password,
          grant_type: "",
          scope: "",
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      )
      .then((res) => {
        console.log(res);
        if (res.status === 200) {

          localStorage.setItem("access_token", res.data.access_token);
          console.log("Successfully logged in! Token:");
          window.location.href = "/";
        } else {
          console.log(res.data.detail);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="form-singup">
      <div className="form-singup-div-1">
        <form className="form-singup-div-2">
          <span className="form-singup-span">Se connecter</span>
          <div className="form-singup-div-4">
            <input
              type="text"
              placeholder="Email"
              className="form-singup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              className="form-singup-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="form-singup-input-span">Mot de passe oublié ?</div>
            <button className="form-singup-btn" onClick={handleLogin}>
              Se connecter
            </button>
          </div>
        </form>
        <div className="form-singup-div-3">
          Vous n'avez pas de compte ?
          <b
            className="form-singup-div-3-b"
            onClick={() => navigate("/singUp")}
          >
            Créer un compte
          </b>
        </div>
      </div>
    </div>
  );
}
