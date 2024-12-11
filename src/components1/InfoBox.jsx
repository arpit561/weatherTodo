import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
export default function InfoBox({ info }) {
  const InitUrl =
    "https://plus.unsplash.com/premium_photo-1714910676815-9fe1d94424bd?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9sbHV0ZWR3ZWF0aGVyfGVufDB8fDB8fHww";

  const hotUrl =
    "https://media.istockphoto.com/id/1323823418/photo/low-angle-view-thermometer-on-blue-sky-with-sun-shining.webp?a=1&b=1&s=612x612&w=0&k=20&c=JfCdjP7brx9oUlLT6TIx9OTtEgvEGNpxDcDFqEz0Fo0=";
  const coldUrl =
    "https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.webp?a=1&b=1&s=612x612&w=0&k=20&c=ID6SPra-gNgAYY7F9p_7_eVLgoxZJeD3N95Nu3LOY9I=";
  const rainyUrl =
    "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
  return (
    <div className="flex justify-center">
      {/* <h2>Weather Info</h2> */}
      {/* <p>{info.weather}</p> */}
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
            info.humidity > 80 ? rainyUrl : info.temp > 15 ? hotUrl : coldUrl
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component={"span"}
          >
            <div>Temperature: {info.temp} &deg;C</div>
            <div>Humidity: {info.humidity}</div>
            <div>Min Temp: {info.tempMin}</div>
            <div>Max Temp: {info.tempMax}</div>
            <p>
              The weather can be described as <i>{info.weather}</i>
            </p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
