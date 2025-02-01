import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUsers } from '../store/selectors';
import {
    Avatar,
    Box,
    Card,
    CardContent,
    Chip,
    Container,
    Grid,
    Typography
} from '@mui/material';

export default function UsersList() {
    const users = useSelector(selectUsers);

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Box sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography variant="h1" gutterBottom>
                    Список пользователей
                    <Chip
                        label={`${users.length} пользователей`}
                        color="primary"
                        variant="outlined"
                        sx={{ ml: 2, fontSize: '1rem', verticalAlign: 'middle' }}
                    />
                </Typography>
            </Box>

            <Grid container spacing={3} sx={{ width: '100%' }}>
                {users.map((user) => (
                    <Grid item xs={12} sm={8} md={6} key={user.id}>
                        <Card
                            component={Link}
                            to={`/users/${user.id}`}
                            sx={{
                                textDecoration: 'none',
                                transition: 'transform 0.2s',
                                '&:hover': {
                                    transform: 'translateY(-5px)',
                                }
                            }}
                        >
                            <CardContent>
                                <Box display="flex" alignItems="center" gap={2}>
                                    <Avatar
                                        sx={{
                                            bgcolor: 'secondary.main',
                                            width: 56,
                                            height: 56,
                                            fontSize: '1.5rem'
                                        }}
                                    >
                                        {user.name.charAt(0)}
                                    </Avatar>
                                    <Box textAlign="left">
                                        <Typography variant="h6" component="div">
                                            {user.name}
                                        </Typography>
                                        <Chip
                                            label={`ID: ${user.id}`}
                                            size="small"
                                            sx={{ mt: 1, bgcolor: 'primary.light', color: 'primary.contrastText' }}
                                        />
                                    </Box>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}