import axios from "axios";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";

const cities = ["Paris", "Berlin"] as const;
type City = (typeof cities)[number];

export default function WeatherMood() {
  // const [currentWeather, setCurrentWeather] = useState();
  // const [currentCity, setCurrentCity] = useState();
  const [city, setCity] = useState<City>("Paris");
  const { data: dataGeoloc, isLoading: isLoadingGeoloc } = useQuery({
    queryKey: ["geocoding", city],
    queryFn: () =>
      axios
        .get(
          `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=10&language=en&format=json`
        )
        .then((res) => res.data),
  });
  const latitude = dataGeoloc?.results[0].latitude;
  const longitude = dataGeoloc?.results[0].longitude;
  const { data: dataTemp, isLoading: isLoadingTemp } = useQuery({
    queryKey: ["temp", latitude, longitude],
    queryFn: () =>
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m`
        )
        .then((res) => res.data),
    enabled: !!latitude && !!longitude,
  });

  // useEffect(() => {
  //   const fetchLocation = async () => {
  //     const response = await fetch(
  //       "https://geocoding-api.open-meteo.com/v1/search?name=Paris&count=10&language=en&format=json"
  //     );
  //     const data = await response.json();
  //     setCurrentCity(data.results[0]);

  //     const responseTemp = await fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=${data.results[0].longitude}&hourly=temperature_2m&current=temperature_2m`
  //     );
  //     const dataTemp = await responseTemp.json();
  //     setCurrentWeather(dataTemp.current.temperature_2m);
  //   };

  //   fetchLocation();
  // }, []);

  // useEffect(() => {
  //   const fetchAge = async () => {
  //     if (!currentCity) return;

  //     const response = await fetch(
  //       `https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=${currentCity.longitude}&hourly=temperature_2m&current=temperature_2m`
  //     );
  //     const data = await response.json();
  //     setCurrentWeather(data.current.temperature_2m);
  //   };

  //   fetchAge();
  // }, [currentCity]);

  console.log(dataGeoloc, dataTemp);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col items-center gap-4">
        <select onChange={(e) => setCity(e.target.value as City)} value={city}>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>

        <span className="text-4xl font-bold">Température actuelle :</span>
        <span
          className={`text-5xl font-bold ${(dataTemp?.current?.temperature_2m ?? 0) > 20 ? "text-red-500" : "text-green-500"}`}
        >
          {dataTemp?.current?.temperature_2m
            ? dataTemp.current.temperature_2m
            : "calculating..."}{" "}
          °C
        </span>
      </div>
      <p>Longitude : {dataGeoloc?.results[0]?.longitude}</p>
      <p>Latitude : {dataGeoloc?.results[0]?.latitude}</p>
    </div>
  );
}
