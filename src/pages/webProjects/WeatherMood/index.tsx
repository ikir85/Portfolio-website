import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";

const cities = ["Paris", "Berlin"] as const;
type City = (typeof cities)[number];

export default function WeatherMood() {
  // const [currentWeather, setCurrentWeather] = useState();
  // const [currentCity, setCurrentCity] = useState();
  const [city, setCity] = useState<City>("Paris");
  const { data: dataGeoloc } = useQuery({
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
  const { data: dataTemp } = useQuery({
    queryKey: ["temp", latitude, longitude],
    queryFn: () =>
      axios
        .get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m`
        )
        .then((res) => res.data),
    enabled: !!latitude && !!longitude,
  });

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
