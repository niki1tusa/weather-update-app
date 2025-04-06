import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { IconType } from "../utilities/IconType";

export const getWeather = createAsyncThunk(
  "weather/getWeather",
  async (cityName) => {
    try{
               // Getting weather data on 7 days
let sevenData = await axios.get('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m,rain,cloud_cover&timezone=auto')
console.log(sevenData);
          // Getting coordinates by city name (input)
    let coordinates = await axios.get(
      `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}&count=1&language=en&format=json`
    );
    let { latitude, longitude } = coordinates.data.results[0];
    // Getting weather data
    let res = await axios.get(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,rain,cloud_cover&timezone=auto&forecast_days=1`
    );
    let { temperature_2m, rain, cloud_cover } = res.data.hourly;
    let temperature = [];
    const getIconType = (cloud_cover, rain) => {
      let iconType = '';
      iconType = cloud_cover > 50? IconType.HEAVY_CLOUD
      : cloud_cover > 30? IconType.MODERATE_CLOUD
      : IconType.LIGHT_CLOUD 
      iconType = rain > 7.6? IconType.HEAVY_RAIN
      : rain > 2.5? IconType.MODERATE_RAIN
      : rain > 1? IconType.LIGHT_RAIN: iconType
      return iconType
    }
    for (let i = 6; i <= 18; i += 3) {
      temperature.push({
        id: `${cityName}-${temperature_2m[i]}-${i}`,
        time: `${i}:00`,
        temp: temperature_2m[i],
        iconType: getIconType(cloud_cover[i], rain[i])
      });
    }
   return temperature  
    }
catch (error){
throw new Error("Name city is error")
}
  }////!
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: null,
    isLoading: false,
    error: '',
  },
  extraReducers(builder) {
        builder.addCase(getWeather.fulfilled, (state, action)=>{
          state.isLoading = false
            state.data = action.payload
            state.error =''
        })
        builder.addCase(getWeather.pending, (state, action)=>{
            state.isLoading = true;
            state.error = ''
        })
        builder.addCase(getWeather.rejected, (state, action)=>{
            state.isLoading = false;
            state.error = action.error.message;
        })
  }
});
export const weatherReducer = weatherSlice.reducer;
