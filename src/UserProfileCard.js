import React from 'react';
import { Card, CardContent, Typography, Button, Avatar } from '@mui/material';
function UserProfileCard() {
 // Dummy user data - replace with actual data as needed
 const user = {
 name: 'John Doe',
 bio: 'Software Developer',
 avatarUrl: '/path/to/avatar.jpg' // Replace with actual image path
 };
 return (
 <Card style={{ maxWidth: 345, margin: 'auto' }}>
 <CardContent>
 <Avatar 
 src={user.avatarUrl}
 alt={user.name}
 style={{ width: 60, height: 60, margin: '10px auto' }}
 />
 <Typography gutterBottom variant="h5" component="div">
 {user.name}
 </Typography>
 <Typography variant="body2" color="text.secondary">
 {user.bio}
 </Typography>
 <Button variant="contained" color="primary" style={{ marginTop: 20 }}>
 Send Friend Request
 </Button>
 </CardContent>
 </Card>
 );
}
export default UserProfileCard;
