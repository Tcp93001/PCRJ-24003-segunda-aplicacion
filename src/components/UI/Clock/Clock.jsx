import { useEffect, useRef, useState } from "react";
import useHttp from '../../../hooks/use-http'
import Card from "../Card/Card";
import styles from './Clock.module.css'

export default function Clock() {
  const [time, setTime] = useState(new Date());
  const [weather, setWeather] = useState(null)
  const [ciudad, setCiudad] = useState('Anchorage')
  const { isLoading, error, request } = useHttp()

  
    useEffect(() => {
      const fetchUser = async () => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=72af9a5f0f1254dd193fffb4f5e39ff9`
  
        const data = await request({ url })
  
        setWeather(data)
        console.log('data', data)
      }
  
      fetchUser()
    }, [request])

  useEffect(() => {
    // timer updation logic
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const ciudadChange = (event) => setCiudad(event.target.value)

  return (
    <Card className={styles.clock}>
      <div className="elementcontainer">
        <h1>Digital Clock</h1>
        <div className="timeparent">
          <div className="timecontainer">
            {/* print the string prettily */}
            <h1 className="time">{time.toLocaleTimeString()}</h1>
          </div>
        </div>
      </div>

      <h1>Weather of {ciudad}</h1>
      <p>Sensación térmica {weather?.main?.feels_like}</p>
      <p>Temperatura {weather?.main?.temp}</p>
      <p>Tempreatura maxima {weather?.main?.temp_max}</p>

      <label>Ciudad</label>
      <input placeholder="Captura tu ciudad" onChange={ciudadChange} />

    </Card>
  )
  // const h1 = useRef();

  // const ti = () => {
  //   const fechahora = new Date();
  //   const hora = fechahora.getHours();
  //   const minuto = fechahora.getMinutes();
  //   const segundo = fechahora.getSeconds();
  //   return `${hora}:${minuto}:${segundo}`;
  // };

  // useEffect(() => {
  //   const cl = setInterval(() => {
  //     h1.current.innerHTML = `${ti()}`;
  //   }, 1000);
  //   console.log("asd");
  //   return () => clearInterval(cl);
  // }, []);

  // console.log("asdsss");

  // return (
  //   <Card className={styles.clock}>
  //     <h1 ref={h1}>{ti()}</h1>
  //     <h2>Hora actual</h2>
  //   </Card>
  // );
}