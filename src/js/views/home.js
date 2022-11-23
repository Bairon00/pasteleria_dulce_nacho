import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Productos } from "../component/productos";



export const Home=()=>{
    return(
        <div>
            <Productos></Productos>
            welcome to sugar_nacho!!!

        </div>
    )
}