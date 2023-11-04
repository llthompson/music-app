import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Card } from '@mui/material';
import { CardContent } from '@mui/material';
import { CardActions } from '@mui/material';



export default function Dashboard() {
    return (
        <div>
        <h1>Welcome User!</h1>
        <Stack
          direction={{ xs: 'row', sm: 'row' }}
          spacing={{ xs: 1, sm: 2, md: 4 }}
        >
          <Card variant="outlined">
            <CardContent>
              {/* Add your card content here */}
            </CardContent>
            <CardActions>
              {/* Add your card actions here */}
            </CardActions>
          </Card>
          {/* Add more Card components as needed */}
        </Stack>
      </div>
    );
  }