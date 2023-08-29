import React from "react";
import imagen from "../assets/la mo.png"
import "../styles/Login.css"
function Login() {
    return (
        <div class="main">
            <div class="fondo">
                <div class="logo">
                    <img src={imagen} alt="img"/>
                </div>
                <div class="email">
                    <input type="email" placeholder="EMAIL"/>
                </div>
                <div class="pas">
                    <input type="password" placeholder=" * * * *"/>
                </div>
                <div class="nn">
                    <a href="menu.html">
                        <button>    LOGIN </button>
                    </a>
                </div>
            </div>
            <div class="main2">
                <p>Olvidaste tu contraseña? <a href="">   Click aqui</a></p>
            </div>
        </div>
    )
}

export default Login;