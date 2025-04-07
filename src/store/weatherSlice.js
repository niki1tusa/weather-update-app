import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IconType } from "../utilities/IconType";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (cityName) => {
    try {
      // Getting coordinates by city name (input)
      let coordinates = await axios.get(
        `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
      );
      let { latitude, longitude } = coordinates.data.results[0];
      // Getting weather data
      let res = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,rain_sum&hourly=temperature_2m,rain,visibility,cloud_cover&timezone=auto&forecast_days=7`
      );
// seven days

const {temperature_2m_max, temperature_2m_min, time: dailyTime} = res.data.daily
const arrSeven = []
for (let i = 0; i< 7; i++) {
  arrSeven.push({
    id: `${cityName}-${temperature_2m_max[i]}-${i}`,
    time: dailyTime[i],
    tempMax: temperature_2m_max[i],
    tempMin: temperature_2m_min[i],
  });
  
}




      // today 

      let { temperature_2m, rain, cloud_cover } = res.data.hourly;
      let temperature = [];
      const getIconType = (cloud_cover, rain) => {
        let iconType = "";
        iconType =
          cloud_cover > 50
            ? IconType.HEAVY_CLOUD
            : cloud_cover > 30
            ? IconType.MODERATE_CLOUD
            : IconType.LIGHT_CLOUD;
        iconType =
          rain > 7.6
            ? IconType.HEAVY_RAIN
            : rain > 2.5
            ? IconType.MODERATE_RAIN
            : rain > 1
            ? IconType.LIGHT_RAIN
            : iconType;
        return iconType;
      };
      for (let i = 6; i <= 18; i += 3) {
        temperature.push({
          id: `${cityName}-${temperature_2m[i]}-${i}`,
          time: `${i}:00`,
          temp: temperature_2m[i],
          iconType: getIconType(cloud_cover[i], rain[i]),
        });
      }








      return {temperature, arrSeven}
    } catch (error) {
      throw new Error("Name city is error");
    }
  } ////!
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    isLoading: false,
    error: "",
  },
  extraReducers(builder) {
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(getWeather.pending, (state, action) => {
      state.isLoading = true;
      state.error = "";
    });
    builder.addCase(getWeather.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});
export const weatherReducer = weatherSlice.reducer;
