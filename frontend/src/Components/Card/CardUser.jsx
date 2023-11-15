/* eslint-disable react/prop-types */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function CardUser({ user }) {
  const { firstname,lastname,student_grp ,student_id  } = user;

  return (
    <div>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="https://cdn.pixabay.com/photo/2023/10/15/15/29/pumpkins-8317227_1280.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {firstname} {lastname}

          </Typography>
          <Typography variant="body2" color="text.secondary">
            {student_grp} {student_id}
          </Typography>
        </CardContent>
        
      </Card>
    </div>
  );
}

export default CardUser;
