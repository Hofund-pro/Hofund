import {Grid} from "@mui/material";
import Perfil from "../../assets/img/perfil.jpg";

const Inicio = () => {
  return (
    <div className={"inicio"}>
      <Grid container justifyContent={"center"} alignItems={"center"} spacing={1} sx={{height:"100%"}}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <div className={"moldura"}>
            <img src={Perfil} alt={"Matheus Carneiro"}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <h6>

          </h6>
        </Grid>
      </Grid>
    </div>
  );
}

export default Inicio;