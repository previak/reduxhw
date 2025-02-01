import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectUserById } from '../store/selectors';
import { updateUserName } from '../store/usersSlice';
import { RootState, AppDispatch } from '../store/store';
import {
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function UserDetail() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((state: RootState) =>
        selectUserById(state, Number(id))
    );
    const [name, setName] = useState(user?.name || '');

    if (!user) return <div>User not found</div>;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        dispatch(updateUserName({ id: user.id, newName: name }));
        navigate('/');
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4 }}>
                <Box mb={4}>
                    <IconButton
                        onClick={() => navigate(-1)}
                        sx={{ color: 'primary.main' }}
                    >
                        <ArrowBackIcon />
                    </IconButton>
                </Box>

                <Box textAlign="center" mb={6}>
                    <Avatar
                        sx={{
                            bgcolor: 'secondary.main',
                            width: 80,
                            height: 80,
                            fontSize: '2rem',
                            mb: 2,
                            mx: 'auto'
                        }}
                    >
                        {user.name.charAt(0)}
                    </Avatar>

                    <Typography variant="h2" gutterBottom>
                        Отредактировать профиль
                    </Typography>
                </Box>

                <form onSubmit={handleSubmit}>
                    <Box display="flex" flexDirection="column" gap={4}>
                        <TextField
                            fullWidth
                            label="Имя"
                            variant="outlined"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            InputProps={{
                                sx: { borderRadius: 2 }
                            }}
                        />

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{
                                py: 2,
                                borderRadius: 2,
                                bgcolor: 'secondary.main',
                                '&:hover': { bgcolor: 'secondary.dark' }
                            }}
                        >
                            Сохранить изменения
                        </Button>
                    </Box>
                </form>
            </Paper>
        </Container>
    );
}